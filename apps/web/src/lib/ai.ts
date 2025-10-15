import { Exercise } from '@math-app/core';

const ABACUS_API_URL = 'https://api.abacus.ai/v1/chat';
const API_KEY = import.meta.env.VITE_ABACUS_API_KEY;
const PROJECT_ID = import.meta.env.VITE_ABACUS_PROJECT_ID;

/**
 * Call Abacus.AI chat API
 */
async function callAbacusAI(prompt: string): Promise<string> {
  if (!API_KEY || !PROJECT_ID) {
    console.warn('Abacus.AI credentials not configured, returning mock response');
    return JSON.stringify({
      errorInsights: 'Configuration AI manquante - Réponse simulée',
      hint: 'Vérifie tes calculs étape par étape',
      firstStep: 'Commence par identifier l\'opération à effectuer',
    });
  }

  try {
    const response = await fetch(ABACUS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        projectId: PROJECT_ID,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling Abacus.AI:', error);
    // Return a fallback response
    return JSON.stringify({
      errorInsights: 'Erreur lors de l\'appel à l\'IA',
      hint: 'Réessaie ou demande de l\'aide à ton enseignant',
      firstStep: 'Décompose le problème en étapes plus simples',
    });
  }
}

/**
 * Get error explanation and hints for an incorrect answer
 */
export async function explainError(payload: {
  exercise: Exercise;
  userAnswer: string;
  correctSolution: string;
}): Promise<{
  errorInsights: string;
  hint: string;
  firstStep: string;
}> {
  const prompt = `Tu es un professeur de mathématiques pour collégiens. Un élève a fait une erreur dans cet exercice.

Exercice: ${payload.exercise.question}
Réponse de l'élève: ${payload.userAnswer}
Solution correcte: ${payload.correctSolution}

Fournis une réponse au format JSON avec:
- errorInsights: une phrase courte (max 2 phrases) expliquant l'erreur probable de l'élève de manière bienveillante
- hint: un indice utile sans donner la solution complète (max 2 phrases)
- firstStep: la première étape guidée pour résoudre cet exercice (max 1 phrase)

Réponds uniquement en JSON sans texte additionnel.`;

  const response = await callAbacusAI(prompt);
  
  try {
    return JSON.parse(response);
  } catch {
    // Fallback if parsing fails
    return {
      errorInsights: 'Vérifie tes calculs, il semble y avoir une erreur dans tes étapes.',
      hint: 'Pense à bien suivre l\'ordre des opérations et à simplifier ton résultat.',
      firstStep: 'Commence par identifier ce que tu dois calculer.',
    };
  }
}

/**
 * Get a hint for an exercise
 */
export async function hint(payload: { exercise: Exercise }): Promise<{ hint: string }> {
  const prompt = `Tu es un professeur de mathématiques pour collégiens. Un élève demande un indice pour cet exercice:

Exercice: ${payload.exercise.question}

Donne un indice utile sans révéler la solution complète. Sois bienveillant et pédagogue.
Réponds au format JSON: {"hint": "..."}

Réponds uniquement en JSON sans texte additionnel.`;

  const response = await callAbacusAI(prompt);
  
  try {
    return JSON.parse(response);
  } catch {
    // Fallback if parsing fails
    return {
      hint: 'Réfléchis aux étapes nécessaires pour résoudre ce type d\'exercice. Que dois-tu faire en premier ?',
    };
  }
}

/**
 * Cache for AI responses to avoid redundant API calls
 */
class AICache {
  private cache: Map<string, any> = new Map();
  private maxSize = 50;

  generateKey(exercise: Exercise, type: 'error' | 'hint'): string {
    return `${type}_${exercise.skillId || 'unknown'}_${exercise.difficulty}_${exercise.seed}`;
  }

  get(key: string): any | null {
    return this.cache.get(key) || null;
  }

  set(key: string, value: any): void {
    if (this.cache.size >= this.maxSize) {
      // Remove oldest entry
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const aiCache = new AICache();
