import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Helper functions for Firestore operations

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(userId: string) {
  const { doc, getDoc } = await import('firebase/firestore');
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

/**
 * Get user's skill mastery
 */
export async function getUserSkills(userId: string) {
  const { collection, getDocs } = await import('firebase/firestore');
  const skillsRef = collection(db, 'users', userId, 'skills');
  const snapshot = await getDocs(skillsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Update skill mastery
 */
export async function updateSkillMastery(
  userId: string,
  skillId: string,
  mastery: number,
  nextReview: number
) {
  const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
  const skillRef = doc(db, 'users', userId, 'skills', skillId);
  await setDoc(
    skillRef,
    {
      mastery,
      lastSeen: serverTimestamp(),
      nextReview,
    },
    { merge: true }
  );
}

/**
 * Save attempt to Firestore
 */
export async function saveAttempt(userId: string, attempt: Record<string, unknown>) {
  const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
  const attemptsRef = collection(db, 'users', userId, 'attempts');
  await addDoc(attemptsRef, {
    ...attempt,
    timestamp: serverTimestamp(),
  });
}

/**
 * Create new session
 */
export async function createSession(userId: string, sessionId: string) {
  const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
  const sessionRef = doc(db, 'users', userId, 'sessions', sessionId);
  await setDoc(sessionRef, {
    startedAt: serverTimestamp(),
    durationSec: 0,
    scoreTotal: 0,
  });
}

/**
 * Update session
 */
export async function updateSession(
  userId: string,
  sessionId: string,
  durationSec: number,
  scoreTotal: number
) {
  const { doc, updateDoc } = await import('firebase/firestore');
  const sessionRef = doc(db, 'users', userId, 'sessions', sessionId);
  await updateDoc(sessionRef, {
    durationSec,
    scoreTotal,
  });
}

/**
 * Get user's streak
 */
export async function getUserStreak(userId: string): Promise<number> {
  const { collection, query, orderBy, limit, getDocs } = await import('firebase/firestore');
  const attemptsRef = collection(db, 'users', userId, 'attempts');
  const q = query(attemptsRef, orderBy('timestamp', 'desc'), limit(30));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return 0;

  // Calculate consecutive days
  const attempts = snapshot.docs.map((doc) => doc.data());
  let streak = 1;
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  for (let i = 0; i < attempts.length; i++) {
    const attemptDate = new Date(attempts[i].timestamp.toDate());
    attemptDate.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor(
      (currentDate.getTime() - attemptDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff === streak) {
      streak++;
    } else if (daysDiff > streak) {
      break;
    }
  }

  return streak;
}

/**
 * Get character data from Firestore
 */
export async function getCharacter(userId: string) {
  const { doc, getDoc } = await import('firebase/firestore');
  const docRef = doc(db, 'users', userId, 'game', 'character');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

/**
 * Update character data in Firestore
 */
export async function updateCharacter(userId: string, characterData: Record<string, unknown>) {
  const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
  const characterRef = doc(db, 'users', userId, 'game', 'character');
  await setDoc(
    characterRef,
    {
      ...characterData,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
}

/**
 * Listen to character changes in real-time
 */
export async function onCharacterChange(
  userId: string,
  callback: (character: Record<string, unknown>) => void
) {
  const { doc, onSnapshot } = await import('firebase/firestore');
  const characterRef = doc(db, 'users', userId, 'game', 'character');

  return onSnapshot(characterRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data());
    }
  });
}
