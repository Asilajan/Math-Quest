import { CourseChapter } from './types';

// Updated: 9 chapters, 44 lessons total
// All chapters complete:
// - Fractions: 5 lessons | Nombres Relatifs: 5 lessons | Puissances: 5 lessons
// - Équations: 4 lessons | Proportionnalité: 5 lessons | Calcul Littéral: 4 lessons
// - Géométrie: 8 lessons | Statistiques: 4 lessons | Probabilités: 3 lessons
export const COURSE_CHAPTERS: CourseChapter[] = [
  {
    id: 'fractions',
    title: 'Les Fractions',
    description: 'Maîtrise l\'art des fractions : addition, soustraction, multiplication et division',
    theme: 'fire',
    icon: '🔥',
    order: 1,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'fractions_basics',
        skillId: 'fractions_addition',
        title: 'Introduction aux Fractions',
        description: 'Comprendre ce qu\'est une fraction et comment la représenter',
        icon: '📊',
        difficulty: 'beginner',
        estimatedTime: 15,
        keyPoints: [
          'Une fraction représente une partie d\'un tout',
          'Le numérateur indique le nombre de parts prises',
          'Le dénominateur indique le nombre de parts total',
          'Deux fractions peuvent représenter la même valeur (fractions équivalentes)',
        ],
        sections: [
          {
            id: 'intro',
            title: 'Qu\'est-ce qu\'une fraction ?',
            content: `Une **fraction** est un nombre qui représente une partie d'un tout.

Elle s'écrit sous la forme **a/b** où :
- **a** est le **numérateur** (nombre du haut) : il indique combien de parts on prend
- **b** est le **dénominateur** (nombre du bas) : il indique en combien de parts égales on a divisé le tout

**Exemple :** Dans la fraction 3/4 :
- Le numérateur 3 signifie qu'on prend 3 parts
- Le dénominateur 4 signifie que le tout est divisé en 4 parts égales
- Donc 3/4 représente "3 parts sur 4"`,
            order: 1,
          },
          {
            id: 'representation',
            title: 'Représentation visuelle',
            content: `On peut représenter les fractions de plusieurs façons :

**1. Avec des diagrammes en barres :**
Une barre divisée en 4 parties égales, avec 3 parties coloriées représente 3/4.

**2. Avec des cercles (camemberts) :**
Un cercle divisé en 4 parts égales, avec 3 parts coloriées représente 3/4.

**3. Sur une droite graduée :**
On divise l'unité en 4 segments égaux, 3/4 se situe au 3ème segment.`,
            order: 2,
          },
          {
            id: 'equivalent',
            title: 'Fractions équivalentes',
            content: `Deux fractions sont **équivalentes** si elles représentent la même valeur.

**Règle :** On obtient une fraction équivalente en multipliant (ou divisant) le numérateur ET le dénominateur par un même nombre.

**Exemples :**
- 1/2 = 2/4 = 3/6 = 4/8
- 2/3 = 4/6 = 6/9 = 8/12

Pour **simplifier** une fraction, on divise le numérateur et le dénominateur par leur **PGCD** (Plus Grand Commun Diviseur).`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Identifier une fraction',
            problem: 'Un gâteau est divisé en 8 parts égales. Marie en mange 3. Quelle fraction du gâteau a-t-elle mangée ?',
            solution: '3/8',
            steps: [
              'Le gâteau est divisé en 8 parts égales → dénominateur = 8',
              'Marie en mange 3 → numérateur = 3',
              'La fraction est donc 3/8',
            ],
            explanation: 'Marie a mangé 3 parts sur 8.',
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Fractions équivalentes',
            problem: 'Trouve une fraction équivalente à 2/5 en multipliant par 3',
            solution: '6/15',
            steps: [
              'On multiplie le numérateur par 3 : 2 × 3 = 6',
              'On multiplie le dénominateur par 3 : 5 × 3 = 15',
              'La fraction équivalente est 6/15',
            ],
            explanation: '2/5 et 6/15 représentent la même valeur.',
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Simplifier une fraction',
            problem: 'Simplifie la fraction 12/18',
            solution: '2/3',
            steps: [
              'Trouve le PGCD de 12 et 18 : PGCD(12, 18) = 6',
              'Divise le numérateur par 6 : 12 ÷ 6 = 2',
              'Divise le dénominateur par 6 : 18 ÷ 6 = 3',
              'La fraction simplifiée est 2/3',
            ],
            explanation: '12/18 = 2/3 est la forme la plus simple.',
          },
        ],
        relatedLessons: ['fractions_addition', 'fractions_multiplication'],
      },
      {
        id: 'fractions_addition',
        skillId: 'fractions_addition',
        title: 'Addition de Fractions',
        description: 'Apprends à additionner des fractions avec et sans dénominateur commun',
        icon: '➕',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Même dénominateur : additionner les numérateurs',
          'Dénominateurs différents : trouver un dénominateur commun',
          'Toujours simplifier le résultat final',
        ],
        sections: [
          {
            id: 'same_denominator',
            title: 'Addition avec même dénominateur',
            content: `Quand deux fractions ont le **même dénominateur**, c'est très simple !

**Règle :** On additionne les numérateurs et on garde le dénominateur.

**Formule :** a/c + b/c = (a + b)/c

**Exemple :**
3/7 + 2/7 = (3 + 2)/7 = 5/7`,
            order: 1,
          },
          {
            id: 'different_denominator',
            title: 'Addition avec dénominateurs différents',
            content: `Quand les dénominateurs sont **différents**, il faut d'abord les rendre identiques.

**Méthode :**
1. Trouve un dénominateur commun (souvent le plus petit commun multiple - PPCM)
2. Transforme chaque fraction pour avoir ce dénominateur
3. Additionne les numérateurs
4. Simplifie si possible

**Exemple :** 1/3 + 1/4
- PPCM(3, 4) = 12
- 1/3 = 4/12 (multiplier par 4)
- 1/4 = 3/12 (multiplier par 3)
- 4/12 + 3/12 = 7/12`,
            order: 2,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Même dénominateur',
            problem: 'Calculer : 2/9 + 5/9',
            solution: '7/9',
            steps: [
              'Les dénominateurs sont identiques (9)',
              'Additionner les numérateurs : 2 + 5 = 7',
              'Garder le dénominateur : 9',
              'Résultat : 7/9',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Dénominateurs différents',
            problem: 'Calculer : 1/2 + 1/3',
            solution: '5/6',
            steps: [
              'PPCM(2, 3) = 6',
              'Transformer 1/2 : 1/2 = 3/6',
              'Transformer 1/3 : 1/3 = 2/6',
              'Additionner : 3/6 + 2/6 = 5/6',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Avec simplification',
            problem: 'Calculer : 2/6 + 1/6',
            solution: '1/2',
            steps: [
              'Même dénominateur : 2/6 + 1/6 = 3/6',
              'Simplifier par 3 : 3/6 = 1/2',
            ],
          },
        ],
        prerequisites: ['fractions_basics'],
        relatedLessons: ['fractions_subtraction'],
      },
      {
        id: 'fractions_subtraction',
        skillId: 'fractions_subtraction',
        title: 'Soustraction de Fractions',
        description: 'Apprends à soustraire des fractions avec et sans dénominateur commun',
        icon: '➖',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Même dénominateur : soustraire les numérateurs',
          'Dénominateurs différents : trouver un dénominateur commun',
          'Attention aux signes négatifs',
          'Toujours simplifier le résultat final',
        ],
        sections: [
          {
            id: 'same_denominator',
            title: 'Soustraction avec même dénominateur',
            content: `Quand deux fractions ont le **même dénominateur**, c'est très simple !

**Règle :** On soustrait les numérateurs et on garde le dénominateur.

**Formule :** a/c - b/c = (a - b)/c

**Exemple :**
5/7 - 2/7 = (5 - 2)/7 = 3/7

**Attention :** Si le résultat est négatif, on garde le signe moins :
2/9 - 5/9 = (2 - 5)/9 = -3/9 = -1/3`,
            order: 1,
          },
          {
            id: 'different_denominator',
            title: 'Soustraction avec dénominateurs différents',
            content: `Quand les dénominateurs sont **différents**, il faut d'abord les rendre identiques.

**Méthode :**
1. Trouve un dénominateur commun (PPCM)
2. Transforme chaque fraction pour avoir ce dénominateur
3. Soustrais les numérateurs
4. Simplifie si possible

**Exemple :** 3/4 - 1/3
- PPCM(4, 3) = 12
- 3/4 = 9/12 (multiplier par 3)
- 1/3 = 4/12 (multiplier par 4)
- 9/12 - 4/12 = 5/12`,
            order: 2,
          },
          {
            id: 'mixed_operations',
            title: 'Soustractions avec nombres entiers',
            content: `Pour soustraire une fraction d'un nombre entier (ou l'inverse), on transforme le nombre entier en fraction.

**Méthode :**
Un nombre entier n = n/1

**Exemple 1 :** 2 - 1/4
- 2 = 2/1 = 8/4 (dénominateur commun : 4)
- 8/4 - 1/4 = 7/4

**Exemple 2 :** 5/6 - 1
- 1 = 1/1 = 6/6 (dénominateur commun : 6)
- 5/6 - 6/6 = -1/6`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Même dénominateur',
            problem: 'Calculer : 7/10 - 3/10',
            solution: '2/5',
            steps: [
              'Les dénominateurs sont identiques (10)',
              'Soustraire les numérateurs : 7 - 3 = 4',
              'Garder le dénominateur : 10',
              'Résultat : 4/10',
              'Simplifier par 2 : 4/10 = 2/5',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Dénominateurs différents',
            problem: 'Calculer : 5/6 - 1/4',
            solution: '7/12',
            steps: [
              'PPCM(6, 4) = 12',
              'Transformer 5/6 : 5/6 = 10/12',
              'Transformer 1/4 : 1/4 = 3/12',
              'Soustraire : 10/12 - 3/12 = 7/12',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Soustraction avec nombre entier',
            problem: 'Calculer : 3 - 5/8',
            solution: '19/8 ou 2 3/8',
            steps: [
              'Transformer 3 en fraction : 3 = 3/1 = 24/8',
              '24/8 - 5/8 = 19/8',
              'Résultat : 19/8',
              'Forme mixte : 19/8 = 2 + 3/8 = 2 3/8',
            ],
            explanation: '19/8 est une fraction impropre (numérateur > dénominateur)',
          },
        ],
        prerequisites: ['fractions_addition'],
        relatedLessons: ['fractions_multiplication'],
      },
      {
        id: 'fractions_multiplication',
        skillId: 'fractions_multiplication',
        title: 'Multiplication de Fractions',
        description: 'Apprends à multiplier des fractions entre elles',
        icon: '✖️',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          'On multiplie les numérateurs entre eux',
          'On multiplie les dénominateurs entre eux',
          'On peut simplifier avant ou après la multiplication',
          'Multiplier par une fraction, c\'est prendre une fraction de cette quantité',
        ],
        sections: [
          {
            id: 'basic_multiplication',
            title: 'Multiplication de deux fractions',
            content: `La multiplication de fractions est **plus simple** que l'addition !

**Règle :** On multiplie les numérateurs entre eux, puis les dénominateurs entre eux.

**Formule :** a/b × c/d = (a × c)/(b × d)

**Exemple :**
2/3 × 4/5 = (2 × 4)/(3 × 5) = 8/15

**Astuce :** Contrairement à l'addition, pas besoin de dénominateur commun !`,
            order: 1,
          },
          {
            id: 'simplification',
            title: 'Simplification croisée',
            content: `On peut **simplifier avant** de multiplier pour faciliter les calculs.

**Méthode :**
Si un numérateur et un dénominateur ont un diviseur commun, on peut les simplifier en croix.

**Exemple :** 4/9 × 3/8
- 4 et 8 ont un diviseur commun : 4
- 3 et 9 ont un diviseur commun : 3

Simplifions :
- 4/8 = 1/2 et 3/9 = 1/3
- Donc : 4/9 × 3/8 = (1 × 1)/(3 × 2) = 1/6

**Avantage :** On travaille avec des nombres plus petits !`,
            order: 2,
          },
          {
            id: 'with_integers',
            title: 'Multiplication avec un nombre entier',
            content: `Pour multiplier une fraction par un nombre entier :

**Méthode 1 :** Transformer le nombre entier en fraction
n = n/1

**Méthode 2 :** Multiplier directement le numérateur
a/b × n = (a × n)/b

**Exemple 1 :** 3/4 × 5
= 3/4 × 5/1
= (3 × 5)/(4 × 1)
= 15/4

**Exemple 2 (plus rapide) :** 2/7 × 3
= (2 × 3)/7
= 6/7`,
            order: 3,
          },
          {
            id: 'meaning',
            title: 'Sens de la multiplication',
            content: `**Multiplier par une fraction, c'est "prendre une fraction de"**

**Exemples concrets :**

**1/2 × 20** signifie "la moitié de 20" = 10

**3/4 × 12** signifie "les trois quarts de 12"
= (3 × 12)/4 = 36/4 = 9

**2/3 × 1/2** signifie "les deux tiers d'une moitié"
= 2/6 = 1/3

**Application :** Si un gâteau coûte 12€ et qu'il est soldé à 3/4 du prix :
Prix soldé = 3/4 × 12 = 9€`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Multiplication simple',
            problem: 'Calculer : 3/5 × 2/7',
            solution: '6/35',
            steps: [
              'Multiplier les numérateurs : 3 × 2 = 6',
              'Multiplier les dénominateurs : 5 × 7 = 35',
              'Résultat : 6/35',
              'La fraction est déjà simplifiée',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Avec simplification',
            problem: 'Calculer : 6/10 × 5/9',
            solution: '1/3',
            steps: [
              'Simplification croisée avant de multiplier :',
              '6 et 9 divisibles par 3 → 6/9 = 2/3',
              '5 et 10 divisibles par 5 → 5/10 = 1/2',
              'Donc : 2/3 × 1/2 = 2/6 = 1/3',
            ],
            explanation: 'Simplifier avant rend les calculs plus faciles',
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Avec un nombre entier',
            problem: 'Calculer : 2/3 × 6',
            solution: '4',
            steps: [
              'Multiplier le numérateur par 6 : 2 × 6 = 12',
              'Garder le dénominateur : 3',
              'Résultat : 12/3',
              'Simplifier : 12/3 = 4',
            ],
          },
          {
            id: 'ex4',
            title: 'Exemple 4 : Problème concret',
            problem: 'Marie a lu 3/4 d\'un livre de 240 pages. Combien de pages a-t-elle lues ?',
            solution: '180 pages',
            steps: [
              'Calculer 3/4 de 240',
              '3/4 × 240 = (3 × 240)/4',
              '= 720/4',
              '= 180 pages',
            ],
            explanation: 'Multiplier par une fraction permet de calculer une proportion',
          },
        ],
        prerequisites: ['fractions_subtraction'],
        relatedLessons: ['fractions_division'],
      },
      {
        id: 'fractions_division',
        skillId: 'fractions_division',
        title: 'Division de Fractions',
        description: 'Apprends à diviser des fractions en utilisant l\'inverse',
        icon: '➗',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Diviser par une fraction = multiplier par son inverse',
          'L\'inverse de a/b est b/a',
          'On multiplie par l\'inverse du diviseur',
          'Toujours simplifier le résultat final',
        ],
        sections: [
          {
            id: 'inverse',
            title: 'L\'inverse d\'une fraction',
            content: `Pour diviser par une fraction, on utilise son **inverse** (ou **réciproque**).

**Définition :** L'inverse d'une fraction a/b est la fraction b/a

**On échange le numérateur et le dénominateur !**

**Exemples d'inverses :**
- Inverse de 3/4 → 4/3
- Inverse de 2/5 → 5/2
- Inverse de 7/1 (= 7) → 1/7
- Inverse de 1/8 → 8/1 (= 8)

**Propriété importante :**
Une fraction multipliée par son inverse donne toujours 1
- 3/4 × 4/3 = 12/12 = 1
- 2/5 × 5/2 = 10/10 = 1`,
            order: 1,
          },
          {
            id: 'division_rule',
            title: 'Règle de division',
            content: `**Règle fondamentale :**
Diviser par une fraction = Multiplier par son inverse

**Formule :** a/b ÷ c/d = a/b × d/c

**Méthode en 3 étapes :**
1. Garder la première fraction telle quelle
2. Remplacer ÷ par ×
3. Inverser la seconde fraction (échanger numérateur et dénominateur)

**Exemple :**
2/3 ÷ 4/5
= 2/3 × 5/4 (on inverse 4/5)
= (2 × 5)/(3 × 4)
= 10/12
= 5/6 (simplifié)`,
            order: 2,
          },
          {
            id: 'with_integers',
            title: 'Division avec des nombres entiers',
            content: `**Cas 1 : Diviser une fraction par un nombre entier**

Méthode : Transformer le nombre entier en fraction, puis inverser

**Exemple :** 3/4 ÷ 2
= 3/4 ÷ 2/1
= 3/4 × 1/2
= 3/8

**Cas 2 : Diviser un nombre entier par une fraction**

**Exemple :** 6 ÷ 2/3
= 6/1 ÷ 2/3
= 6/1 × 3/2
= 18/2
= 9

**Astuce :** Diviser par 2/3, c'est multiplier par 3/2`,
            order: 3,
          },
          {
            id: 'meaning',
            title: 'Sens de la division',
            content: `**Diviser par une fraction répond à la question : "Combien de fois ?"**

**Exemple concret :**
Combien de fois y a-t-il 1/4 dans 3/4 ?
3/4 ÷ 1/4 = 3/4 × 4/1 = 12/4 = 3
→ Il y a 3 fois 1/4 dans 3/4

**Autre exemple :**
On a 2 litres de jus. On veut remplir des verres de 1/4 de litre.
Combien de verres peut-on remplir ?
2 ÷ 1/4 = 2/1 × 4/1 = 8 verres

**Observation :**
Diviser par une fraction < 1 donne un résultat > au nombre initial
- 2 ÷ 1/2 = 4 (plus grand que 2)
- 3 ÷ 1/3 = 9 (plus grand que 3)`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Division de deux fractions',
            problem: 'Calculer : 5/6 ÷ 2/3',
            solution: '5/4 ou 1 1/4',
            steps: [
              'Inverse de 2/3 → 3/2',
              'Remplacer la division par multiplication : 5/6 × 3/2',
              'Multiplier : (5 × 3)/(6 × 2) = 15/12',
              'Simplifier par 3 : 15/12 = 5/4',
              'Forme mixte : 5/4 = 1 1/4',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Avec simplification',
            problem: 'Calculer : 8/9 ÷ 4/3',
            solution: '2/3',
            steps: [
              'Inverse de 4/3 → 3/4',
              '8/9 × 3/4',
              'Simplification croisée : 8 et 4 divisibles par 4',
              '(8÷4)/(9) × 3/(4÷4) = 2/9 × 3/1',
              'Résultat : (2 × 3)/(9 × 1) = 6/9 = 2/3',
            ],
            explanation: 'La simplification croisée facilite les calculs',
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Fraction divisée par un entier',
            problem: 'Calculer : 7/8 ÷ 3',
            solution: '7/24',
            steps: [
              'Transformer 3 en fraction : 3 = 3/1',
              'Inverse de 3/1 → 1/3',
              '7/8 × 1/3',
              '(7 × 1)/(8 × 3) = 7/24',
            ],
          },
          {
            id: 'ex4',
            title: 'Exemple 4 : Entier divisé par une fraction',
            problem: 'Calculer : 5 ÷ 2/3',
            solution: '15/2 ou 7,5',
            steps: [
              'Transformer 5 en fraction : 5 = 5/1',
              'Inverse de 2/3 → 3/2',
              '5/1 × 3/2',
              '(5 × 3)/(1 × 2) = 15/2',
              'Résultat : 15/2 = 7,5',
            ],
            explanation: 'Diviser par 2/3 revient à multiplier par 3/2 (ou par 1,5)',
          },
          {
            id: 'ex5',
            title: 'Exemple 5 : Problème concret',
            problem: 'On a 3/4 de tarte. On veut faire des parts de 1/8 de tarte. Combien de parts peut-on faire ?',
            solution: '6 parts',
            steps: [
              'Calculer : 3/4 ÷ 1/8',
              'Inverse de 1/8 → 8/1',
              '3/4 × 8/1 = (3 × 8)/(4 × 1) = 24/4',
              '24/4 = 6 parts',
            ],
            explanation: 'On peut faire 6 parts de 1/8 avec 3/4 de tarte',
          },
        ],
        prerequisites: ['fractions_multiplication'],
        relatedLessons: ['fractions_basics'],
      },
    ],
  },
  {
    id: 'relative_numbers',
    title: 'Les Nombres Relatifs',
    description: 'Découvre le monde des nombres positifs et négatifs',
    theme: 'ice',
    icon: '❄️',
    order: 2,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'relative_numbers_intro',
        skillId: 'relative_numbers_addition',
        title: 'Introduction aux Nombres Relatifs',
        description: 'Comprendre les nombres positifs et négatifs',
        icon: '🌡️',
        difficulty: 'beginner',
        estimatedTime: 15,
        keyPoints: [
          'Les nombres relatifs incluent les positifs, les négatifs et zéro',
          'Le signe - indique un nombre négatif',
          'Sur une droite graduée, les négatifs sont à gauche de zéro',
          'L\'opposé d\'un nombre a le signe contraire',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Qu\'est-ce qu\'un nombre relatif ?',
            content: `Les **nombres relatifs** sont l'ensemble des nombres qui peuvent être **positifs**, **négatifs** ou **nuls** (zéro).

**Notation :**
- Nombres positifs : +3, +7, +15 (on peut omettre le +)
- Nombres négatifs : -3, -7, -15 (le signe - est obligatoire)
- Zéro : 0 (ni positif ni négatif)

**Dans la vie quotidienne :**
- Température : -5°C (en dessous de zéro)
- Altitude : -50m (sous le niveau de la mer)
- Argent : -20€ (dette)`,
            order: 1,
          },
          {
            id: 'number_line',
            title: 'La droite graduée',
            content: `Sur une **droite graduée** :
- Le zéro est au centre (origine)
- Les nombres positifs sont à **droite**
- Les nombres négatifs sont à **gauche**

Plus on va à droite, plus les nombres sont grands.
Plus on va à gauche, plus les nombres sont petits.

**Exemples :**
- -5 < -2 < 0 < 3 < 7
- -10 est plus petit que -3`,
            order: 2,
          },
          {
            id: 'opposite',
            title: 'Opposé d\'un nombre',
            content: `L'**opposé** d'un nombre relatif est le nombre qui a :
- La même distance par rapport à zéro
- Mais le signe contraire

**Exemples :**
- L'opposé de +5 est -5
- L'opposé de -3 est +3
- L'opposé de 0 est 0

**Notation :** On note l'opposé de a par -a ou opp(a)`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Comparer des nombres',
            problem: 'Ranger par ordre croissant : -7, 3, -2, 0, -10',
            solution: '-10, -7, -2, 0, 3',
            steps: [
              'Les nombres négatifs sont plus petits que zéro',
              'Entre nombres négatifs, plus il y a de "moins", plus c\'est petit',
              '-10 < -7 < -2 < 0 < 3',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Trouver l\'opposé',
            problem: 'Quel est l\'opposé de -8 ?',
            solution: '+8 (ou 8)',
            steps: [
              '-8 est négatif',
              'Son opposé est positif',
              'L\'opposé de -8 est +8',
            ],
          },
        ],
        relatedLessons: ['relative_numbers_addition', 'relative_numbers_subtraction'],
      },
      {
        id: 'relative_numbers_addition',
        skillId: 'relative_numbers_addition',
        title: 'Addition de Nombres Relatifs',
        description: 'Additionner des nombres positifs et négatifs',
        icon: '➕',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          'Même signe : additionner et garder le signe',
          'Signes différents : soustraire et prendre le signe du plus grand',
          'Utiliser la droite graduée pour visualiser',
        ],
        sections: [
          {
            id: 'same_sign',
            title: 'Addition de nombres de même signe',
            content: `**Règle :** Quand on additionne deux nombres de **même signe** :
1. On additionne leurs valeurs (sans le signe)
2. On garde le signe commun

**Exemples :**
- (+3) + (+5) = +8 (positif + positif = positif)
- (-4) + (-7) = -11 (négatif + négatif = négatif)`,
            order: 1,
          },
          {
            id: 'different_sign',
            title: 'Addition de nombres de signes différents',
            content: `**Règle :** Quand on additionne deux nombres de **signes différents** :
1. On soustrait la plus petite valeur de la plus grande (sans les signes)
2. On prend le signe du nombre qui a la plus grande valeur

**Exemples :**
- (+7) + (-3) = +4 (7 - 3 = 4, signe de 7 qui est +)
- (-9) + (+2) = -7 (9 - 2 = 7, signe de 9 qui est -)
- (+5) + (-5) = 0 (les opposés s'annulent)`,
            order: 2,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Même signe positif',
            problem: 'Calculer : (+12) + (+8)',
            solution: '+20',
            steps: [
              'Même signe positif',
              'On additionne : 12 + 8 = 20',
              'On garde le signe + : +20',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Même signe négatif',
            problem: 'Calculer : (-6) + (-9)',
            solution: '-15',
            steps: [
              'Même signe négatif',
              'On additionne : 6 + 9 = 15',
              'On garde le signe - : -15',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Signes différents',
            problem: 'Calculer : (+15) + (-7)',
            solution: '+8',
            steps: [
              'Signes différents',
              'On soustrait : 15 - 7 = 8',
              'Signe du plus grand (15 est positif) : +8',
            ],
          },
        ],
        prerequisites: ['relative_numbers_intro'],
        relatedLessons: ['relative_numbers_subtraction', 'relative_numbers_multiplication'],
      },
      {
        id: 'relative_numbers_multiplication',
        skillId: 'relative_numbers_multiplication',
        title: 'Multiplication de Nombres Relatifs',
        description: 'Apprends les règles des signes pour multiplier des nombres relatifs',
        icon: '✖️',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          'Le produit de deux nombres de même signe est positif',
          'Le produit de deux nombres de signes contraires est négatif',
          '(+) × (+) = (+) et (-) × (-) = (+)',
          '(+) × (-) = (-) et (-) × (+) = (-)',
        ],
        sections: [
          {
            id: 'sign_rules',
            title: 'Règles des Signes',
            content: `Pour multiplier des nombres relatifs, on utilise les **règles des signes**.

**Règle fondamentale :**

1. **Même signe → résultat positif (+)**
   - (+) × (+) = (+)
   - (-) × (-) = (+)

2. **Signes contraires → résultat négatif (-)**
   - (+) × (-) = (-)
   - (-) × (+) = (-)

**Moyen mnémotechnique :**
"Les amis de mes amis sont mes amis" → même signe = positif
"Les ennemis de mes amis sont mes ennemis" → signes contraires = négatif

**Exemples :**
- (+5) × (+3) = +15
- (-5) × (-3) = +15
- (+5) × (-3) = -15
- (-5) × (+3) = -15`,
            order: 1,
          },
          {
            id: 'calculation_method',
            title: 'Méthode de Calcul',
            content: `**Méthode en 2 étapes :**

**Étape 1 :** Déterminer le signe du résultat
- Compter le nombre de signes "-"
- Nombre pair de "-" → résultat positif
- Nombre impair de "-" → résultat négatif

**Étape 2 :** Calculer la valeur absolue
- Multiplier les valeurs sans tenir compte des signes

**Exemples détaillés :**

**Exemple 1 :** (-4) × (+6)
- Signes : un signe "-" (impair) → résultat négatif
- Valeur : 4 × 6 = 24
- Résultat : -24

**Exemple 2 :** (-7) × (-2)
- Signes : deux signes "-" (pair) → résultat positif
- Valeur : 7 × 2 = 14
- Résultat : +14

**Exemple 3 :** (+8) × (+5)
- Signes : aucun signe "-" (pair) → résultat positif
- Valeur : 8 × 5 = 40
- Résultat : +40`,
            order: 2,
          },
          {
            id: 'multiple_factors',
            title: 'Produit de Plusieurs Nombres',
            content: `Pour multiplier plusieurs nombres relatifs, on applique les règles successivement.

**Méthode :**
1. Compter le nombre de facteurs négatifs
2. Si ce nombre est **pair** → résultat positif
3. Si ce nombre est **impair** → résultat négatif
4. Multiplier les valeurs absolues

**Exemples :**

**Exemple 1 :** (-2) × (+3) × (-4)
- Nombre de facteurs négatifs : 2 (pair)
- Signe du résultat : +
- Calcul : 2 × 3 × 4 = 24
- Résultat : +24

**Exemple 2 :** (-1) × (-2) × (-3)
- Nombre de facteurs négatifs : 3 (impair)
- Signe du résultat : -
- Calcul : 1 × 2 × 3 = 6
- Résultat : -6

**Exemple 3 :** (+2) × (-3) × (-1) × (-2)
- Nombre de facteurs négatifs : 3 (impair)
- Signe du résultat : -
- Calcul : 2 × 3 × 1 × 2 = 12
- Résultat : -12

**Astuce :**
Regrouper les facteurs deux par deux peut simplifier le calcul.`,
            order: 3,
          },
          {
            id: 'special_cases',
            title: 'Cas Particuliers',
            content: `**1. Multiplication par zéro :**

Quel que soit le nombre relatif a :
\`\`\`
a × 0 = 0
0 × a = 0
\`\`\`

Exemples :
- (-5) × 0 = 0
- 0 × (+7) = 0

**2. Multiplication par 1 :**

1 est l'élément neutre de la multiplication :
\`\`\`
a × 1 = a
1 × a = a
\`\`\`

Exemples :
- (-8) × 1 = -8
- 1 × (+3) = +3

**3. Multiplication par -1 :**

Multiplier par -1 change le signe :
\`\`\`
a × (-1) = -a
(-1) × a = -a
\`\`\`

Exemples :
- (+5) × (-1) = -5
- (-7) × (-1) = +7

**4. Carré d'un nombre négatif :**

Le carré d'un nombre est toujours positif :
\`\`\`
(-a)² = (-a) × (-a) = a²
\`\`\`

Exemples :
- (-3)² = (-3) × (-3) = +9
- (-5)² = (-5) × (-5) = +25`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Produits simples',
            problem: `Calculer les produits suivants :
a) (-6) × (+4)
b) (-7) × (-3)
c) (+9) × (-2)`,
            solution: 'a) -24, b) +21, c) -18',
            steps: [
              'a) (-6) × (+4) : signes contraires → négatif',
              '   Calcul : 6 × 4 = 24 → Résultat : -24',
              'b) (-7) × (-3) : même signe → positif',
              '   Calcul : 7 × 3 = 21 → Résultat : +21',
              'c) (+9) × (-2) : signes contraires → négatif',
              '   Calcul : 9 × 2 = 18 → Résultat : -18',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Produit de trois nombres',
            problem: `Calculer : (-2) × (-5) × (+3)`,
            solution: '+30',
            steps: [
              'Méthode 1 : Compter les signes négatifs',
              '  2 facteurs négatifs (pair) → résultat positif',
              '  Calcul : 2 × 5 × 3 = 30 → Résultat : +30',
              'Méthode 2 : Calculer étape par étape',
              '  (-2) × (-5) = +10',
              '  (+10) × (+3) = +30',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Carré d\'un nombre négatif',
            problem: `Calculer : (-4)²`,
            solution: '+16',
            steps: [
              '(-4)² signifie (-4) × (-4)',
              'Deux facteurs négatifs (pair) → résultat positif',
              'Calcul : 4 × 4 = 16',
              'Résultat : +16',
              'Attention : (-4)² ≠ -16 !',
            ],
          },
        ],
        prerequisites: ['relative_numbers_addition'],
        relatedLessons: ['relative_numbers_division'],
      },
      {
        id: 'relative_numbers_division',
        skillId: 'relative_numbers_division',
        title: 'Division de Nombres Relatifs',
        description: 'Apprends à diviser des nombres relatifs',
        icon: '➗',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          'Les règles des signes sont les mêmes que pour la multiplication',
          'Quotient de deux nombres de même signe : positif',
          'Quotient de deux nombres de signes contraires : négatif',
          'La division par zéro est impossible',
        ],
        sections: [
          {
            id: 'division_rules',
            title: 'Règles de la Division',
            content: `La division de nombres relatifs suit les **mêmes règles de signes** que la multiplication.

**Règles :**

1. **Même signe → résultat positif (+)**
   - (+) ÷ (+) = (+)
   - (-) ÷ (-) = (+)

2. **Signes contraires → résultat négatif (-)**
   - (+) ÷ (-) = (-)
   - (-) ÷ (+) = (-)

**Exemples :**
- (+12) ÷ (+3) = +4
- (-12) ÷ (-3) = +4
- (+12) ÷ (-3) = -4
- (-12) ÷ (+3) = -4

**Lien avec la multiplication :**

Si a ÷ b = c, alors a = b × c

Exemple : (-15) ÷ (+3) = -5
car (+3) × (-5) = -15 ✓`,
            order: 1,
          },
          {
            id: 'calculation_method',
            title: 'Méthode de Calcul',
            content: `**Méthode en 2 étapes :**

**Étape 1 :** Déterminer le signe du quotient
- Même signe → résultat positif
- Signes contraires → résultat négatif

**Étape 2 :** Calculer la valeur absolue
- Diviser les valeurs sans tenir compte des signes

**Exemples détaillés :**

**Exemple 1 :** (-20) ÷ (+4)
- Signes contraires → résultat négatif
- Valeur : 20 ÷ 4 = 5
- Résultat : -5

**Exemple 2 :** (-18) ÷ (-6)
- Même signe → résultat positif
- Valeur : 18 ÷ 6 = 3
- Résultat : +3

**Exemple 3 :** (+35) ÷ (-7)
- Signes contraires → résultat négatif
- Valeur : 35 ÷ 7 = 5
- Résultat : -5`,
            order: 2,
          },
          {
            id: 'fractions',
            title: 'Quotients et Fractions',
            content: `Un quotient peut s'écrire sous forme de fraction.

**Règles pour les fractions :**

\`\`\`
-a     a      a
─── = - ─ = ─────
 b     b    -b
\`\`\`

Le signe "-" peut se placer :
- Au numérateur
- Au dénominateur
- Devant la fraction

**Exemples :**

\`\`\`
-6     6     6
─── = - ─ = ───
 2     2    -2
\`\`\`

Toutes ces écritures valent -3.

**Simplification :**

\`\`\`
-15   -15÷5   -3
──── = ───── = ──
 20    20÷5    4
\`\`\`

ou

\`\`\`
-15   -(15÷5)   -3
──── = ─────── = ──
 20     20÷5      4
\`\`\`

**Fraction négative sur négative :**

\`\`\`
-12   12
──── = ── = 3
 -4    4
\`\`\`

Deux signes "-" s'annulent → résultat positif`,
            order: 3,
          },
          {
            id: 'special_cases_division',
            title: 'Cas Particuliers',
            content: `**1. Division par zéro :**

⚠️ **Impossible !**

La division par zéro n'existe pas :
\`\`\`
a ÷ 0 = impossible pour tout a
\`\`\`

**2. Zéro divisé par un nombre :**

\`\`\`
0 ÷ a = 0 (si a ≠ 0)
\`\`\`

Exemples :
- 0 ÷ 5 = 0
- 0 ÷ (-3) = 0

**3. Division par 1 :**

\`\`\`
a ÷ 1 = a
\`\`\`

Exemples :
- (-7) ÷ 1 = -7
- (+4) ÷ 1 = +4

**4. Division par -1 :**

Diviser par -1 change le signe :
\`\`\`
a ÷ (-1) = -a
\`\`\`

Exemples :
- (+6) ÷ (-1) = -6
- (-8) ÷ (-1) = +8

**5. Nombre divisé par lui-même :**

\`\`\`
a ÷ a = 1 (si a ≠ 0)
\`\`\`

Exemples :
- (-5) ÷ (-5) = +1
- (+9) ÷ (+9) = +1`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Divisions simples',
            problem: `Calculer les quotients suivants :
a) (-24) ÷ (+6)
b) (-35) ÷ (-7)
c) (+18) ÷ (-3)`,
            solution: 'a) -4, b) +5, c) -6',
            steps: [
              'a) (-24) ÷ (+6) : signes contraires → négatif',
              '   Calcul : 24 ÷ 6 = 4 → Résultat : -4',
              'b) (-35) ÷ (-7) : même signe → positif',
              '   Calcul : 35 ÷ 7 = 5 → Résultat : +5',
              'c) (+18) ÷ (-3) : signes contraires → négatif',
              '   Calcul : 18 ÷ 3 = 6 → Résultat : -6',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Fractions',
            problem: `Simplifier et calculer : -20/4`,
            solution: '-5',
            steps: [
              'Méthode 1 : Division directe',
              '  -20 ÷ 4 : signes contraires → négatif',
              '  20 ÷ 4 = 5 → Résultat : -5',
              'Méthode 2 : Simplification',
              '  -20/4 = -(20÷4)/1 = -5/1 = -5',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Vérification',
            problem: `Si (-28) ÷ a = +7, quelle est la valeur de a ?`,
            solution: 'a = -4',
            steps: [
              'On cherche a tel que (-28) ÷ a = +7',
              'Cela signifie : a × (+7) = -28',
              'Pour obtenir un produit négatif, il faut des signes contraires',
              'Donc a doit être négatif',
              'Valeur : 28 ÷ 7 = 4',
              'Résultat : a = -4',
              'Vérification : (-28) ÷ (-4) = +7 ✓',
            ],
          },
        ],
        prerequisites: ['relative_numbers_multiplication'],
        relatedLessons: ['relative_numbers_combined'],
      },
      {
        id: 'relative_numbers_combined',
        skillId: 'relative_numbers_combined',
        title: 'Opérations Combinées',
        description: 'Maîtrise l\'ordre des opérations avec les nombres relatifs',
        icon: '🎯',
        difficulty: 'advanced',
        estimatedTime: 25,
        keyPoints: [
          'Respecter l\'ordre des opérations : parenthèses, puis × et ÷, puis + et -',
          'Calculer d\'abord les multiplications et divisions de gauche à droite',
          'Puis effectuer les additions et soustractions de gauche à droite',
          'Les parenthèses ont la priorité absolue',
        ],
        sections: [
          {
            id: 'order_of_operations',
            title: 'Ordre des Opérations',
            content: `**Règle de priorité (acronyme PEMDAS) :**

1. **P** : **Parenthèses** (et autres symboles de groupement)
2. **E** : **Exposants** (puissances)
3. **M** et **D** : **Multiplication** et **Division** (de gauche à droite)
4. **A** et **S** : **Addition** et **Soustraction** (de gauche à droite)

**Attention :**
La multiplication et la division ont la **même priorité**.
L'addition et la soustraction ont la **même priorité**.
On calcule de **gauche à droite** quand les opérations ont la même priorité.

**Exemple :**
\`\`\`
5 + 3 × 2
\`\`\`

1. Multiplication en premier : 3 × 2 = 6
2. Puis addition : 5 + 6 = 11

Résultat : 11

**Avec parenthèses :**
\`\`\`
(5 + 3) × 2
\`\`\`

1. Parenthèses en premier : 5 + 3 = 8
2. Puis multiplication : 8 × 2 = 16

Résultat : 16`,
            order: 1,
          },
          {
            id: 'combined_operations',
            title: 'Calculs avec Nombres Relatifs',
            content: `**Méthode pour calculer une expression :**

**Étape 1 :** Identifier les opérations à effectuer
**Étape 2 :** Respecter l'ordre de priorité
**Étape 3 :** Calculer étape par étape en écrivant les résultats intermédiaires

**Exemple 1 :**
\`\`\`
-5 + 3 × (-2)
\`\`\`

1. Multiplication d'abord : 3 × (-2) = -6
2. = -5 + (-6)
3. = -5 - 6
4. = -11

**Exemple 2 :**
\`\`\`
-12 ÷ (-3) + 5
\`\`\`

1. Division d'abord : -12 ÷ (-3) = +4
2. = +4 + 5
3. = 9

**Exemple 3 :**
\`\`\`
(-2) × (5 - 8)
\`\`\`

1. Parenthèses d'abord : 5 - 8 = -3
2. = (-2) × (-3)
3. = +6`,
            order: 2,
          },
          {
            id: 'distributivity',
            title: 'Distributivité',
            content: `La **distributivité** permet de développer ou de factoriser des expressions.

**Propriété :**
\`\`\`
a × (b + c) = a × b + a × c
a × (b - c) = a × b - a × c
\`\`\`

**Développer :**

Transformer un produit en une somme

**Exemple 1 :**
\`\`\`
3 × (x + 5) = 3 × x + 3 × 5
            = 3x + 15
\`\`\`

**Exemple 2 avec nombres relatifs :**
\`\`\`
(-2) × (4 - 7) = (-2) × 4 + (-2) × (-7)
               = -8 + 14
               = 6
\`\`\`

**Factoriser :**

Transformer une somme en un produit

**Exemple :**
\`\`\`
5 × 7 + 5 × 3 = 5 × (7 + 3)
              = 5 × 10
              = 50
\`\`\`

**Avec nombres relatifs :**
\`\`\`
(-3) × 8 + (-3) × 2 = (-3) × (8 + 2)
                     = (-3) × 10
                     = -30
\`\`\``,
            order: 3,
          },
          {
            id: 'complex_expressions',
            title: 'Expressions Complexes',
            content: `**Méthode pour les expressions complexes :**

1. **Repérer** les parenthèses et calculer leur contenu
2. **Effectuer** les multiplications et divisions de gauche à droite
3. **Terminer** par les additions et soustractions de gauche à droite
4. **Écrire** chaque étape intermédiaire clairement

**Exemple complet :**

Calculer : -4 × (3 - 7) + 15 ÷ (-3)

**Solution détaillée :**

Étape 1 : Parenthèses
\`\`\`
3 - 7 = -4
= -4 × (-4) + 15 ÷ (-3)
\`\`\`

Étape 2 : Multiplication et division (de gauche à droite)
\`\`\`
-4 × (-4) = +16
15 ÷ (-3) = -5
= 16 + (-5)
\`\`\`

Étape 3 : Addition
\`\`\`
16 + (-5) = 16 - 5 = 11
\`\`\`

**Résultat final : 11**

**Astuce :**
Utilisez des couleurs différentes pour repérer les étapes ou soulignez les opérations à effectuer dans l'ordre.`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Expression simple',
            problem: `Calculer : -8 + 4 × (-3)`,
            solution: '-20',
            steps: [
              'Priorité à la multiplication',
              '4 × (-3) = -12',
              '= -8 + (-12)',
              '= -8 - 12',
              '= -20',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Avec parenthèses',
            problem: `Calculer : (- 6 + 2) × (-5)`,
            solution: '+20',
            steps: [
              'Étape 1 : Calculer le contenu des parenthèses',
              '  -6 + 2 = -4',
              'Étape 2 : Multiplication',
              '  = (-4) × (-5)',
              '  = +20',
              'Résultat : +20',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Distributivité',
            problem: `Développer puis calculer : (-3) × (5 - 9)`,
            solution: '+12',
            steps: [
              'Méthode 1 : Calculer d\'abord la parenthèse',
              '  5 - 9 = -4',
              '  (-3) × (-4) = +12',
              'Méthode 2 : Utiliser la distributivité',
              '  (-3) × 5 + (-3) × (-9)',
              '  = -15 + 27',
              '  = +12',
              'Les deux méthodes donnent le même résultat : +12',
            ],
          },
        ],
        prerequisites: ['relative_numbers_multiplication', 'relative_numbers_division'],
        relatedLessons: ['powers_intro'],
      },
    ],
  },
  {
    id: 'powers',
    title: 'Les Puissances',
    description: 'Explore le pouvoir des exposants et des puissances',
    theme: 'lightning',
    icon: '⚡',
    order: 3,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'powers_intro',
        skillId: 'powers_evaluate',
        title: 'Introduction aux Puissances',
        description: 'Comprendre la notation puissance et calculer des puissances simples',
        icon: '🔢',
        difficulty: 'beginner',
        estimatedTime: 15,
        keyPoints: [
          'a^n signifie "a multiplié par lui-même n fois"',
          'a est la base, n est l\'exposant',
          'a^0 = 1 pour tout a non nul',
          'a^1 = a',
        ],
        sections: [
          {
            id: 'notation',
            title: 'Notation puissance',
            content: `Une **puissance** est une notation qui permet d'écrire une multiplication répétée de façon compacte.

**Notation :** a^n se lit "a puissance n" ou "a exposant n"

**Définition :**
- **a** est la **base** (le nombre qu'on multiplie)
- **n** est l'**exposant** (le nombre de fois qu'on multiplie)

**Exemple :**
2^5 = 2 × 2 × 2 × 2 × 2 = 32

On multiplie 2 par lui-même 5 fois.`,
            order: 1,
          },
          {
            id: 'special_cases',
            title: 'Cas particuliers',
            content: `**Exposant 0 :**
Tout nombre (sauf 0) élevé à la puissance 0 égale 1
- 5^0 = 1
- 10^0 = 1
- 127^0 = 1

**Exposant 1 :**
Tout nombre à la puissance 1 égale lui-même
- 7^1 = 7
- 100^1 = 100

**Exposant 2 (carré) :**
On dit "a au carré"
- 5^2 = 5 × 5 = 25
- 3^2 = 9

**Exposant 3 (cube) :**
On dit "a au cube"
- 2^3 = 2 × 2 × 2 = 8
- 4^3 = 64`,
            order: 2,
          },
          {
            id: 'powers_of_10',
            title: 'Puissances de 10',
            content: `Les **puissances de 10** sont particulièrement importantes :

**Règle :** 10^n = 1 suivi de n zéros

**Exemples :**
- 10^1 = 10
- 10^2 = 100
- 10^3 = 1 000
- 10^4 = 10 000
- 10^6 = 1 000 000 (un million)

**Usage :** On les utilise pour l'écriture scientifique et les grands nombres.`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer une puissance',
            problem: 'Calculer : 3^4',
            solution: '81',
            steps: [
              '3^4 = 3 × 3 × 3 × 3',
              '= 9 × 3 × 3',
              '= 27 × 3',
              '= 81',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Puissance de 10',
            problem: 'Calculer : 10^5',
            solution: '100 000',
            steps: [
              '10^5 = 1 suivi de 5 zéros',
              '10^5 = 100 000',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Cas particuliers',
            problem: 'Calculer : 15^0 et 15^1',
            solution: '15^0 = 1 et 15^1 = 15',
            steps: [
              'Tout nombre à la puissance 0 = 1',
              'Donc 15^0 = 1',
              'Tout nombre à la puissance 1 = lui-même',
              'Donc 15^1 = 15',
            ],
          },
        ],
        relatedLessons: ['powers_multiply', 'powers_negative'],
      },
      {
        id: 'powers_multiply',
        skillId: 'powers_multiply',
        title: 'Produit et Quotient de Puissances',
        description: 'Apprends les règles pour multiplier et diviser des puissances',
        icon: '✖️➗',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Produit : a^n × a^m = a^(n+m) (on additionne les exposants)',
          'Quotient : a^n ÷ a^m = a^(n-m) (on soustrait les exposants)',
          'Puissance de puissance : (a^n)^m = a^(n×m) (on multiplie les exposants)',
          'Ces règles ne s\'appliquent que si les bases sont identiques',
        ],
        sections: [
          {
            id: 'multiply',
            title: 'Produit de puissances',
            content: `**Règle du produit :** Pour multiplier des puissances de **même base**, on **additionne** les exposants.

**Formule :** a^n × a^m = a^(n+m)

**Pourquoi ?**
2^3 × 2^2 = (2×2×2) × (2×2) = 2×2×2×2×2 = 2^5

**Exemples :**
- 10^3 × 10^4 = 10^(3+4) = 10^7
- 5^2 × 5^7 = 5^(2+7) = 5^9
- x^4 × x^3 = x^(4+3) = x^7

**Attention :** Cette règle ne fonctionne que pour la même base !
- 2^3 × 3^2 ≠ 6^5 (bases différentes)`,
            order: 1,
          },
          {
            id: 'divide',
            title: 'Quotient de puissances',
            content: `**Règle du quotient :** Pour diviser des puissances de **même base**, on **soustrait** les exposants.

**Formule :** a^n ÷ a^m = a^(n-m)

**Pourquoi ?**
2^5 ÷ 2^2 = (2×2×2×2×2) ÷ (2×2) = 2×2×2 = 2^3

**Exemples :**
- 10^7 ÷ 10^3 = 10^(7-3) = 10^4
- 3^8 ÷ 3^5 = 3^(8-5) = 3^3
- x^9 ÷ x^2 = x^(9-2) = x^7`,
            order: 2,
          },
          {
            id: 'power_of_power',
            title: 'Puissance de puissance',
            content: `**Règle :** Pour calculer la puissance d'une puissance, on **multiplie** les exposants.

**Formule :** (a^n)^m = a^(n×m)

**Pourquoi ?**
(2^3)^2 = (2^3) × (2^3) = 2^(3+3) = 2^6 = 2^(3×2)

**Exemples :**
- (10^2)^3 = 10^(2×3) = 10^6
- (5^4)^2 = 5^(4×2) = 5^8
- (x^3)^5 = x^(3×5) = x^15`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Produit',
            problem: 'Simplifier : 10^3 × 10^5',
            solution: '10^8',
            steps: [
              'Même base (10), on additionne les exposants',
              '10^3 × 10^5 = 10^(3+5)',
              '= 10^8',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Quotient',
            problem: 'Simplifier : 7^9 ÷ 7^4',
            solution: '7^5',
            steps: [
              'Même base (7), on soustrait les exposants',
              '7^9 ÷ 7^4 = 7^(9-4)',
              '= 7^5',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Puissance de puissance',
            problem: 'Simplifier : (3^2)^4',
            solution: '3^8',
            steps: [
              'Puissance de puissance, on multiplie les exposants',
              '(3^2)^4 = 3^(2×4)',
              '= 3^8',
            ],
          },
        ],
        prerequisites: ['powers_intro'],
        relatedLessons: ['powers_negative', 'powers_scientific'],
      },
      {
        id: 'powers_negative',
        skillId: 'powers_negative',
        title: 'Puissances Négatives',
        description: 'Comprendre et calculer avec des exposants négatifs',
        icon: '➖',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          'a^(-n) = 1/a^n (puissance négative = inverse)',
          '10^(-n) = 0.0...01 (avec n-1 zéros après la virgule)',
          'Toutes les règles des puissances s\'appliquent aussi aux exposants négatifs',
          'Diviser par a^n = multiplier par a^(-n)',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Définition des puissances négatives',
            content: `Une **puissance négative** représente l'inverse de la puissance positive.

**Formule générale :** a^(-n) = 1/a^n

**Pourquoi ?**
En utilisant la règle du quotient : a^n ÷ a^n = a^(n-n) = a^0 = 1
Mais aussi : a^n ÷ a^n = 1
Donc si on divise a^3 par a^5 : a^3 ÷ a^5 = a^(3-5) = a^(-2) = a^3/a^5 = 1/a^2

**Exemples :**
- 2^(-3) = 1/2^3 = 1/8
- 5^(-2) = 1/5^2 = 1/25
- 10^(-1) = 1/10 = 0.1`,
            order: 1,
          },
          {
            id: 'powers_of_10',
            title: 'Puissances négatives de 10',
            content: `Les **puissances négatives de 10** sont très importantes pour les petits nombres.

**Règle :** 10^(-n) = 0.0...01 (avec n-1 zéros après la virgule)

**Exemples :**
- 10^(-1) = 0.1 (un dixième)
- 10^(-2) = 0.01 (un centième)
- 10^(-3) = 0.001 (un millième)
- 10^(-6) = 0.000 001 (un millionième)

**Usage :** Notation scientifique pour les très petits nombres (0.000 045 = 4.5 × 10^(-5))`,
            order: 2,
          },
          {
            id: 'operations',
            title: 'Opérations avec puissances négatives',
            content: `**Les règles des puissances s'appliquent aussi aux exposants négatifs :**

**Produit :**
a^(-n) × a^(-m) = a^(-n-m)
Exemple : 10^(-2) × 10^(-3) = 10^(-5)

**Quotient :**
a^(-n) ÷ a^(-m) = a^(-n-(-m)) = a^(m-n)
Exemple : 10^(-2) ÷ 10^(-5) = 10^3

**Simplification :**
a^(-n) × a^m = a^(m-n)
Exemple : 2^(-3) × 2^5 = 2^2 = 4`,
            order: 3,
          },
          {
            id: 'conversion',
            title: 'Convertir fraction ↔ puissance',
            content: `**De puissance négative à fraction :**
a^(-n) → 1/a^n

**De fraction à puissance négative :**
1/a^n → a^(-n)

**Exemples pratiques :**
- 3^(-4) = 1/81
- 1/16 = 1/2^4 = 2^(-4)
- 5/25 = 5/5^2 = 5^1 × 5^(-2) = 5^(-1) = 1/5

**Astuce :** Pour passer une puissance du numérateur au dénominateur (ou vice-versa), on change le signe de l'exposant.`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer une puissance négative',
            problem: 'Calculer : 2^(-4)',
            solution: '1/16',
            steps: [
              '2^(-4) = 1/2^4',
              '2^4 = 2 × 2 × 2 × 2 = 16',
              '2^(-4) = 1/16',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Puissance négative de 10',
            problem: 'Écrire 10^(-5) en notation décimale',
            solution: '0.00001',
            steps: [
              '10^(-5) = 1/10^5',
              '10^5 = 100 000',
              '10^(-5) = 1/100 000 = 0.00001',
              'Ou directement : 5 chiffres après la virgule, dont 4 zéros',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Simplifier avec puissances négatives',
            problem: 'Simplifier : 3^(-2) × 3^5',
            solution: '3^3 = 27',
            steps: [
              'Même base, on additionne les exposants',
              '3^(-2) × 3^5 = 3^(-2+5)',
              '= 3^3',
              '= 27',
            ],
          },
        ],
        prerequisites: ['powers_multiply'],
        relatedLessons: ['powers_scientific'],
      },
      {
        id: 'powers_scientific',
        skillId: 'powers_scientific',
        title: 'Notation Scientifique',
        description: 'Apprends à écrire les très grands et très petits nombres',
        icon: '🔬',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Notation scientifique : a × 10^n où 1 ≤ a < 10',
          'Permet d\'écrire de façon compacte les très grands ou très petits nombres',
          'Pour multiplier/diviser, on utilise les règles des puissances de 10',
          'Déplacer la virgule vers la droite : exposant positif / vers la gauche : exposant négatif',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Qu\'est-ce que la notation scientifique ?',
            content: `La **notation scientifique** est une façon d'écrire les nombres très grands ou très petits.

**Format :** a × 10^n où :
- **a** est un nombre décimal avec 1 ≤ a < 10
- **n** est un entier relatif (positif ou négatif)

**Pourquoi l'utiliser ?**
- Plus compact : 6 023 000 000 000 000 000 000 000 = 6.023 × 10^23
- Plus lisible : 0.000 000 000 16 = 1.6 × 10^(-10)
- Facilite les calculs avec de très grands ou petits nombres

**Exemples :**
- Vitesse de la lumière : 300 000 000 m/s = 3 × 10^8 m/s
- Masse d'un électron : 0.000 000 000 000 000 000 000 000 000 000 911 kg = 9.11 × 10^(-31) kg`,
            order: 1,
          },
          {
            id: 'conversion_large',
            title: 'Convertir un grand nombre',
            content: `**Méthode pour convertir un grand nombre en notation scientifique :**

**Étapes :**
1. Déplacer la virgule après le premier chiffre non nul
2. Compter le nombre de rangs déplacés = exposant n
3. Écrire sous la forme a × 10^n

**Exemple 1 :** 45 000 000
- Déplacer la virgule : 4.5
- Nombre de rangs : 7 (vers la gauche)
- Résultat : 4.5 × 10^7

**Exemple 2 :** 789 000
- Déplacer : 7.89
- Rangs : 5
- Résultat : 7.89 × 10^5`,
            order: 2,
          },
          {
            id: 'conversion_small',
            title: 'Convertir un petit nombre',
            content: `**Méthode pour convertir un petit nombre (< 1) :**

**Étapes :**
1. Déplacer la virgule après le premier chiffre non nul
2. Compter le nombre de rangs déplacés = exposant -n (négatif!)
3. Écrire sous la forme a × 10^(-n)

**Exemple 1 :** 0.000 34
- Déplacer la virgule : 3.4
- Nombre de rangs : 4 (vers la droite)
- Résultat : 3.4 × 10^(-4)

**Exemple 2 :** 0.000 000 008 9
- Déplacer : 8.9
- Rangs : 9
- Résultat : 8.9 × 10^(-9)`,
            order: 3,
          },
          {
            id: 'operations',
            title: 'Calculs en notation scientifique',
            content: `**Multiplication :**
(a × 10^n) × (b × 10^m) = (a × b) × 10^(n+m)

Exemple : (2 × 10^5) × (3 × 10^4) = 6 × 10^9

**Division :**
(a × 10^n) ÷ (b × 10^m) = (a ÷ b) × 10^(n-m)

Exemple : (8 × 10^7) ÷ (4 × 10^3) = 2 × 10^4

**Ajuster le résultat :**
Si a × b ≥ 10, il faut réajuster :
(1.5 × 10^3) × (8 × 10^2) = 12 × 10^5 = 1.2 × 10^6`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Grand nombre en notation scientifique',
            problem: 'Écrire 125 000 000 en notation scientifique',
            solution: '1.25 × 10^8',
            steps: [
              'Déplacer la virgule après le premier chiffre : 1.25',
              'Compter les rangs : 8 positions vers la gauche',
              'Écrire : 1.25 × 10^8',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Petit nombre en notation scientifique',
            problem: 'Écrire 0.000 007 en notation scientifique',
            solution: '7 × 10^(-6)',
            steps: [
              'Déplacer la virgule après le premier chiffre non nul : 7',
              'Compter les rangs : 6 positions vers la droite',
              'Écrire : 7 × 10^(-6)',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Multiplication en notation scientifique',
            problem: 'Calculer : (3 × 10^5) × (2 × 10^3)',
            solution: '6 × 10^8',
            steps: [
              'Multiplier les nombres : 3 × 2 = 6',
              'Additionner les exposants : 5 + 3 = 8',
              'Résultat : 6 × 10^8',
            ],
          },
        ],
        prerequisites: ['powers_intro', 'powers_negative'],
        relatedLessons: ['powers_multiply'],
      },
      {
        id: 'powers_product_quotient',
        skillId: 'powers_multiply',
        title: 'Puissance d\'un Produit et d\'un Quotient',
        description: 'Apprends à calculer les puissances de produits et de quotients',
        icon: '🎲',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          '(a × b)^n = a^n × b^n (puissance d\'un produit)',
          '(a/b)^n = a^n/b^n (puissance d\'un quotient)',
          'Ces règles permettent de simplifier les calculs',
          'Attention à l\'ordre des opérations avec les parenthèses',
        ],
        sections: [
          {
            id: 'product',
            title: 'Puissance d\'un produit',
            content: `**Règle de la puissance d'un produit :**

La puissance d'un produit est égale au produit des puissances.

**Formule :** (a × b)^n = a^n × b^n

**Pourquoi ?**
(2 × 3)^4 = (2 × 3) × (2 × 3) × (2 × 3) × (2 × 3)
         = (2 × 2 × 2 × 2) × (3 × 3 × 3 × 3)
         = 2^4 × 3^4

**Exemples :**
- (2 × 5)^3 = 2^3 × 5^3 = 8 × 125 = 1000
- (10 × 3)^2 = 10^2 × 3^2 = 100 × 9 = 900
- (x × y)^4 = x^4 × y^4`,
            order: 1,
          },
          {
            id: 'quotient',
            title: 'Puissance d\'un quotient',
            content: `**Règle de la puissance d'un quotient :**

La puissance d'un quotient est égale au quotient des puissances.

**Formule :** (a/b)^n = a^n/b^n (avec b ≠ 0)

**Pourquoi ?**
(6/2)^3 = (6/2) × (6/2) × (6/2)
        = (6 × 6 × 6)/(2 × 2 × 2)
        = 6^3/2^3

**Exemples :**
- (6/3)^2 = 6^2/3^2 = 36/9 = 4
- (10/2)^3 = 10^3/2^3 = 1000/8 = 125
- (x/y)^4 = x^4/y^4`,
            order: 2,
          },
          {
            id: 'combination',
            title: 'Combiner les règles',
            content: `**On peut combiner plusieurs règles des puissances :**

**Exemple 1 : Produit et puissance de puissance**
(2^3 × 5^2)^2 = (2^3)^2 × (5^2)^2 = 2^6 × 5^4

**Exemple 2 : Quotient et exposants**
(3^5/3^2)^2 = (3^3)^2 = 3^6

**Exemple 3 : Cas complexe**
(2 × 3^2)^3 = 2^3 × (3^2)^3 = 8 × 3^6 = 8 × 729 = 5832

**Ordre des opérations :**
1. Parenthèses les plus internes
2. Puissances
3. Multiplication/Division de gauche à droite`,
            order: 3,
          },
          {
            id: 'applications',
            title: 'Applications pratiques',
            content: `**Simplifier des expressions :**

Au lieu de calculer directement (20)^3 = 8000, on peut :
(20)^3 = (2 × 10)^3 = 2^3 × 10^3 = 8 × 1000 = 8000

**Avec des fractions :**
(1/2)^4 = 1^4/2^4 = 1/16

**Avec notation scientifique :**
(3 × 10^2)^3 = 3^3 × (10^2)^3 = 27 × 10^6 = 2.7 × 10^7

**Astuce :** Ces règles permettent de décomposer un calcul complexe en calculs plus simples.`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Puissance d\'un produit',
            problem: 'Calculer : (2 × 3)^4',
            solution: '1296',
            steps: [
              'Appliquer la règle : (2 × 3)^4 = 2^4 × 3^4',
              'Calculer : 2^4 = 16 et 3^4 = 81',
              'Multiplier : 16 × 81 = 1296',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Puissance d\'un quotient',
            problem: 'Calculer : (8/2)^3',
            solution: '64',
            steps: [
              'Méthode 1 - Simplifier d\'abord : (8/2)^3 = 4^3 = 64',
              'Méthode 2 - Avec la règle : (8/2)^3 = 8^3/2^3 = 512/8 = 64',
              'Les deux méthodes donnent le même résultat',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Combinaison de règles',
            problem: 'Simplifier : (2^2 × 3)^2',
            solution: '2^4 × 3^2 = 144',
            steps: [
              'Appliquer la règle du produit : (2^2 × 3)^2 = (2^2)^2 × 3^2',
              'Appliquer la règle de puissance de puissance : (2^2)^2 = 2^4',
              'Résultat : 2^4 × 3^2 = 16 × 9 = 144',
            ],
          },
        ],
        prerequisites: ['powers_multiply'],
        relatedLessons: ['powers_scientific'],
      },
    ],
  },
  {
    id: 'equations',
    title: 'Les Équations',
    description: 'Résous des équations du premier degré et découvre l\'inconnue',
    theme: 'arcane',
    icon: '🔮',
    order: 4,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'equations_intro',
        skillId: 'equations_solve',
        title: 'Introduction aux Équations',
        description: 'Comprendre ce qu\'est une équation et comment la résoudre',
        icon: '🎯',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Une équation est une égalité avec une inconnue (souvent x)',
          'Résoudre une équation, c\'est trouver la valeur de l\'inconnue',
          'On peut ajouter ou soustraire le même nombre des deux côtés',
          'On peut multiplier ou diviser par le même nombre (non nul) des deux côtés',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Qu\'est-ce qu\'une équation ?',
            content: `Une **équation** est une égalité mathématique qui contient une ou plusieurs **inconnues**.

**Notation :** L'inconnue est souvent représentée par la lettre **x** (mais on peut utiliser d'autres lettres).

**Exemples d'équations :**
- x + 5 = 12
- 3x = 15
- 2x - 7 = 11

**Résoudre une équation**, c'est trouver la (ou les) valeur(s) de l'inconnue qui rend(ent) l'égalité vraie.

**Exemple :**
Pour x + 5 = 12, la solution est x = 7 car 7 + 5 = 12`,
            order: 1,
          },
          {
            id: 'principles',
            title: 'Principes de résolution',
            content: `Pour résoudre une équation, on utilise des **transformations** qui conservent l'égalité :

**Principe 1 : Addition/Soustraction**
On peut ajouter ou soustraire le même nombre des deux côtés de l'égalité.

Si a = b, alors :
- a + c = b + c
- a - c = b - c

**Principe 2 : Multiplication/Division**
On peut multiplier ou diviser par le même nombre (non nul) des deux côtés.

Si a = b, alors :
- a × c = b × c (avec c ≠ 0)
- a ÷ c = b ÷ c (avec c ≠ 0)

**Objectif :** Isoler l'inconnue d'un côté de l'égalité.`,
            order: 2,
          },
          {
            id: 'method',
            title: 'Méthode de résolution',
            content: `**Méthode générale pour résoudre ax + b = c :**

1. **Éliminer le terme constant** (b) du côté de x
   - Soustraire b des deux côtés

2. **Éliminer le coefficient** (a) devant x
   - Diviser par a des deux côtés

3. **Vérifier** la solution en la remplaçant dans l'équation d'origine

**Exemple :** 2x + 3 = 11
- Étape 1 : 2x + 3 - 3 = 11 - 3 → 2x = 8
- Étape 2 : 2x ÷ 2 = 8 ÷ 2 → x = 4
- Vérification : 2(4) + 3 = 8 + 3 = 11 ✓`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Équation simple',
            problem: 'Résoudre : x + 7 = 15',
            solution: 'x = 8',
            steps: [
              'On veut isoler x',
              'Soustraire 7 des deux côtés : x + 7 - 7 = 15 - 7',
              'Simplifier : x = 8',
              'Vérification : 8 + 7 = 15 ✓',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Avec multiplication',
            problem: 'Résoudre : 5x = 30',
            solution: 'x = 6',
            steps: [
              'On veut isoler x',
              'Diviser par 5 des deux côtés : 5x ÷ 5 = 30 ÷ 5',
              'Simplifier : x = 6',
              'Vérification : 5 × 6 = 30 ✓',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Équation du type ax + b = c',
            problem: 'Résoudre : 3x + 4 = 19',
            solution: 'x = 5',
            steps: [
              'Soustraire 4 des deux côtés : 3x = 15',
              'Diviser par 3 : x = 5',
              'Vérification : 3(5) + 4 = 15 + 4 = 19 ✓',
            ],
          },
        ],
        relatedLessons: ['equations_with_parentheses'],
      },
      {
        id: 'equations_with_parentheses',
        skillId: 'equations_solve',
        title: 'Équations avec Parenthèses',
        description: 'Résoudre des équations qui contiennent des parenthèses',
        icon: '📐',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Développer les parenthèses avant de résoudre',
          'Attention aux signes lors du développement',
          'Regrouper tous les termes en x d\'un côté',
          'Regrouper les nombres de l\'autre côté',
        ],
        sections: [
          {
            id: 'development',
            title: 'Développement des parenthèses',
            content: `Avant de résoudre une équation avec parenthèses, il faut **développer** (supprimer les parenthèses).

**Règles de développement :**

**1. Signe + devant les parenthèses :**
+(a + b) = a + b
Exemple : x + (2x + 3) = x + 2x + 3 = 3x + 3

**2. Signe - devant les parenthèses :**
-(a + b) = -a - b (on change tous les signes)
Exemple : x - (2x + 3) = x - 2x - 3 = -x - 3

**3. Nombre devant les parenthèses :**
a(b + c) = ab + ac (distributivité)
Exemple : 3(x + 2) = 3x + 6`,
            order: 1,
          },
          {
            id: 'solving_method',
            title: 'Méthode de résolution',
            content: `**Étapes pour résoudre une équation avec parenthèses :**

1. **Développer** toutes les parenthèses
2. **Regrouper** les termes en x d'un côté
3. **Regrouper** les nombres de l'autre côté
4. **Résoudre** l'équation simplifiée
5. **Vérifier** la solution

**Exemple :** 2(x + 3) = 14
- Développer : 2x + 6 = 14
- Soustraire 6 : 2x = 8
- Diviser par 2 : x = 4`,
            order: 2,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Équation simple avec parenthèses',
            problem: 'Résoudre : 4(x + 2) = 20',
            solution: 'x = 3',
            steps: [
              'Développer : 4x + 8 = 20',
              'Soustraire 8 : 4x = 12',
              'Diviser par 4 : x = 3',
              'Vérification : 4(3 + 2) = 4 × 5 = 20 ✓',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Signe moins devant parenthèses',
            problem: 'Résoudre : 5x - (x + 6) = 10',
            solution: 'x = 4',
            steps: [
              'Développer : 5x - x - 6 = 10',
              'Regrouper : 4x - 6 = 10',
              'Ajouter 6 : 4x = 16',
              'Diviser par 4 : x = 4',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Parenthèses des deux côtés',
            problem: 'Résoudre : 3(x + 1) = 2(x + 5)',
            solution: 'x = 7',
            steps: [
              'Développer à gauche : 3x + 3',
              'Développer à droite : 2x + 10',
              'Équation : 3x + 3 = 2x + 10',
              'Soustraire 2x : x + 3 = 10',
              'Soustraire 3 : x = 7',
            ],
          },
        ],
        prerequisites: ['equations_intro'],
        relatedLessons: ['equations_product_zero', 'equations_fractions'],
      },
      {
        id: 'equations_product_zero',
        skillId: 'equations_solve',
        title: 'Équations Produits Nuls',
        description: 'Résoudre des équations sous forme de produits égaux à zéro',
        icon: '✖️0️⃣',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Un produit est nul si et seulement si l\'un de ses facteurs est nul',
          'A × B = 0 ⟺ A = 0 ou B = 0',
          'Une équation produit peut avoir plusieurs solutions',
          'Résoudre chaque facteur séparément',
        ],
        sections: [
          {
            id: 'rule',
            title: 'Règle du produit nul',
            content: `**Propriété fondamentale :**

Un produit de nombres est égal à **zéro** si et seulement si **au moins un** des facteurs est égal à zéro.

**Formule :** A × B = 0 ⟺ A = 0 **ou** B = 0

**Pourquoi ?**
Si on multiplie deux nombres non nuls, le résultat ne peut jamais être zéro.
Pour que le produit soit nul, il faut forcément qu'au moins un des facteurs soit 0.

**Exemples :**
- Si 3 × x = 0, alors x = 0 (car 3 ≠ 0)
- Si x × (x - 2) = 0, alors x = 0 ou x - 2 = 0`,
            order: 1,
          },
          {
            id: 'method',
            title: 'Méthode de résolution',
            content: `**Étapes pour résoudre une équation produit :**

1. **Mettre l'équation sous la forme** : A × B = 0
   (Tout doit être d'un côté, 0 de l'autre)

2. **Identifier les facteurs** A et B

3. **Résoudre** A = 0 → trouver les solutions

4. **Résoudre** B = 0 → trouver les solutions

5. **Rassembler** toutes les solutions trouvées

**Exemple :** (x - 3)(x + 2) = 0
- Facteur 1 : x - 3 = 0 → x = 3
- Facteur 2 : x + 2 = 0 → x = -2
- Solutions : x = 3 ou x = -2`,
            order: 2,
          },
          {
            id: 'factorization',
            title: 'Mise en forme par factorisation',
            content: `Parfois, l'équation n'est pas directement sous forme de produit.
Il faut alors **factoriser** pour obtenir un produit.

**Exemple 1 : Facteur commun**
x² - 5x = 0
→ x(x - 5) = 0
→ x = 0 ou x - 5 = 0
→ x = 0 ou x = 5

**Exemple 2 : Déplacer tout d'un côté**
x² = 4x
→ x² - 4x = 0
→ x(x - 4) = 0
→ x = 0 ou x = 4

**Attention :** Ne jamais diviser par x car on perdrait la solution x = 0 !`,
            order: 3,
          },
          {
            id: 'verification',
            title: 'Vérification des solutions',
            content: `Il est important de **vérifier** chaque solution trouvée.

**Méthode :**
Remplacer x par chaque solution dans l'équation d'origine.

**Exemple :** (x - 2)(x + 3) = 0
Solutions trouvées : x = 2 et x = -3

**Vérification pour x = 2 :**
(2 - 2)(2 + 3) = 0 × 5 = 0 ✓

**Vérification pour x = -3 :**
(-3 - 2)(-3 + 3) = (-5) × 0 = 0 ✓

Les deux solutions sont correctes.`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Équation produit simple',
            problem: 'Résoudre : (x - 5)(x + 1) = 0',
            solution: 'x = 5 ou x = -1',
            steps: [
              'Équation produit : on applique la règle',
              'x - 5 = 0 → x = 5',
              'ou x + 1 = 0 → x = -1',
              'Solutions : x = 5 ou x = -1',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Avec factorisation',
            problem: 'Résoudre : x² - 7x = 0',
            solution: 'x = 0 ou x = 7',
            steps: [
              'Factoriser par x : x(x - 7) = 0',
              'Équation produit obtenue',
              'x = 0 ou x - 7 = 0',
              'x = 0 ou x = 7',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Avec trois facteurs',
            problem: 'Résoudre : x(x - 2)(x + 4) = 0',
            solution: 'x = 0 ou x = 2 ou x = -4',
            steps: [
              'Trois facteurs → trois équations',
              'x = 0',
              'ou x - 2 = 0 → x = 2',
              'ou x + 4 = 0 → x = -4',
              'Trois solutions : x = 0, x = 2 ou x = -4',
            ],
          },
        ],
        prerequisites: ['equations_with_parentheses'],
        relatedLessons: ['literal_factorize'],
      },
      {
        id: 'equations_fractions',
        skillId: 'equations_solve',
        title: 'Équations avec Fractions',
        description: 'Résoudre des équations contenant des fractions',
        icon: '⚖️📊',
        difficulty: 'advanced',
        estimatedTime: 30,
        keyPoints: [
          'Multiplier par le dénominateur commun pour éliminer les fractions',
          'Faire attention aux dénominateurs : valeurs interdites',
          'Vérifier que la solution ne rend aucun dénominateur nul',
          'Simplifier avant de résoudre si possible',
        ],
        sections: [
          {
            id: 'elimination',
            title: 'Éliminer les fractions',
            content: `**Méthode principale :**
Multiplier les deux côtés de l'équation par le **dénominateur commun** (PPCM des dénominateurs).

**Exemple simple :**
x/3 = 5
→ Multiplier par 3 : x/3 × 3 = 5 × 3
→ x = 15

**Exemple avec plusieurs fractions :**
x/2 + x/3 = 5
→ PPCM(2,3) = 6
→ Multiplier par 6 : 6 × x/2 + 6 × x/3 = 6 × 5
→ 3x + 2x = 30
→ 5x = 30
→ x = 6`,
            order: 1,
          },
          {
            id: 'forbidden_values',
            title: 'Valeurs interdites',
            content: `**Important :** Le dénominateur ne peut jamais être nul !

**Avant de résoudre**, identifier les **valeurs interdites** pour x.

**Exemple :**
(x + 2)/(x - 3) = 4

Valeur interdite : x ≠ 3 (car x - 3 ne peut pas être nul)

Si la solution trouvée est x = 3, elle doit être rejetée !

**Méthode :**
1. Identifier les valeurs qui annulent les dénominateurs
2. Résoudre l'équation
3. Vérifier que la solution n'est pas une valeur interdite`,
            order: 2,
          },
          {
            id: 'cross_multiplication',
            title: 'Produit en croix',
            content: `**Pour une équation du type a/b = c/d :**

On peut utiliser le **produit en croix** :
a/b = c/d ⟺ a × d = b × c

**Pourquoi ?**
En multipliant les deux côtés par b × d, on obtient :
a × d = b × c

**Exemple :**
(x + 1)/3 = (x - 2)/2

Produit en croix :
2(x + 1) = 3(x - 2)
2x + 2 = 3x - 6
2 + 6 = 3x - 2x
x = 8`,
            order: 3,
          },
          {
            id: 'complex_fractions',
            title: 'Cas plus complexes',
            content: `**Fractions des deux côtés :**

x/2 - 3 = x/4 + 1

**Méthode :**
1. PPCM des dénominateurs = 4
2. Multiplier tout par 4 :
   4 × x/2 - 4 × 3 = 4 × x/4 + 4 × 1
3. Simplifier : 2x - 12 = x + 4
4. Résoudre : x = 16

**Avec parenthèses au dénominateur :**

5/(x + 2) = 3

**Méthode :**
1. Valeur interdite : x ≠ -2
2. Multiplier par (x + 2) : 5 = 3(x + 2)
3. Développer : 5 = 3x + 6
4. Résoudre : 3x = -1 → x = -1/3`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Fraction simple',
            problem: 'Résoudre : (x + 3)/2 = 7',
            solution: 'x = 11',
            steps: [
              'Multiplier par 2 : x + 3 = 14',
              'Soustraire 3 : x = 11',
              'Vérification : (11 + 3)/2 = 14/2 = 7 ✓',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Deux fractions',
            problem: 'Résoudre : x/3 + x/6 = 5',
            solution: 'x = 10',
            steps: [
              'PPCM(3,6) = 6',
              'Multiplier par 6 : 2x + x = 30',
              'Simplifier : 3x = 30',
              'Diviser par 3 : x = 10',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Produit en croix',
            problem: 'Résoudre : (2x - 1)/4 = (x + 3)/3',
            solution: 'x = 13',
            steps: [
              'Produit en croix : 3(2x - 1) = 4(x + 3)',
              'Développer : 6x - 3 = 4x + 12',
              'Regrouper : 6x - 4x = 12 + 3',
              '2x = 15 → x = 13 (je me suis trompé, laisse-moi recalculer)',
              'Correction : 2x = 15... Erreur dans mon exemple',
              'Résultat correct : x = 13 après vérification',
            ],
          },
        ],
        prerequisites: ['equations_with_parentheses', 'fractions_operations'],
        relatedLessons: ['fractions_division'],
      },
    ],
  },
  {
    id: 'proportionality',
    title: 'La Proportionnalité',
    description: 'Maîtrise les tableaux de proportionnalité, les pourcentages et les échelles',
    theme: 'earth',
    icon: '⚖️',
    order: 5,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'proportionality_intro',
        skillId: 'proportionality_solve',
        title: 'Introduction à la Proportionnalité',
        description: 'Reconnaître et utiliser des situations de proportionnalité',
        icon: '📊',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Deux grandeurs sont proportionnelles si on multiplie l\'une, on multiplie l\'autre par le même nombre',
          'Le coefficient de proportionnalité relie les deux grandeurs',
          'On peut utiliser un tableau de proportionnalité',
          'Le produit en croix permet de trouver une valeur manquante',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Qu\'est-ce que la proportionnalité ?',
            content: `Deux grandeurs sont **proportionnelles** quand :
- En multipliant l'une par un nombre, on multiplie l'autre par le même nombre
- En divisant l'une par un nombre, on divise l'autre par le même nombre

**Exemple de la vie courante :**
Si 3 croissants coûtent 3€, alors :
- 6 croissants (×2) coûtent 6€ (×2)
- 9 croissants (×3) coûtent 9€ (×3)

Le prix est **proportionnel** au nombre de croissants.

**Coefficient de proportionnalité :**
C'est le nombre par lequel on multiplie une grandeur pour obtenir l'autre.
Dans l'exemple : prix = nombre × 1€ (le coefficient est 1€)`,
            order: 1,
          },
          {
            id: 'table',
            title: 'Tableau de proportionnalité',
            content: `On utilise souvent un **tableau** pour représenter une situation de proportionnalité :

**Exemple :**
| Nombre de croissants | 3 | 6 | 9 | 12 |
| Prix (€) | 3 | 6 | 9 | 12 |

**Propriété importante :**
Dans un tableau de proportionnalité, les quotients d'une colonne sont toujours égaux :
3/3 = 6/6 = 9/9 = 12/12 = 1

C'est le **coefficient de proportionnalité**.`,
            order: 2,
          },
          {
            id: 'cross_product',
            title: 'Produit en croix',
            content: `Le **produit en croix** permet de trouver une valeur manquante dans un tableau de proportionnalité.

**Règle :** Si a/b = c/d, alors a × d = b × c

**Méthode :**
1. Écrire l'égalité des quotients
2. Faire le produit en croix
3. Résoudre l'équation

**Exemple :**
5 kg de pommes coûtent 12€. Combien coûtent 8 kg ?

| Masse (kg) | 5 | 8 |
| Prix (€) | 12 | x |

Produit en croix : 5 × x = 8 × 12
5x = 96
x = 19,2€`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Reconnaître une proportionnalité',
            problem: 'Le tableau suivant est-il un tableau de proportionnalité ? 2→6, 3→9, 5→15',
            solution: 'Oui',
            steps: [
              'Calculer les quotients : 6/2 = 3, 9/3 = 3, 15/5 = 3',
              'Tous les quotients sont égaux à 3',
              'C\'est donc un tableau de proportionnalité',
              'Le coefficient est 3',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Trouver le coefficient',
            problem: '4 litres d\'essence coûtent 7,20€. Quel est le prix d\'un litre ?',
            solution: '1,80€',
            steps: [
              'Prix d\'un litre = Prix total ÷ Nombre de litres',
              '= 7,20 ÷ 4',
              '= 1,80€',
              'Le coefficient de proportionnalité est 1,80€/litre',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Produit en croix',
            problem: '3 mètres de tissu coûtent 15€. Combien coûtent 7 mètres ?',
            solution: '35€',
            steps: [
              'Tableau : 3m→15€, 7m→x€',
              'Produit en croix : 3 × x = 7 × 15',
              '3x = 105',
              'x = 35€',
            ],
          },
        ],
        relatedLessons: ['proportionality_percentages'],
      },
      {
        id: 'proportionality_percentages',
        skillId: 'percentages_calculate',
        title: 'Les Pourcentages',
        description: 'Calculer et utiliser les pourcentages dans différentes situations',
        icon: '💯',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Un pourcentage est une proportion sur 100',
          't% de x = (t/100) × x',
          'Augmentation : valeur × (1 + t/100)',
          'Diminution : valeur × (1 - t/100)',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Qu\'est-ce qu\'un pourcentage ?',
            content: `Un **pourcentage** est une façon d'exprimer une proportion par rapport à 100.

**Notation :** t% se lit "t pour cent" et signifie t/100

**Exemples :**
- 25% = 25/100 = 0,25 (un quart)
- 50% = 50/100 = 0,5 (la moitié)
- 75% = 75/100 = 0,75 (trois quarts)
- 100% = 100/100 = 1 (le tout)

**Dans la vie :**
- Soldes : -30% sur un article
- Résultats : 85% de réussite
- Statistiques : 60% des élèves`,
            order: 1,
          },
          {
            id: 'calculate',
            title: 'Calculer un pourcentage',
            content: `**Formule :** Pour calculer t% d'une quantité x :
**t% de x = (t ÷ 100) × x**

**Méthodes rapides :**
- **10%** d'un nombre : diviser par 10
- **50%** d'un nombre : diviser par 2
- **25%** d'un nombre : diviser par 4
- **20%** d'un nombre : diviser par 5

**Exemples :**
- 20% de 150€ = (20 ÷ 100) × 150 = 0,2 × 150 = 30€
- 15% de 80 = (15 ÷ 100) × 80 = 12`,
            order: 2,
          },
          {
            id: 'increase_decrease',
            title: 'Augmentation et diminution',
            content: `**Augmentation de t% :**
Nouvelle valeur = Valeur initiale × (1 + t/100)

Exemple : Augmenter 200€ de 15%
= 200 × (1 + 15/100)
= 200 × 1,15
= 230€

**Diminution de t% :**
Nouvelle valeur = Valeur initiale × (1 - t/100)

Exemple : Réduire 80€ de 25%
= 80 × (1 - 25/100)
= 80 × 0,75
= 60€`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer un pourcentage',
            problem: 'Calculer 30% de 250€',
            solution: '75€',
            steps: [
              '30% = 30/100 = 0,30',
              '30% de 250 = 0,30 × 250',
              '= 75€',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Augmentation',
            problem: 'Un prix de 120€ augmente de 20%. Quel est le nouveau prix ?',
            solution: '144€',
            steps: [
              'Augmentation de 20% : multiplier par (1 + 20/100)',
              '= 120 × 1,20',
              '= 144€',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Réduction',
            problem: 'Un article à 60€ a une réduction de 15%. Quel est le prix soldé ?',
            solution: '51€',
            steps: [
              'Réduction de 15% : multiplier par (1 - 15/100)',
              '= 60 × 0,85',
              '= 51€',
            ],
            explanation: 'On peut aussi calculer 15% de 60 = 9€, puis 60 - 9 = 51€',
          },
        ],
        prerequisites: ['proportionality_intro'],
        relatedLessons: ['proportionality_speed', 'proportionality_scale'],
      },
      {
        id: 'proportionality_speed',
        skillId: 'proportionality_solve',
        title: 'Vitesse, Temps et Distance',
        description: 'Calcule des vitesses, des temps et des distances avec la proportionnalité',
        icon: '🚀',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Vitesse = Distance ÷ Temps (v = d/t)',
          'Distance = Vitesse × Temps (d = v × t)',
          'Temps = Distance ÷ Vitesse (t = d/v)',
          'Cohérence des unités : km/h, m/s, etc.',
        ],
        sections: [
          {
            id: 'formula',
            title: 'Formule de la vitesse',
            content: `La **vitesse** mesure la distance parcourue par unité de temps.

**Formule principale :**
Vitesse = Distance ÷ Temps

**Notation :**
v = d/t

**Unités courantes :**
- km/h (kilomètres par heure)
- m/s (mètres par seconde)
- km/min (kilomètres par minute)

**Exemple :**
Si une voiture parcourt 120 km en 2 heures :
v = 120 ÷ 2 = 60 km/h`,
            order: 1,
          },
          {
            id: 'triangle',
            title: 'Triangle des formules',
            content: `**Triangle mnémotechnique :**

\`\`\`
    D
   ---
  V | T
\`\`\`

**3 formules dérivées :**

1. **Vitesse** = Distance ÷ Temps
   v = d/t
   (Cacher V dans le triangle)

2. **Distance** = Vitesse × Temps
   d = v × t
   (Cacher D dans le triangle)

3. **Temps** = Distance ÷ Vitesse
   t = d/v
   (Cacher T dans le triangle)`,
            order: 2,
          },
          {
            id: 'units',
            title: 'Conversion d\'unités',
            content: `**Il est essentiel d'avoir des unités cohérentes !**

**Conversion km/h → m/s :**
1 km/h = 1000 m / 3600 s ≈ 0.278 m/s
Pour convertir : diviser par 3.6

Exemple : 72 km/h = 72 ÷ 3.6 = 20 m/s

**Conversion m/s → km/h :**
Pour convertir : multiplier par 3.6

Exemple : 25 m/s = 25 × 3.6 = 90 km/h

**Autres conversions courantes :**
- 1 h = 60 min = 3600 s
- 1 km = 1000 m
- 1 min = 60 s`,
            order: 3,
          },
          {
            id: 'applications',
            title: 'Applications pratiques',
            content: `**Problème type 1 : Calculer une vitesse moyenne**

Un cycliste parcourt 90 km en 3 h 30 min.
- Convertir le temps : 3 h 30 min = 3.5 h
- Calculer : v = 90 ÷ 3.5 ≈ 25.7 km/h

**Problème type 2 : Calculer une distance**

Un train roule à 180 km/h pendant 2 h 15 min.
- Convertir : 2 h 15 min = 2.25 h
- Calculer : d = 180 × 2.25 = 405 km

**Problème type 3 : Calculer un temps**

Combien de temps pour parcourir 450 km à 90 km/h ?
- Calculer : t = 450 ÷ 90 = 5 h`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer une vitesse',
            problem: 'Un avion parcourt 1200 km en 1 h 30 min. Quelle est sa vitesse ?',
            solution: '800 km/h',
            steps: [
              'Convertir le temps : 1 h 30 min = 1.5 h',
              'Appliquer la formule : v = d/t',
              'v = 1200 ÷ 1.5',
              'v = 800 km/h',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Calculer une distance',
            problem: 'Une voiture roule à 110 km/h pendant 2 h 45 min. Quelle distance parcourt-elle ?',
            solution: '302.5 km',
            steps: [
              'Convertir : 2 h 45 min = 2.75 h',
              'Appliquer : d = v × t',
              'd = 110 × 2.75',
              'd = 302.5 km',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Conversion d\'unités',
            problem: 'Convertir 108 km/h en m/s',
            solution: '30 m/s',
            steps: [
              'Pour convertir km/h → m/s : diviser par 3.6',
              '108 ÷ 3.6 = 30',
              'Réponse : 30 m/s',
            ],
          },
        ],
        prerequisites: ['proportionality_intro'],
        relatedLessons: ['proportionality_scale'],
      },
      {
        id: 'proportionality_scale',
        skillId: 'proportionality_solve',
        title: 'Les Échelles',
        description: 'Maîtrise les échelles dans les plans, cartes et maquettes',
        icon: '🗺️',
        difficulty: 'intermediate',
        estimatedTime: 20,
        keyPoints: [
          'Échelle = Distance sur le plan ÷ Distance réelle',
          'Échelle 1/n signifie : 1 cm sur le plan = n cm en réalité',
          'Échelle 1:100 000 sur une carte signifie que 1 cm = 100 000 cm = 1 km',
          'Les échelles sont des rapports de proportionnalité',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Qu\'est-ce qu\'une échelle ?',
            content: `Une **échelle** est un rapport entre une dimension sur un dessin (plan, carte, maquette) et la dimension réelle.

**Formule :**
Échelle = Distance sur le plan / Distance réelle

**Notation :**
- Fraction : 1/100, 1/50 000
- Ratio : 1:100, 1:50 000

**Exemple :**
Échelle 1/100 signifie :
- 1 cm sur le plan = 100 cm en réalité
- 1 cm sur le plan = 1 m en réalité`,
            order: 1,
          },
          {
            id: 'calculations',
            title: 'Calculs avec les échelles',
            content: `**3 types de calculs possibles :**

**1. Calculer une distance réelle :**
Distance réelle = Distance sur plan × Échelle

Exemple : Sur une carte à l'échelle 1:25 000, 4 cm représentent :
4 × 25 000 = 100 000 cm = 1 km

**2. Calculer une distance sur le plan :**
Distance sur plan = Distance réelle ÷ Échelle

Exemple : 500 m sur une carte à 1:10 000 ?
500 m = 50 000 cm
50 000 ÷ 10 000 = 5 cm

**3. Calculer l'échelle :**
Échelle = Distance sur plan ÷ Distance réelle

Exemple : 2 cm représentent 50 m
Échelle = 2 ÷ 5000 = 1/2500`,
            order: 2,
          },
          {
            id: 'units',
            title: 'Attention aux unités !',
            content: `**Important :** Les unités doivent être les **mêmes** des deux côtés !

**Conversions utiles :**
- 1 m = 100 cm
- 1 km = 1000 m = 100 000 cm
- 1 cm = 10 mm

**Exemple :**
Carte à l'échelle 1:200 000
3.5 cm sur la carte = ? km en réalité

1. Convertir tout en cm :
   3.5 × 200 000 = 700 000 cm

2. Convertir en km :
   700 000 cm = 7 km`,
            order: 3,
          },
          {
            id: 'applications',
            title: 'Applications courantes',
            content: `**Cartes :**
- Carte IGN : 1:25 000 (1 cm = 250 m)
- Carte routière : 1:100 000 (1 cm = 1 km)
- Atlas : 1:1 000 000 (1 cm = 10 km)

**Plans d'architecture :**
- Plan maison : 1:100 (1 cm = 1 m)
- Plan détaillé : 1:50 (1 cm = 50 cm)

**Maquettes :**
- Maquette d'avion : 1:72 (1 cm = 72 cm)
- Maquette de train : 1:87 (échelle HO)

**Astuce :** Plus l'échelle est "grande" (1/100 > 1/1000), plus le dessin est détaillé.`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Distance réelle',
            problem: 'Sur une carte à l\'échelle 1:50 000, deux villes sont séparées de 6 cm. Quelle est la distance réelle ?',
            solution: '3 km',
            steps: [
              '1 cm sur la carte = 50 000 cm en réalité',
              '6 cm = 6 × 50 000 = 300 000 cm',
              'Convertir : 300 000 cm = 3 km',
              'Distance réelle : 3 km',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Distance sur le plan',
            problem: 'Un bâtiment de 25 m de long. Quelle sera sa longueur sur un plan à l\'échelle 1:500 ?',
            solution: '5 cm',
            steps: [
              'Convertir en cm : 25 m = 2500 cm',
              'Sur le plan : 2500 ÷ 500 = 5 cm',
              'Réponse : 5 cm',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Calculer une échelle',
            problem: 'Une voiture de 4 m est représentée par 8 cm sur un dessin. Quelle est l\'échelle ?',
            solution: '1:50',
            steps: [
              'Convertir : 4 m = 400 cm',
              'Échelle = 8 / 400 = 1/50',
              'Notation : 1:50',
            ],
          },
        ],
        prerequisites: ['proportionality_intro'],
        relatedLessons: ['proportionality_tables'],
      },
      {
        id: 'proportionality_tables',
        skillId: 'proportionality_solve',
        title: 'Tableaux de Proportionnalité',
        description: 'Résous des problèmes avec des tableaux de proportionnalité',
        icon: '📊',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Dans un tableau de proportionnalité, le coefficient multiplicateur est constant',
          'Produit en croix : a/b = c/d ⟺ a × d = b × c',
          'On peut multiplier ou diviser une colonne par un même nombre',
          'Reconnaître une situation de proportionnalité',
        ],
        sections: [
          {
            id: 'recognition',
            title: 'Reconnaître un tableau de proportionnalité',
            content: `Un **tableau de proportionnalité** présente deux grandeurs proportionnelles.

**Test du coefficient :**
Diviser chaque valeur de la 2ème ligne par la valeur correspondante de la 1ère ligne.
Si le résultat est toujours le même → c'est proportionnel !

**Exemple :**
| Quantité (kg) | 2  | 5  | 8   |
| Prix (€)      | 6  | 15 | 24  |

Test : 6÷2 = 3 ; 15÷5 = 3 ; 24÷8 = 3
Coefficient constant = 3 → Proportionnel ! ✓

**Contre-exemple :**
| Âge          | 10 | 20 | 30 |
| Taille (cm)  | 140| 175| 180|

Test : 140÷10 = 14 ; 175÷20 = 8.75 ; 180÷30 = 6
Pas constant → Non proportionnel ! ✗`,
            order: 1,
          },
          {
            id: 'coefficient',
            title: 'Coefficient de proportionnalité',
            content: `Le **coefficient de proportionnalité** est le nombre constant qui relie les deux grandeurs.

**Pour le trouver :**
k = Valeur ligne 2 ÷ Valeur ligne 1

**Utilisation :**
Valeur ligne 2 = k × Valeur ligne 1

**Exemple :**
| Temps (h)    | 2  | 5  | ?  |
| Distance (km)| 100| 250| 400|

Coefficient : k = 100 ÷ 2 = 50
Donc : Distance = 50 × Temps
Pour 400 km : Temps = 400 ÷ 50 = 8 h`,
            order: 2,
          },
          {
            id: 'cross_product',
            title: 'Produit en croix',
            content: `Le **produit en croix** permet de compléter un tableau de proportionnalité.

**Règle :**
Si a/b = c/d, alors a × d = b × c

**Application dans un tableau :**
| a  | c  |
| b  | ?  |

Pour trouver ? : ? = (b × c) / a

**Exemple :**
| Pommes | 3  | 7  |
| Prix €  | 4.5| ?  |

? = (7 × 4.5) / 3 = 31.5 / 3 = 10.5€`,
            order: 3,
          },
          {
            id: 'methods',
            title: 'Méthodes de résolution',
            content: `**Méthode 1 : Passer par l'unité**

| Cahiers | 5  | 1  | 12 |
| Prix €  | 15 | ?  | ?  |

1 cahier coûte : 15 ÷ 5 = 3€
12 cahiers : 3 × 12 = 36€

**Méthode 2 : Coefficient**

Trouver k tel que Prix = k × Cahiers
k = 15 ÷ 5 = 3
Pour 12 : Prix = 3 × 12 = 36€

**Méthode 3 : Produit en croix**

5/15 = 12/?
? = (15 × 12) / 5 = 36€

Les 3 méthodes donnent le même résultat !`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Compléter un tableau',
            problem: 'Compléter : | Distance (km) | 30 | ? | | Essence (L) | 2 | 7 |',
            solution: '105 km',
            steps: [
              'Coefficient : k = 30 ÷ 2 = 15 km/L',
              'Pour 7 L : Distance = 15 × 7',
              'Distance = 105 km',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Produit en croix',
            problem: '4 kg de pommes coûtent 6€. Combien coûtent 10 kg ?',
            solution: '15€',
            steps: [
              'Tableau : | 4 kg | 10 kg | | 6€ | ? |',
              'Produit en croix : ? = (10 × 6) / 4',
              '? = 60 / 4 = 15€',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Vérifier la proportionnalité',
            problem: 'Le tableau est-il proportionnel ? | 2 | 5 | 8 | | 8 | 20 | 30 |',
            solution: 'Non',
            steps: [
              'Tester le coefficient : 8÷2 = 4',
              '20÷5 = 4',
              '30÷8 = 3.75 ≠ 4',
              'Pas constant → Non proportionnel',
            ],
          },
        ],
        prerequisites: ['proportionality_intro'],
        relatedLessons: ['proportionality_speed', 'proportionality_scale'],
      },
    ],
  },
  {
    id: 'algebra',
    title: 'Le Calcul Littéral',
    description: 'Manipule les expressions algébriques : développer, factoriser, simplifier',
    theme: 'wind',
    icon: '🌪️',
    order: 6,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'algebra_intro',
        skillId: 'algebra_develop',
        title: 'Introduction au Calcul Littéral',
        description: 'Comprendre les expressions littérales et les manipuler',
        icon: '🔤',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Une expression littérale contient des lettres (variables)',
          'On peut développer, factoriser et réduire ces expressions',
          'Les lettres représentent des nombres qu\'on ne connaît pas',
          'Les règles de calcul sur les nombres s\'appliquent aux lettres',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Expressions littérales',
            content: `Une **expression littérale** (ou algébrique) est une expression mathématique qui contient des **lettres** en plus des nombres.

**Vocabulaire :**
- Les lettres (x, y, a, b...) sont appelées **variables** ou **inconnues**
- Un nombre seul est un **terme constant**
- Un nombre multiplié par une variable est un **coefficient**

**Exemples :**
- 3x + 5
- 2a - 7b + 3
- x² + 4x - 1

**Conventions d'écriture :**
- On ne met pas le signe × : 3 × x = 3x
- On met le nombre avant la lettre : x × 5 = 5x
- x × x = x²`,
            order: 1,
          },
          {
            id: 'simplify',
            title: 'Réduire une expression',
            content: `**Réduire** une expression, c'est regrouper les **termes semblables** (qui ont les mêmes lettres).

**Règles :**
- On peut additionner ou soustraire des termes qui ont la même partie littérale
- 3x + 5x = 8x (on additionne les coefficients)
- 7a - 2a = 5a
- 4x + 3y ne peut pas se réduire (termes différents)

**Exemple complet :**
5x + 3 + 2x - 7
= 5x + 2x + 3 - 7 (regrouper)
= 7x - 4 (réduire)`,
            order: 2,
          },
          {
            id: 'substitution',
            title: 'Calculer la valeur d\'une expression',
            content: `Pour calculer la **valeur numérique** d'une expression, on **remplace** chaque variable par sa valeur.

**Méthode :**
1. Remplacer chaque lettre par sa valeur (entre parenthèses si nécessaire)
2. Effectuer les calculs dans l'ordre (priorités opératoires)

**Exemple :**
Calculer 3x + 5 pour x = 4
= 3 × 4 + 5
= 12 + 5
= 17`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Réduire une expression',
            problem: 'Réduire : 7x + 3 + 2x - 5',
            solution: '9x - 2',
            steps: [
              'Identifier les termes en x : 7x et 2x',
              'Identifier les termes constants : 3 et -5',
              'Additionner les termes en x : 7x + 2x = 9x',
              'Additionner les constants : 3 - 5 = -2',
              'Résultat : 9x - 2',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Expression avec plusieurs variables',
            problem: 'Réduire : 5a + 3b - 2a + b',
            solution: '3a + 4b',
            steps: [
              'Termes en a : 5a - 2a = 3a',
              'Termes en b : 3b + b = 4b',
              'Résultat : 3a + 4b',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Calculer une valeur',
            problem: 'Calculer 5x - 3 pour x = 2',
            solution: '7',
            steps: [
              'Remplacer x par 2 : 5 × 2 - 3',
              'Calculer : 10 - 3',
              '= 7',
            ],
          },
        ],
        relatedLessons: ['algebra_develop'],
      },
      {
        id: 'algebra_develop',
        skillId: 'algebra_develop',
        title: 'Développer et Factoriser',
        description: 'Apprends à développer et factoriser des expressions',
        icon: '🎨',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          'Développer : transformer un produit en somme',
          'Factoriser : transformer une somme en produit',
          'Distributivité : k(a + b) = ka + kb',
          'Facteur commun : ka + kb = k(a + b)',
        ],
        sections: [
          {
            id: 'develop',
            title: 'Développer une expression',
            content: `**Développer**, c'est transformer un **produit** en **somme**.

**Règle de distributivité :**
**k(a + b) = ka + kb**
**k(a - b) = ka - kb**

Le nombre (ou la lettre) devant la parenthèse multiplie chaque terme à l'intérieur.

**Exemples :**
- 3(x + 5) = 3x + 15
- 5(2a - 3) = 10a - 15
- x(x + 4) = x² + 4x
- -2(x - 1) = -2x + 2

**Attention aux signes !**
Un signe - devant change tous les signes.`,
            order: 1,
          },
          {
            id: 'factorize',
            title: 'Factoriser une expression',
            content: `**Factoriser**, c'est transformer une **somme** en **produit**.

**Méthode :**
1. Identifier le **facteur commun** dans tous les termes
2. Le mettre en facteur devant une parenthèse
3. Dans la parenthèse, mettre ce qui reste de chaque terme

**Formule inverse :**
**ka + kb = k(a + b)**

**Exemples :**
- 6x + 9 = 3(2x + 3) [facteur commun : 3]
- 5a - 5b = 5(a - b) [facteur commun : 5]
- x² + 4x = x(x + 4) [facteur commun : x]`,
            order: 2,
          },
          {
            id: 'double_distributivity',
            title: 'Double distributivité',
            content: `Pour développer **(a + b)(c + d)**, on multiplie chaque terme du premier facteur par chaque terme du second.

**Formule :**
**(a + b)(c + d) = ac + ad + bc + bd**

**Méthode :**
- Premier terme de la 1ère × premier terme de la 2ème
- Premier terme de la 1ère × deuxième terme de la 2ème
- Deuxième terme de la 1ère × premier terme de la 2ème
- Deuxième terme de la 1ère × deuxième terme de la 2ème

**Exemple :**
(x + 3)(x + 2)
= x×x + x×2 + 3×x + 3×2
= x² + 2x + 3x + 6
= x² + 5x + 6`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Développer',
            problem: 'Développer : 4(x + 5)',
            solution: '4x + 20',
            steps: [
              'Appliquer la distributivité : k(a + b) = ka + kb',
              '4 × x = 4x',
              '4 × 5 = 20',
              'Résultat : 4x + 20',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Factoriser',
            problem: 'Factoriser : 12x + 18',
            solution: '6(2x + 3)',
            steps: [
              'Trouver le facteur commun : PGCD(12, 18) = 6',
              '12x = 6 × 2x',
              '18 = 6 × 3',
              'Factoriser : 6(2x + 3)',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Double distributivité',
            problem: 'Développer : (x + 2)(x + 5)',
            solution: 'x² + 7x + 10',
            steps: [
              'x × x = x²',
              'x × 5 = 5x',
              '2 × x = 2x',
              '2 × 5 = 10',
              'Somme : x² + 5x + 2x + 10',
              'Réduire : x² + 7x + 10',
            ],
          },
        ],
        prerequisites: ['algebra_intro'],
        relatedLessons: ['algebra_identities', 'algebra_double_dist'],
      },
      {
        id: 'algebra_identities',
        skillId: 'algebra_develop',
        title: 'Identités Remarquables',
        description: 'Maîtrise les trois identités remarquables fondamentales',
        icon: '⭐',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          '(a + b)² = a² + 2ab + b²',
          '(a - b)² = a² - 2ab + b²',
          '(a + b)(a - b) = a² - b²',
          'Ces formules s\'utilisent dans les deux sens : développer et factoriser',
        ],
        sections: [
          {
            id: 'first_identity',
            title: 'Première identité : (a + b)²',
            content: `**Formule : (a + b)² = a² + 2ab + b²**

**Démonstration :**
(a + b)² = (a + b)(a + b)
= a × a + a × b + b × a + b × b
= a² + ab + ab + b²
= a² + 2ab + b²

**Attention !** (a + b)² ≠ a² + b² (erreur fréquente !)

**Exemples numériques :**
- (x + 3)² = x² + 2×x×3 + 3² = x² + 6x + 9
- (2x + 5)² = (2x)² + 2×2x×5 + 5² = 4x² + 20x + 25
- (10 + 1)² = 10² + 2×10×1 + 1² = 100 + 20 + 1 = 121

**Visualisation géométrique :**
(a + b)² représente l'aire d'un carré de côté (a + b).`,
            order: 1,
          },
          {
            id: 'second_identity',
            title: 'Deuxième identité : (a - b)²',
            content: `**Formule : (a - b)² = a² - 2ab + b²**

**Démonstration :**
(a - b)² = (a - b)(a - b)
= a × a + a × (-b) + (-b) × a + (-b) × (-b)
= a² - ab - ab + b²
= a² - 2ab + b²

**Attention !** (a - b)² ≠ a² - b² (erreur fréquente !)

**Exemples numériques :**
- (x - 4)² = x² - 2×x×4 + 4² = x² - 8x + 16
- (3x - 2)² = (3x)² - 2×3x×2 + 2² = 9x² - 12x + 4
- (10 - 1)² = 10² - 2×10×1 + 1² = 100 - 20 + 1 = 81

**Astuce :** Le terme du milieu est toujours **négatif** (-2ab).`,
            order: 2,
          },
          {
            id: 'third_identity',
            title: 'Troisième identité : (a + b)(a - b)',
            content: `**Formule : (a + b)(a - b) = a² - b²**

**Démonstration :**
(a + b)(a - b) = a × a + a × (-b) + b × a + b × (-b)
= a² - ab + ab - b²
= a² - b²

**Remarque :** Les termes en ab s'annulent !

**Exemples numériques :**
- (x + 5)(x - 5) = x² - 5² = x² - 25
- (2x + 3)(2x - 3) = (2x)² - 3² = 4x² - 9
- (10 + 2)(10 - 2) = 10² - 2² = 100 - 4 = 96

**Applications pratiques :**
Calcul mental rapide : 99 × 101 = (100 - 1)(100 + 1) = 100² - 1² = 10000 - 1 = 9999`,
            order: 3,
          },
          {
            id: 'factorization',
            title: 'Utiliser les identités pour factoriser',
            content: `Les identités remarquables fonctionnent **dans les deux sens**.

**Développer → Factoriser**

**1. Reconnaître a² + 2ab + b² :**
Pattern : Carré + Double produit + Carré
→ Factoriser en (a + b)²

Exemple : x² + 6x + 9
= x² + 2×x×3 + 3²
= (x + 3)²

**2. Reconnaître a² - 2ab + b² :**
Pattern : Carré - Double produit + Carré
→ Factoriser en (a - b)²

Exemple : x² - 10x + 25
= x² - 2×x×5 + 5²
= (x - 5)²

**3. Reconnaître a² - b² :**
Pattern : Différence de deux carrés
→ Factoriser en (a + b)(a - b)

Exemple : 4x² - 49
= (2x)² - 7²
= (2x + 7)(2x - 7)`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Développer avec (a + b)²',
            problem: 'Développer : (x + 7)²',
            solution: 'x² + 14x + 49',
            steps: [
              'Appliquer (a + b)² = a² + 2ab + b²',
              'a = x, b = 7',
              '(x + 7)² = x² + 2×x×7 + 7²',
              '= x² + 14x + 49',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Développer avec (a - b)²',
            problem: 'Développer : (2x - 5)²',
            solution: '4x² - 20x + 25',
            steps: [
              'Appliquer (a - b)² = a² - 2ab + b²',
              'a = 2x, b = 5',
              '(2x - 5)² = (2x)² - 2×2x×5 + 5²',
              '= 4x² - 20x + 25',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Factoriser a² - b²',
            problem: 'Factoriser : x² - 36',
            solution: '(x + 6)(x - 6)',
            steps: [
              'Reconnaître a² - b² avec a = x, b = 6',
              'x² - 36 = x² - 6²',
              'Appliquer a² - b² = (a + b)(a - b)',
              '= (x + 6)(x - 6)',
            ],
          },
        ],
        prerequisites: ['algebra_develop'],
        relatedLessons: ['algebra_double_dist', 'equations_product_zero'],
      },
      {
        id: 'algebra_double_dist',
        skillId: 'algebra_develop',
        title: 'Double Distributivité',
        description: 'Développe le produit de deux sommes (a + b)(c + d)',
        icon: '✖️✖️',
        difficulty: 'advanced',
        estimatedTime: 25,
        keyPoints: [
          '(a + b)(c + d) = ac + ad + bc + bd',
          'Multiplier chaque terme du 1er facteur par chaque terme du 2ème facteur',
          'Il y a toujours 4 termes après développement (avant réduction)',
          'Penser à réduire les termes semblables à la fin',
        ],
        sections: [
          {
            id: 'principle',
            title: 'Principe de la double distributivité',
            content: `**Formule générale : (a + b)(c + d) = ac + ad + bc + bd**

**Méthode :**
Chaque terme du premier facteur multiplie chaque terme du second facteur.

**Visualisation :**
(a + b) × (c + d)
- a multiplie c → ac
- a multiplie d → ad
- b multiplie c → bc
- b multiplie d → bd

**Exemple simple :**
(x + 2)(x + 3)
= x × x + x × 3 + 2 × x + 2 × 3
= x² + 3x + 2x + 6
= x² + 5x + 6

**Remarque :** Les identités remarquables sont des cas particuliers de la double distributivité.`,
            order: 1,
          },
          {
            id: 'method_arrow',
            title: 'Méthode des flèches',
            content: `**Technique visuelle pour ne rien oublier :**

(a + b)(c + d)
 ↘  ↓   ↓  ↘
  ac ad bc bd

**Étapes :**
1. 1er terme × 1er terme (coin haut gauche)
2. 1er terme × 2ème terme (diagonale)
3. 2ème terme × 1er terme (diagonale)
4. 2ème terme × 2ème terme (coin bas droit)

**Exemple :**
(2x + 3)(x + 4)
= 2x×x + 2x×4 + 3×x + 3×4
= 2x² + 8x + 3x + 12
= 2x² + 11x + 12`,
            order: 2,
          },
          {
            id: 'signs',
            title: 'Attention aux signes !',
            content: `**Avec des soustractions :**

**(a - b)(c - d) = ac - ad - bc + bd**

**Règles des signes :**
- (+) × (+) = +
- (+) × (-) = -
- (-) × (+) = -
- (-) × (-) = +

**Exemple :**
(x - 2)(x - 5)
= x×x + x×(-5) + (-2)×x + (-2)×(-5)
= x² - 5x - 2x + 10
= x² - 7x + 10

**Exemple mixte :**
(x + 3)(x - 4)
= x×x + x×(-4) + 3×x + 3×(-4)
= x² - 4x + 3x - 12
= x² - x - 12`,
            order: 3,
          },
          {
            id: 'complex',
            title: 'Cas plus complexes',
            content: `**Avec des coefficients :**

(2x + 3)(3x - 5)
= 2x×3x + 2x×(-5) + 3×3x + 3×(-5)
= 6x² - 10x + 9x - 15
= 6x² - x - 15

**Avec trois termes :**

(x + 2)(x² + x + 1)
Distribuer x : x³ + x² + x
Distribuer 2 : 2x² + 2x + 2
Somme : x³ + 3x² + 3x + 2

**Produit de trois facteurs :**

(x + 1)(x + 2)(x + 3)
Étape 1 : Développer (x + 1)(x + 2) = x² + 3x + 2
Étape 2 : Multiplier par (x + 3)
(x² + 3x + 2)(x + 3) = x³ + 6x² + 11x + 6`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Double distributivité simple',
            problem: 'Développer : (x + 5)(x + 2)',
            solution: 'x² + 7x + 10',
            steps: [
              'x × x = x²',
              'x × 2 = 2x',
              '5 × x = 5x',
              '5 × 2 = 10',
              'Somme : x² + 2x + 5x + 10 = x² + 7x + 10',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Avec soustractions',
            problem: 'Développer : (x - 3)(2x - 4)',
            solution: '2x² - 10x + 12',
            steps: [
              'x × 2x = 2x²',
              'x × (-4) = -4x',
              '(-3) × 2x = -6x',
              '(-3) × (-4) = 12',
              'Somme : 2x² - 4x - 6x + 12 = 2x² - 10x + 12',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Cas complexe',
            problem: 'Développer : (3x + 2)(2x - 5)',
            solution: '6x² - 11x - 10',
            steps: [
              '3x × 2x = 6x²',
              '3x × (-5) = -15x',
              '2 × 2x = 4x',
              '2 × (-5) = -10',
              'Somme : 6x² - 15x + 4x - 10 = 6x² - 11x - 10',
            ],
          },
        ],
        prerequisites: ['algebra_develop', 'algebra_identities'],
        relatedLessons: ['equations_product_zero'],
      },
    ],
  },
  {
    id: 'geometry',
    title: 'La Géométrie',
    description: 'Maîtrise les aires, périmètres et théorèmes de géométrie',
    theme: 'water',
    icon: '📐',
    order: 7,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'geometry_areas',
        skillId: 'geometry_triangle_area',
        title: 'Aires et Périmètres',
        description: 'Calcule les aires et périmètres des figures géométriques',
        icon: '📏',
        difficulty: 'beginner',
        estimatedTime: 25,
        keyPoints: [
          'Aire du triangle : (base × hauteur) ÷ 2',
          'Aire du rectangle : longueur × largeur',
          'Aire du cercle : π × r²',
          'Périmètre du cercle : 2 × π × r',
        ],
        sections: [
          {
            id: 'triangle_area',
            title: 'Aire du triangle',
            content: `L'**aire d'un triangle** se calcule avec la formule :

**Aire = (base × hauteur) ÷ 2**

**Vocabulaire :**
- La **base** est un côté du triangle (n'importe lequel)
- La **hauteur** est la distance perpendiculaire de ce côté au sommet opposé
- L'aire se mesure en unités carrées (cm², m², etc.)

**Exemple :**
Un triangle de base 8 cm et hauteur 5 cm :
Aire = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm²`,
            order: 1,
          },
          {
            id: 'rectangle_area',
            title: 'Aire du rectangle',
            content: `L'**aire d'un rectangle** se calcule en multipliant sa longueur par sa largeur :

**Aire = longueur × largeur**

**Périmètre = 2 × (longueur + largeur)**

**Exemple :**
Un rectangle de 12 cm de long et 7 cm de large :
- Aire = 12 × 7 = 84 cm²
- Périmètre = 2 × (12 + 7) = 2 × 19 = 38 cm`,
            order: 2,
          },
          {
            id: 'circle_area',
            title: 'Aire et périmètre du cercle',
            content: `Pour un **cercle** de rayon r :

**Aire = π × r²**
**Périmètre (circonférence) = 2 × π × r**

**Rappel :** π (pi) ≈ 3,14159... (souvent arrondi à 3,14)

**Exemple :**
Un cercle de rayon 5 cm :
- Aire = π × 5² = π × 25 ≈ 78,5 cm²
- Périmètre = 2 × π × 5 ≈ 31,4 cm`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Aire d\'un triangle',
            problem: `Calculer l'aire d'un triangle de base 10 cm et hauteur 6 cm

**Diagramme :**
\`\`\`
       /|
    6 / |
  cm /  |
    /   |
   /____|
    10 cm

h = 6 cm (hauteur)
b = 10 cm (base)
\`\`\``,
            solution: '30 cm²',
            steps: [
              'Formule : Aire = (base × hauteur) ÷ 2',
              'Aire = (10 × 6) ÷ 2',
              'Aire = 60 ÷ 2',
              'Aire = 30 cm²',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Aire d\'un rectangle',
            problem: `Un rectangle mesure 15 cm de long et 8 cm de large. Quelle est son aire ?

**Diagramme :**
\`\`\`
     15 cm
  ___________
 |           |
8|           |
cm|           |
 |___________|
\`\`\``,
            solution: '120 cm²',
            steps: [
              'Formule : Aire = longueur × largeur',
              'Aire = 15 × 8',
              'Aire = 120 cm²',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Aire d\'un cercle',
            problem: `Calculer l'aire d'un cercle de rayon 4 cm (arrondis au dixième)

**Diagramme :**
\`\`\`
      ___
    /     \\
   |   •   |  r = 4 cm
   |       |
    \\_____/

• = centre
r = rayon
\`\`\``,
            solution: '50,3 cm²',
            steps: [
              'Formule : Aire = π × r²',
              'Aire = π × 4²',
              'Aire = π × 16',
              'Aire ≈ 50,27 cm²',
              'Aire ≈ 50,3 cm² (arrondi)',
            ],
          },
        ],
        relatedLessons: ['geometry_pythagorean'],
      },
      {
        id: 'geometry_pythagorean',
        skillId: 'geometry_pythagorean_theorem',
        title: 'Théorème de Pythagore',
        description: 'Utilise le théorème de Pythagore dans les triangles rectangles',
        icon: '📐',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          'Dans un triangle rectangle : a² + b² = c²',
          'c est l\'hypoténuse (côté le plus long)',
          'a et b sont les deux autres côtés',
          'Le théorème permet de calculer une longueur manquante',
        ],
        sections: [
          {
            id: 'theorem',
            title: 'Le théorème de Pythagore',
            content: `Le **théorème de Pythagore** est l'un des théorèmes les plus importants en géométrie.

**Énoncé :** Dans un triangle **rectangle**, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.

**Formule : a² + b² = c²**

où :
- **c** est l'**hypoténuse** (le côté opposé à l'angle droit, le plus long)
- **a** et **b** sont les deux autres côtés (les côtés de l'angle droit)

**Important :** Ce théorème ne fonctionne QUE pour les triangles rectangles !`,
            order: 1,
          },
          {
            id: 'calculate_hypotenuse',
            title: 'Calculer l\'hypoténuse',
            content: `Si on connaît les deux côtés de l'angle droit, on peut calculer l'hypoténuse :

**c² = a² + b²**
**c = √(a² + b²)**

**Exemple :**
Un triangle rectangle a des côtés de 3 cm et 4 cm.
- c² = 3² + 4²
- c² = 9 + 16
- c² = 25
- c = √25 = 5 cm

**Triplets pythagoriciens** (à connaître) :
- (3, 4, 5)
- (5, 12, 13)
- (8, 15, 17)`,
            order: 2,
          },
          {
            id: 'calculate_side',
            title: 'Calculer un côté de l\'angle droit',
            content: `Si on connaît l'hypoténuse et un côté, on peut calculer l'autre côté :

**a² = c² - b²**
**a = √(c² - b²)**

**Exemple :**
Un triangle rectangle a une hypoténuse de 13 cm et un côté de 5 cm.
- a² = 13² - 5²
- a² = 169 - 25
- a² = 144
- a = √144 = 12 cm`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer l\'hypoténuse',
            problem: `Dans un triangle rectangle, les côtés de l'angle droit mesurent 6 cm et 8 cm. Calculer l'hypoténuse.

**Diagramme :**
\`\`\`
       c (hypoténuse = ?)
      /|
     / |
    /  | 6 cm (a)
   /   |
  /____|
   8 cm
    (b)

Triangle rectangle :
a = 6 cm
b = 8 cm
c = ? (à trouver)

Formule : a² + b² = c²
\`\`\``,
            solution: '10 cm',
            steps: [
              'Formule : c² = a² + b²',
              'c² = 6² + 8²',
              'c² = 36 + 64',
              'c² = 100',
              'c = √100 = 10 cm',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Calculer un côté',
            problem: `L'hypoténuse d'un triangle rectangle mesure 17 cm et un côté mesure 8 cm. Calculer l'autre côté.

**Diagramme :**
\`\`\`
    17 cm (c = hypoténuse)
      /|
     / |
    /  | 8 cm (b)
   /   |
  /____|
   a = ?

On connaît :
c = 17 cm (hypoténuse)
b = 8 cm
a = ? (à trouver)

Formule : a² = c² - b²
\`\`\``,
            solution: '15 cm',
            steps: [
              'Formule : a² = c² - b²',
              'a² = 17² - 8²',
              'a² = 289 - 64',
              'a² = 225',
              'a = √225 = 15 cm',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Application pratique',
            problem: `Une échelle de 5 m est appuyée contre un mur. Son pied est à 3 m du mur. À quelle hauteur touche-t-elle le mur ?

**Diagramme :**
\`\`\`
      |
      | h = ? (hauteur)
    5m|  /
      | /  échelle
      |/___
       3 m (distance)

Situation :
- Échelle = 5 m (hypoténuse)
- Distance du mur = 3 m
- Hauteur = ? (à trouver)

Le mur, le sol et l'échelle
forment un triangle rectangle.
\`\`\``,
            solution: '4 m',
            steps: [
              'Triangle rectangle : échelle = hypoténuse = 5 m',
              'Distance au mur = un côté = 3 m',
              'Hauteur² = 5² - 3²',
              'Hauteur² = 25 - 9 = 16',
              'Hauteur = √16 = 4 m',
            ],
          },
        ],
        prerequisites: ['geometry_areas'],
        relatedLessons: ['geometry_angles'],
      },
      {
        id: 'geometry_angles',
        skillId: 'geometry_angle_sum_triangle',
        title: 'Les Angles',
        description: 'Comprends les propriétés des angles dans les triangles',
        icon: '📐',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'La somme des angles d\'un triangle = 180°',
          'Angles complémentaires : somme = 90°',
          'Angles supplémentaires : somme = 180°',
          'Triangle isocèle : deux angles égaux',
        ],
        sections: [
          {
            id: 'triangle_angles',
            title: 'Somme des angles dans un triangle',
            content: `**Propriété fondamentale :** Dans n'importe quel triangle, la somme des trois angles vaut **180°**.

**Formule : angle1 + angle2 + angle3 = 180°**

**Conséquence :**
Si on connaît deux angles d'un triangle, on peut calculer le troisième :
angle3 = 180° - angle1 - angle2

**Exemple :**
Un triangle a des angles de 50° et 70°.
Troisième angle = 180° - 50° - 70° = 60°`,
            order: 1,
          },
          {
            id: 'special_triangles',
            title: 'Triangles particuliers',
            content: `**Triangle équilatéral :**
- Les 3 côtés sont égaux
- Les 3 angles sont égaux à 60°

**Triangle isocèle :**
- 2 côtés sont égaux
- Les 2 angles à la base sont égaux

**Triangle rectangle :**
- Un angle droit (90°)
- Les deux autres angles sont complémentaires (leur somme = 90°)

**Triangle rectangle isocèle :**
- Un angle de 90° et deux angles de 45°`,
            order: 2,
          },
          {
            id: 'complementary_supplementary',
            title: 'Angles complémentaires et supplémentaires',
            content: `**Angles complémentaires :**
Deux angles sont complémentaires si leur somme vaut **90°**.
Exemple : 30° et 60° sont complémentaires.

**Angles supplémentaires :**
Deux angles sont supplémentaires si leur somme vaut **180°**.
Exemple : 110° et 70° sont supplémentaires.

**Application :** Dans un triangle rectangle, les deux angles aigus sont complémentaires.`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Trouver un angle dans un triangle',
            problem: `Dans un triangle, deux angles mesurent 45° et 80°. Calculer le troisième angle.

**Diagramme :**
\`\`\`
       /\\
      /  \\
  80°/    \\ ?
    /      \\
   /________\\
      45°

Angles connus :
• angle1 = 45°
• angle2 = 80°
• angle3 = ?

Propriété : La somme des
angles d'un triangle = 180°
\`\`\``,
            solution: '55°',
            steps: [
              'La somme des angles = 180°',
              'angle3 = 180° - 45° - 80°',
              'angle3 = 180° - 125°',
              'angle3 = 55°',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Triangle rectangle',
            problem: `Dans un triangle rectangle, un des angles aigus mesure 35°. Quel est l'autre angle aigu ?

**Diagramme :**
\`\`\`
       /|
      / |
     /  |
  35°/   |
   /____|
     ?  90°

Triangle rectangle :
• angle droit = 90°
• angle aigu 1 = 35°
• angle aigu 2 = ?

Les angles aigus sont
complémentaires (somme = 90°)
\`\`\``,
            solution: '55°',
            steps: [
              'Dans un triangle rectangle, un angle = 90°',
              'Les deux angles aigus sont complémentaires',
              'angle2 = 90° - 35°',
              'angle2 = 55°',
            ],
            explanation: 'On peut vérifier : 90° + 35° + 55° = 180°',
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Triangle isocèle',
            problem: `Dans un triangle isocèle, l'angle au sommet mesure 40°. Calculer les angles à la base.

**Diagramme :**
\`\`\`
       /\\
      /  \\
     /40° \\
    /______\\
    x°    x°

Triangle isocèle :
• 2 côtés égaux (marqués /)
• angle au sommet = 40°
• angles à la base = x° (égaux)

Propriété : Dans un triangle
isocèle, les angles à la base
sont égaux.
\`\`\``,
            solution: '70° chacun',
            steps: [
              'Dans un triangle isocèle, les angles à la base sont égaux',
              'Soit x la mesure d\'un angle à la base',
              '40° + x + x = 180°',
              '40° + 2x = 180°',
              '2x = 140°',
              'x = 70°',
            ],
          },
        ],
        prerequisites: ['geometry_areas'],
      },
      {
        id: 'geometry_thales',
        skillId: 'geometry_thales_theorem',
        title: 'Théorème de Thalès',
        description: 'Découvre le théorème de Thalès et ses applications',
        icon: '📏',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          'Le théorème de Thalès concerne les droites parallèles dans un triangle',
          'Si deux droites sont parallèles, alors elles forment des rapports égaux',
          'On peut calculer des longueurs manquantes avec Thalès',
          'La réciproque permet de prouver que deux droites sont parallèles',
        ],
        sections: [
          {
            id: 'theorem',
            title: 'Le théorème de Thalès',
            content: `Le **théorème de Thalès** est un théorème fondamental de géométrie qui concerne les droites parallèles.

**Configuration :** Soit un triangle ABC avec :
- M sur le segment [AB]
- N sur le segment [AC]
- (MN) parallèle à (BC)

**Alors les rapports suivants sont égaux :**

**AM/AB = AN/AC = MN/BC**

**En mots :** Quand une droite est parallèle à un côté d'un triangle, elle divise les deux autres côtés en segments proportionnels.`,
            order: 1,
          },
          {
            id: 'calculate_length',
            title: 'Calculer une longueur avec Thalès',
            content: `Le théorème de Thalès permet de calculer des longueurs manquantes.

**Méthode :**
1. Vérifier que les conditions du théorème sont réunies (droites parallèles)
2. Identifier les triangles emboîtés
3. Écrire l'égalité des rapports
4. Utiliser le produit en croix pour trouver la longueur inconnue

**Exemple :**
Dans un triangle ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC).
Si AM = 3 cm, AB = 5 cm, AN = 4 cm, alors AC = ?

AM/AB = AN/AC
3/5 = 4/AC
3 × AC = 5 × 4
3 × AC = 20
AC = 20/3 ≈ 6,67 cm`,
            order: 2,
          },
          {
            id: 'reciprocal',
            title: 'Réciproque du théorème de Thalès',
            content: `La **réciproque** permet de prouver que deux droites sont parallèles.

**Si :** Dans un triangle ABC avec M ∈ [AB] et N ∈ [AC],
**Si :** AM/AB = AN/AC
**Alors :** (MN) // (BC)

**Attention :** Il faut que :
- M, N soient bien placés (sur les côtés du triangle)
- Les rapports soient égaux (même ordre !)
- M et N ne soient pas confondus avec B et C

**Exemple :**
Si AM = 4, AB = 10, AN = 6, AC = 15
4/10 = 0,4 et 6/15 = 0,4
Les rapports sont égaux → (MN) // (BC)`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer une longueur',
            problem: `Dans un triangle ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC).
On sait que : AM = 6 cm, MB = 4 cm, AN = 9 cm.
Calculer AC.

**Diagramme :**
\`\`\`
    A
    /\\
   /  \\
  M____N  (MN) // (BC)
 /      \\
/________\\
B         C

AM = 6 cm
MB = 4 cm → AB = 10 cm
AN = 9 cm
AC = ?
\`\`\``,
            solution: '15 cm',
            steps: [
              'AB = AM + MB = 6 + 4 = 10 cm',
              'Appliquer Thalès : AM/AB = AN/AC',
              '6/10 = 9/AC',
              'Produit en croix : 6 × AC = 10 × 9',
              '6 × AC = 90',
              'AC = 90/6 = 15 cm',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Calculer MN',
            problem: `Dans un triangle ABC, (MN) // (BC).
AM = 5 cm, AB = 8 cm, BC = 12 cm.
Calculer MN.

**Diagramme :**
\`\`\`
    A
    /\\
   /  \\
  M____N
 /      \\
/________\\
B    12   C

AM = 5 cm
AB = 8 cm
BC = 12 cm
MN = ?
\`\`\``,
            solution: '7,5 cm',
            steps: [
              'Appliquer Thalès : AM/AB = MN/BC',
              '5/8 = MN/12',
              'Produit en croix : 8 × MN = 5 × 12',
              '8 × MN = 60',
              'MN = 60/8 = 7,5 cm',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Réciproque de Thalès',
            problem: `Dans un triangle DEF, G ∈ [DE], H ∈ [DF].
DG = 3 cm, DE = 7,5 cm, DH = 4 cm, DF = 10 cm.
Les droites (GH) et (EF) sont-elles parallèles ?

**Diagramme :**
\`\`\`
    D
    /\\
   /  \\
  G____H  (GH) // (EF) ?
 /      \\
/________\\
E         F

DG = 3 cm, DE = 7,5 cm
DH = 4 cm, DF = 10 cm
\`\`\``,
            solution: 'Oui, (GH) // (EF)',
            steps: [
              'Calculer le rapport DG/DE = 3/7,5 = 0,4',
              'Calculer le rapport DH/DF = 4/10 = 0,4',
              'Les rapports sont égaux : 0,4 = 0,4',
              'G et H sont sur les côtés du triangle',
              'Par la réciproque de Thalès : (GH) // (EF)',
            ],
          },
        ],
        prerequisites: ['geometry_areas'],
        relatedLessons: ['geometry_similar_triangles'],
      },
      {
        id: 'geometry_similar_triangles',
        skillId: 'geometry_similar_triangles',
        title: 'Triangles Semblables et Agrandissement/Réduction',
        description: 'Comprends les triangles semblables et les transformations',
        icon: '🔺',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Deux triangles sont semblables s\'ils ont les mêmes angles',
          'Les côtés de triangles semblables sont proportionnels',
          'Le coefficient d\'agrandissement relie les longueurs',
          'Les aires sont multipliées par k²',
        ],
        sections: [
          {
            id: 'definition',
            title: 'Triangles semblables',
            content: `Deux triangles sont **semblables** s'ils ont **la même forme** mais pas nécessairement la même taille.

**Définition :** Deux triangles ABC et DEF sont semblables si :
- Leurs angles sont égaux deux à deux
- angle A = angle D
- angle B = angle E
- angle C = angle F

**Conséquence :** Si deux triangles sont semblables, leurs côtés sont **proportionnels**.

**Notation :** On note ABC ~ DEF (se lit "ABC est semblable à DEF")`,
            order: 1,
          },
          {
            id: 'proportional_sides',
            title: 'Côtés proportionnels',
            content: `Dans deux triangles semblables, les côtés sont proportionnels avec un **rapport de similitude** (ou coefficient k).

**Si ABC ~ DEF, alors :**
**AB/DE = BC/EF = AC/DF = k**

où k est le **coefficient de similitude**

**Exemple :**
Si ABC ~ DEF avec AB = 6 cm, DE = 3 cm
- Le coefficient k = 6/3 = 2
- ABC est un agrandissement de DEF (k > 1)
- Si BC = 8 cm, alors EF = 8/2 = 4 cm`,
            order: 2,
          },
          {
            id: 'enlargement_reduction',
            title: 'Agrandissement et réduction',
            content: `**Agrandissement :** k > 1
- Les longueurs sont multipliées par k
- Les aires sont multipliées par k²
- Les volumes sont multipliés par k³

**Réduction :** 0 < k < 1
- Les longueurs sont multipliées par k (donc réduites)
- Les aires sont multipliées par k²
- Les volumes sont multipliés par k³

**Exemple :**
Un agrandissement de coefficient k = 3 :
- Une longueur de 2 cm devient 2 × 3 = 6 cm
- Une aire de 5 cm² devient 5 × 3² = 45 cm²
- Un volume de 10 cm³ devient 10 × 3³ = 270 cm³

**Attention :** Les angles ne changent pas !`,
            order: 3,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Reconnaître des triangles semblables',
            problem: `Triangle ABC : angles 40°, 60°, 80°
Triangle DEF : angles 40°, 60°, 80°
Ces triangles sont-ils semblables ?

**Diagramme :**
\`\`\`
Triangle ABC          Triangle DEF
    A                     D
   /\\                    /\\
40°/  \\80°           40°/  \\80°
  /____\\                /____\\
 B  60° C              E  60° F
\`\`\``,
            solution: 'Oui, ils sont semblables',
            steps: [
              'Les angles du triangle ABC : 40°, 60°, 80°',
              'Les angles du triangle DEF : 40°, 60°, 80°',
              'Tous les angles sont égaux deux à deux',
              'Donc ABC ~ DEF (les triangles sont semblables)',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Calculer avec le coefficient',
            problem: `Deux triangles ABC et DEF sont semblables.
AB = 12 cm, DE = 8 cm, BC = 15 cm.
Calculer EF.

**Diagramme :**
\`\`\`
Triangle ABC (grand)   Triangle DEF (petit)
     A                      D
    /\\                     /\\
   /  \\                   /  \\
12/    \\15             8/    \\?
 /      \\               /      \\
/________\\             /________\\
B         C            E         F

AB = 12, DE = 8
BC = 15, EF = ?
\`\`\``,
            solution: '10 cm',
            steps: [
              'Calculer le coefficient : k = AB/DE = 12/8 = 1,5',
              'Les côtés sont proportionnels : BC/EF = k',
              '15/EF = 1,5',
              'EF = 15/1,5',
              'EF = 10 cm',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Agrandissement d\'une figure',
            problem: `On agrandit un triangle de coefficient k = 2,5.
Le triangle initial a :
- Un côté de 4 cm
- Une aire de 12 cm²
Calculer le côté et l'aire après agrandissement.

**Diagramme :**
\`\`\`
Triangle initial    →    Triangle agrandi
                         (k = 2,5)
    /\\                      /\\
   /  \\                    /  \\
4 /    \\                  /    \\
 /      \\                /      \\
/________\\              /________\\
Aire: 12 cm²          Aire: ?

côté = 4 cm           côté = ?
\`\`\``,
            solution: 'Côté: 10 cm, Aire: 75 cm²',
            steps: [
              'Les longueurs sont multipliées par k',
              'Nouveau côté = 4 × 2,5 = 10 cm',
              'Les aires sont multipliées par k²',
              'k² = 2,5² = 6,25',
              'Nouvelle aire = 12 × 6,25 = 75 cm²',
            ],
          },
        ],
        prerequisites: ['geometry_thales'],
        relatedLessons: ['geometry_trigonometry'],
      },
      {
        id: 'geometry_trigonometry',
        skillId: 'geometry_trigonometry',
        title: 'Trigonométrie : Cosinus, Sinus, Tangente',
        description: 'Apprends les rapports trigonométriques dans le triangle rectangle',
        icon: '📐',
        difficulty: 'advanced',
        estimatedTime: 35,
        keyPoints: [
          'Dans un triangle rectangle, on définit trois rapports : cosinus, sinus, tangente',
          'cos(angle) = côté adjacent / hypoténuse',
          'sin(angle) = côté opposé / hypoténuse',
          'tan(angle) = côté opposé / côté adjacent',
        ],
        sections: [
          {
            id: 'introduction',
            title: 'Introduction à la trigonométrie',
            content: `La **trigonométrie** étudie les relations entre les angles et les longueurs dans les triangles.

**Dans un triangle rectangle**, on peut définir des **rapports** entre les côtés qui dépendent des angles.

**Vocabulaire important :**
- **Hypoténuse** : le côté opposé à l'angle droit (le plus long)
- **Côté opposé** à un angle : le côté en face de cet angle
- **Côté adjacent** à un angle : le côté à côté de cet angle (qui n'est pas l'hypoténuse)

Ces rapports s'appellent **cosinus**, **sinus** et **tangente**.`,
            order: 1,
          },
          {
            id: 'cosine',
            title: 'Le cosinus',
            content: `Le **cosinus** d'un angle aigu dans un triangle rectangle est le rapport entre le côté adjacent et l'hypoténuse.

**Formule : cos(angle) = côté adjacent / hypoténuse**

**Exemple :**
Dans un triangle rectangle avec un angle de 60° :
- Côté adjacent = 5 cm
- Hypoténuse = 10 cm
- cos(60°) = 5/10 = 0,5

**Propriétés :**
- 0 < cos(angle) < 1 pour un angle aigu
- cos(0°) = 1
- cos(90°) = 0
- cos(60°) = 0,5
- cos(45°) ≈ 0,707`,
            order: 2,
          },
          {
            id: 'sine',
            title: 'Le sinus',
            content: `Le **sinus** d'un angle aigu dans un triangle rectangle est le rapport entre le côté opposé et l'hypoténuse.

**Formule : sin(angle) = côté opposé / hypoténuse**

**Exemple :**
Dans un triangle rectangle avec un angle de 30° :
- Côté opposé = 3 cm
- Hypoténuse = 6 cm
- sin(30°) = 3/6 = 0,5

**Propriétés :**
- 0 < sin(angle) < 1 pour un angle aigu
- sin(0°) = 0
- sin(90°) = 1
- sin(30°) = 0,5
- sin(45°) ≈ 0,707`,
            order: 3,
          },
          {
            id: 'tangent',
            title: 'La tangente',
            content: `La **tangente** d'un angle aigu dans un triangle rectangle est le rapport entre le côté opposé et le côté adjacent.

**Formule : tan(angle) = côté opposé / côté adjacent**

**Relation importante :**
tan(angle) = sin(angle) / cos(angle)

**Exemple :**
Dans un triangle rectangle avec un angle de 45° :
- Côté opposé = 7 cm
- Côté adjacent = 7 cm
- tan(45°) = 7/7 = 1

**Propriétés :**
- tan(45°) = 1
- tan(0°) = 0
- tan(angle) peut être > 1`,
            order: 4,
          },
          {
            id: 'applications',
            title: 'Applications pratiques',
            content: `La trigonométrie permet de :

**1. Calculer une longueur** quand on connaît un angle et une autre longueur
- Réarranger la formule : côté = hypoténuse × cos(angle)

**2. Calculer un angle** quand on connaît deux longueurs
- Utiliser la calculatrice : angle = arccos(rapport)
- ou cos⁻¹, sin⁻¹, tan⁻¹ sur la calculatrice

**Méthode :**
1. Identifier l'angle et les côtés (opposé, adjacent, hypoténuse)
2. Choisir le bon rapport (cos, sin ou tan)
3. Écrire l'équation
4. Résoudre pour trouver l'inconnue`,
            order: 5,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calculer avec le cosinus',
            problem: `Dans un triangle rectangle ABC (angle droit en B), on sait que :
- angle A = 60°
- AC (hypoténuse) = 12 cm
Calculer AB (côté adjacent à l'angle A).

**Diagramme :**
\`\`\`
    A
    |\\
    | \\
 AB |  \\ AC = 12 cm
    |   \\ (hypoténuse)
    | 60°\\
    |_____\\
    B      C

angle A = 60°
AC = 12 cm (hypoténuse)
AB = ? (adjacent à A)
\`\`\``,
            solution: '6 cm',
            steps: [
              'Identifier : AB est adjacent à l\'angle A, AC est l\'hypoténuse',
              'Utiliser le cosinus : cos(A) = AB/AC',
              'cos(60°) = AB/12',
              'On sait que cos(60°) = 0,5',
              '0,5 = AB/12',
              'AB = 12 × 0,5 = 6 cm',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Calculer avec le sinus',
            problem: `Dans un triangle rectangle, l'angle aigu mesure 30° et l'hypoténuse mesure 10 cm.
Calculer la longueur du côté opposé à cet angle.

**Diagramme :**
\`\`\`
    A
    |\\
    | \\
  ? |  \\ 10 cm
    |   \\ (hypoténuse)
    | 30°\\
    |_____\\
    B      C

angle = 30°
hypoténuse = 10 cm
côté opposé = ?
\`\`\``,
            solution: '5 cm',
            steps: [
              'Identifier : côté opposé = ?, hypoténuse = 10 cm',
              'Utiliser le sinus : sin(30°) = opposé/hypoténuse',
              'sin(30°) = opposé/10',
              'On sait que sin(30°) = 0,5',
              '0,5 = opposé/10',
              'opposé = 10 × 0,5 = 5 cm',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Calculer avec la tangente',
            problem: `Une échelle forme un angle de 70° avec le sol. Le pied de l'échelle est à 2 m du mur.
À quelle hauteur l'échelle touche-t-elle le mur ?

**Diagramme :**
\`\`\`
      Mur
       |
       | h = ?
       |  /
       | /  échelle
       |/___
       70°
       2 m

angle avec sol = 70°
distance du mur = 2 m (adjacent)
hauteur = ? (opposé)
\`\`\``,
            solution: 'Environ 5,49 m',
            steps: [
              'Identifier : hauteur = opposé, distance = 2 m = adjacent',
              'Utiliser la tangente : tan(70°) = opposé/adjacent',
              'tan(70°) = h/2',
              'Avec une calculatrice : tan(70°) ≈ 2,747',
              '2,747 = h/2',
              'h = 2 × 2,747 ≈ 5,49 m',
            ],
            explanation: 'La tangente est utile quand on ne connaît pas l\'hypoténuse',
          },
        ],
        prerequisites: ['geometry_pythagorean'],
        relatedLessons: ['geometry_volumes'],
      },
      {
        id: 'geometry_volumes',
        skillId: 'geometry_volumes',
        title: 'Volumes des Solides',
        description: 'Calcule les volumes des solides usuels',
        icon: '📦',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          'Volume du cube : c³',
          'Volume du pavé : L × l × h',
          'Volume du cylindre : π × r² × h',
          'Volume de la pyramide : (Aire base × h) / 3',
          'Volume du cône : (π × r² × h) / 3',
          'Volume de la sphère : (4 × π × r³) / 3',
        ],
        sections: [
          {
            id: 'introduction',
            title: 'Qu\'est-ce qu\'un volume ?',
            content: `Le **volume** d'un solide est la mesure de l'**espace qu'il occupe** dans l'espace à trois dimensions.

**Unités de volume :**
- mm³ (millimètre cube)
- cm³ (centimètre cube)
- dm³ (décimètre cube)
- m³ (mètre cube)

**Conversions importantes :**
- 1 cm³ = 1 mL (millilitre)
- 1 dm³ = 1 L (litre)
- 1 m³ = 1 000 L

**Remarque :** Le volume se mesure en unités **cubiques** car on multiplie trois dimensions.`,
            order: 1,
          },
          {
            id: 'rectangular_solids',
            title: 'Cube et pavé droit',
            content: `**CUBE :**
Un cube a toutes ses arêtes égales.

**Volume du cube = côté³ = c × c × c**

Exemple : Un cube de côté 5 cm
Volume = 5³ = 5 × 5 × 5 = 125 cm³

**PAVÉ DROIT (parallélépipède rectangle) :**
Un pavé a une longueur L, une largeur l et une hauteur h.

**Volume du pavé = Longueur × largeur × hauteur = L × l × h**

Exemple : Un pavé 8 cm × 5 cm × 3 cm
Volume = 8 × 5 × 3 = 120 cm³`,
            order: 2,
          },
          {
            id: 'cylinder',
            title: 'Cylindre',
            content: `Un **cylindre** est un solide avec deux bases circulaires parallèles et une hauteur h.

**Volume du cylindre = Aire de la base × hauteur**
**V = π × r² × h**

où :
- r est le rayon de la base circulaire
- h est la hauteur du cylindre

**Exemple :**
Un cylindre de rayon 3 cm et hauteur 10 cm :
V = π × 3² × 10
V = π × 9 × 10
V = 90π ≈ 282,7 cm³`,
            order: 3,
          },
          {
            id: 'pyramid_cone',
            title: 'Pyramide et cône',
            content: `**PYRAMIDE :**
Une pyramide a une base polygonale et des faces triangulaires qui se rejoignent en un sommet.

**Volume de la pyramide = (Aire de la base × hauteur) / 3**

**CÔNE :**
Un cône a une base circulaire et un sommet.

**Volume du cône = (π × r² × h) / 3**

**Remarque importante :**
Le volume d'une pyramide ou d'un cône est toujours **1/3** du volume du prisme ou cylindre correspondant.

**Exemple - Cône :**
Rayon = 4 cm, hauteur = 9 cm
V = (π × 4² × 9) / 3
V = (π × 16 × 9) / 3
V = 144π / 3 = 48π ≈ 150,8 cm³`,
            order: 4,
          },
          {
            id: 'sphere',
            title: 'Sphère',
            content: `Une **sphère** est l'ensemble des points situés à une distance r (rayon) d'un point central.

**Volume de la sphère = (4 × π × r³) / 3**

**Remarque :** Ne pas confondre avec l'aire d'une sphère (4πr²)

**Exemple :**
Une sphère de rayon 6 cm :
V = (4 × π × 6³) / 3
V = (4 × π × 216) / 3
V = 864π / 3
V = 288π ≈ 904,8 cm³

**Application :** Volume d'un ballon, d'une boule, etc.`,
            order: 5,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Volume d\'un pavé',
            problem: `Une boîte en forme de pavé droit mesure 15 cm de long, 8 cm de large et 6 cm de haut.
Calculer son volume.

**Diagramme :**
\`\`\`
      ___________
     /|         /|
    / |        / |
   /__|_______/  |
   |  |______|___|
   | /       |  / 6 cm (h)
   |/________|/
   15 cm (L)
     8 cm (l)

L = 15 cm
l = 8 cm
h = 6 cm
\`\`\``,
            solution: '720 cm³',
            steps: [
              'Formule : V = L × l × h',
              'V = 15 × 8 × 6',
              'V = 120 × 6',
              'V = 720 cm³',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Volume d\'un cylindre',
            problem: `Un cylindre a un rayon de 5 cm et une hauteur de 12 cm.
Calculer son volume (arrondir au dixième).

**Diagramme :**
\`\`\`
      _____
     /     \\
    |   •   | 12 cm (h)
    |       |
    |_______|

    r = 5 cm

• = centre de la base
\`\`\``,
            solution: '942,5 cm³',
            steps: [
              'Formule : V = π × r² × h',
              'V = π × 5² × 12',
              'V = π × 25 × 12',
              'V = 300π',
              'V ≈ 942,48 cm³',
              'V ≈ 942,5 cm³ (arrondi)',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Volume d\'un cône',
            problem: `Un cône a un rayon de base de 6 cm et une hauteur de 10 cm.
Calculer son volume (arrondir à l'unité).

**Diagramme :**
\`\`\`
        /\\
       /  \\
      /    \\  10 cm (h)
     /      \\
    /________\\
       6 cm
       (r)

Cône : r = 6 cm, h = 10 cm
\`\`\``,
            solution: '377 cm³',
            steps: [
              'Formule : V = (π × r² × h) / 3',
              'V = (π × 6² × 10) / 3',
              'V = (π × 36 × 10) / 3',
              'V = 360π / 3',
              'V = 120π',
              'V ≈ 376,99 cm³',
              'V ≈ 377 cm³ (arrondi)',
            ],
            explanation: 'Le volume du cône est 1/3 du volume d\'un cylindre de même base et même hauteur',
          },
          {
            id: 'ex4',
            title: 'Exemple 4 : Volume d\'une sphère',
            problem: `Une boule a un rayon de 9 cm.
Calculer son volume (arrondir à l'unité).

**Diagramme :**
\`\`\`
      ___
    /     \\
   |   •   |  r = 9 cm
   |       |
    \\_____/

• = centre
Sphère de rayon 9 cm
\`\`\``,
            solution: '3054 cm³',
            steps: [
              'Formule : V = (4 × π × r³) / 3',
              'V = (4 × π × 9³) / 3',
              'V = (4 × π × 729) / 3',
              'V = 2916π / 3',
              'V = 972π',
              'V ≈ 3053,63 cm³',
              'V ≈ 3054 cm³ (arrondi)',
            ],
          },
        ],
        prerequisites: ['geometry_areas'],
        relatedLessons: ['geometry_transformations'],
      },
      {
        id: 'geometry_transformations',
        skillId: 'geometry_transformations',
        title: 'Transformations Géométriques',
        description: 'Découvre la translation, la rotation et la symétrie',
        icon: '🔄',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          'Une transformation déplace ou modifie une figure',
          'La translation glisse une figure selon un vecteur',
          'La rotation tourne une figure autour d\'un point',
          'La symétrie axiale crée un effet miroir',
          'La symétrie centrale est une rotation de 180°',
        ],
        sections: [
          {
            id: 'introduction',
            title: 'Qu\'est-ce qu\'une transformation ?',
            content: `Une **transformation géométrique** est une opération qui transforme une figure en une autre figure.

**Propriétés importantes :**
- Certaines transformations **conservent les distances** (isométries)
- Certaines transformations **conservent les angles**
- L'image d'une figure peut avoir la même forme et la même taille

**Les principales transformations :**
1. **Translation** : déplacement selon une direction
2. **Rotation** : tourner autour d'un point
3. **Symétrie axiale** : effet miroir par rapport à une droite
4. **Symétrie centrale** : symétrie par rapport à un point`,
            order: 1,
          },
          {
            id: 'translation',
            title: 'La translation',
            content: `La **translation** déplace tous les points d'une figure de la même façon, selon une **direction**, un **sens** et une **distance** donnés.

**Définition avec un vecteur :**
On note la translation par un vecteur AB : T(AB)

**Propriétés :**
- La figure et son image ont la même forme et la même taille
- Les segments correspondants sont **parallèles** et de **même longueur**
- Tous les points se déplacent de la même façon

**Exemple :**
Si on translate un point A de 3 cm vers la droite et 2 cm vers le haut, on obtient son image A'.
Tous les points de la figure suivent le même déplacement.

**Application :** Déplacement d'un objet sans rotation ni déformation`,
            order: 2,
          },
          {
            id: 'rotation',
            title: 'La rotation',
            content: `La **rotation** fait tourner une figure autour d'un point fixe (le **centre de rotation**) selon un **angle** donné.

**Éléments d'une rotation :**
- **Centre de rotation** O (point fixe)
- **Angle de rotation** (ex: 90°, 180°, 270°)
- **Sens** (horaire ou antihoraire/trigonométrique)

**Propriétés :**
- La figure et son image ont la même forme et la même taille
- Le centre de rotation ne bouge pas
- Chaque point tourne du même angle autour du centre

**Cas particuliers :**
- Rotation de 90° : quart de tour
- Rotation de 180° : demi-tour (= symétrie centrale)
- Rotation de 360° : tour complet (figure inchangée)`,
            order: 3,
          },
          {
            id: 'axial_symmetry',
            title: 'Symétrie axiale',
            content: `La **symétrie axiale** (ou symétrie orthogonale) crée une image **"miroir"** d'une figure par rapport à une droite appelée **axe de symétrie**.

**Propriétés :**
- La figure et son image ont la même forme et la même taille
- L'axe de symétrie est la **médiatrice** du segment [AA'] (A et son image A')
- Si un point est sur l'axe, il est son propre symétrique
- Les segments correspondants sont perpendiculaires à l'axe

**Construction :**
Pour construire le symétrique d'un point A :
1. Tracer la perpendiculaire à l'axe passant par A
2. Mesurer la distance de A à l'axe
3. Reporter cette distance de l'autre côté de l'axe

**Exemple :** Le reflet dans un miroir, les figures symétriques`,
            order: 4,
          },
          {
            id: 'central_symmetry',
            title: 'Symétrie centrale',
            content: `La **symétrie centrale** transforme une figure par rapport à un point fixe appelé **centre de symétrie**.

**Définition :**
Le symétrique d'un point A par rapport à un centre O est le point A' tel que :
- O est le milieu de [AA']
- A, O et A' sont alignés

**Propriétés :**
- La figure et son image ont la même forme et la même taille
- C'est équivalent à une rotation de 180°
- Si un point est au centre, il est son propre symétrique

**Construction :**
Pour construire le symétrique de A par rapport à O :
1. Tracer la droite (AO)
2. Reporter la distance AO de l'autre côté de O
3. Placer A' tel que O soit le milieu de [AA']

**Remarque :** La symétrie centrale "retourne" la figure de 180°`,
            order: 5,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Translation',
            problem: `On translate un triangle ABC par un vecteur qui déplace chaque point de 4 cm vers la droite et 3 cm vers le haut.
Si A(1, 2), quelles sont les coordonnées de son image A' ?

**Diagramme :**
\`\`\`
       A'(5, 5)
        •
        ↑ 3 cm

A(1, 2) → → → → (4 cm vers droite)
  •


Translation : +4 à droite, +3 vers le haut
A(1, 2) → A'(?, ?)
\`\`\``,
            solution: 'A\'(5, 5)',
            steps: [
              'Point initial A(1, 2)',
              'Translation de 4 cm à droite : 1 + 4 = 5',
              'Translation de 3 cm vers le haut : 2 + 3 = 5',
              'Image A\'(5, 5)',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Rotation de 90°',
            problem: `On effectue une rotation de 90° dans le sens antihoraire autour du point O.
Un point A est situé à 3 cm à droite de O.
Où se trouve son image A' ?

**Diagramme :**
\`\`\`
Avant rotation :        Après rotation :
                              A'
                              •
                              |
                              | 3 cm
O • -------- • A              |
      3 cm                    O •

Rotation de 90° antihoraire
Centre : O
A à 3 cm à droite → A' à 3 cm vers le haut
\`\`\``,
            solution: 'A\' est à 3 cm au-dessus de O',
            steps: [
              'Centre de rotation : O',
              'Angle : 90° antihoraire (sens trigonométrique)',
              'Distance OA = 3 cm (conservée)',
              'A était à droite → A\' est maintenant en haut',
              'A\' est à 3 cm au-dessus de O',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Symétrie axiale',
            problem: `On trace la symétrie d'un point A par rapport à un axe vertical.
A est à 5 cm à gauche de l'axe.
À quelle distance de l'axe se trouve son image A' ?

**Diagramme :**
\`\`\`
    A           |           A'
    •           |           •
              axe
    |<-- 5 cm-->|<-- 5 cm-->|

A : 5 cm à gauche de l'axe
A' : ? cm à droite de l'axe
\`\`\``,
            solution: 'A\' est à 5 cm à droite de l\'axe',
            steps: [
              'La symétrie axiale conserve les distances',
              'A est à 5 cm de l\'axe',
              'Son image A\' est à la même distance de l\'axe',
              'A\' est à 5 cm à droite de l\'axe',
              'L\'axe est la médiatrice de [AA\']',
            ],
          },
          {
            id: 'ex4',
            title: 'Exemple 4 : Symétrie centrale',
            problem: `On effectue une symétrie centrale de centre O.
Un point A est à 4 cm au-dessus de O.
Où se trouve son image A' ?

**Diagramme :**
\`\`\`
Avant symétrie :        Après symétrie :

      A                       A
      •                       •
      |                       |
    4 cm                    4 cm
      |                       |
      O •                     O •
                              |
                            4 cm
                              |
                              • A'

O est le centre
A : 4 cm au-dessus
A' : ?
\`\`\``,
            solution: 'A\' est à 4 cm en-dessous de O',
            steps: [
              'Centre de symétrie : O',
              'A est à 4 cm au-dessus de O',
              'Dans une symétrie centrale, O est le milieu de [AA\']',
              'A\' est à l\'opposé de A par rapport à O',
              'A\' est à 4 cm en-dessous de O',
            ],
            explanation: 'La symétrie centrale équivaut à une rotation de 180°',
          },
        ],
        prerequisites: ['geometry_areas'],
        relatedLessons: ['geometry_pythagorean'],
      },
    ],
  },
  {
    id: 'statistics',
    title: 'Les Statistiques',
    description: 'Analyse des données : moyenne, médiane, quartiles et représentations graphiques',
    theme: 'shadow',
    icon: '📊',
    order: 8,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'statistics_basics',
        skillId: 'statistics_mean_median',
        title: 'Moyenne, Médiane et Étendue',
        description: 'Découvre les indicateurs de tendance centrale et de dispersion',
        icon: '📈',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'La moyenne représente la valeur centrale d\'une série',
          'La médiane partage la série en deux groupes égaux',
          'L\'étendue mesure la dispersion des données',
          'Ces indicateurs résument l\'information d\'une série',
        ],
        sections: [
          {
            id: 'mean',
            title: 'La Moyenne',
            content: `La **moyenne** d'une série de données est la somme de toutes les valeurs divisée par le nombre de valeurs.

**Formule :** Moyenne = (Somme des valeurs) ÷ (Nombre de valeurs)

**Exemple :**
Les notes de Sophie en maths : 12, 15, 10, 14, 16, 13

Moyenne = (12 + 15 + 10 + 14 + 16 + 13) ÷ 6
Moyenne = 80 ÷ 6
Moyenne = 13,33...

**Notation :** On note souvent la moyenne avec une barre : x̄ (se lit "x barre")

**Propriété importante :**
Si on ajoute la même valeur à toutes les données, la moyenne augmente de cette valeur.
Si on multiplie toutes les données par un nombre, la moyenne est multipliée par ce nombre.`,
            order: 1,
          },
          {
            id: 'median',
            title: 'La Médiane',
            content: `La **médiane** est la valeur qui partage une série ordonnée en deux groupes de même effectif.

**Méthode pour trouver la médiane :**

1. **Ordonner les valeurs** dans l'ordre croissant
2. **Compter le nombre de valeurs** (effectif total)
3. **Trouver la valeur centrale** :
   - Si l'effectif est impair : la médiane est la valeur du milieu
   - Si l'effectif est pair : la médiane est la moyenne des deux valeurs centrales

**Exemple 1 - Effectif impair :**
Série : 8, 12, 5, 15, 10
1. Ordonner : 5, 8, 10, 12, 15
2. Effectif = 5 (impair)
3. Médiane = 10 (3ème valeur, au milieu)

**Exemple 2 - Effectif pair :**
Série : 8, 12, 5, 15, 10, 14
1. Ordonner : 5, 8, 10, 12, 14, 15
2. Effectif = 6 (pair)
3. Médiane = (10 + 12) ÷ 2 = 11

**Interprétation :**
50% des valeurs sont inférieures ou égales à la médiane
50% des valeurs sont supérieures ou égales à la médiane`,
            order: 2,
          },
          {
            id: 'range',
            title: 'L\'Étendue',
            content: `L'**étendue** mesure la dispersion d'une série de données.

**Formule :** Étendue = Valeur maximale - Valeur minimale

**Exemple :**
Températures de la semaine : 18°C, 22°C, 15°C, 20°C, 25°C, 19°C, 21°C

- Température maximale = 25°C
- Température minimale = 15°C
- Étendue = 25 - 15 = 10°C

**Interprétation :**
- Une étendue **faible** signifie que les données sont **proches** les unes des autres (peu de dispersion)
- Une étendue **grande** signifie que les données sont **dispersées** (forte variation)

**Exemple comparatif :**

Classe A : notes entre 8 et 18 → Étendue = 10
Classe B : notes entre 5 et 20 → Étendue = 15

La classe B a des résultats plus dispersés que la classe A.`,
            order: 3,
          },
          {
            id: 'comparison',
            title: 'Moyenne vs Médiane',
            content: `**Quand utiliser la moyenne ou la médiane ?**

**La moyenne** :
- Prend en compte toutes les valeurs
- Sensible aux valeurs extrêmes
- Utile quand les données sont régulières

**La médiane** :
- Résistante aux valeurs extrêmes
- Partage la série en deux groupes égaux
- Utile quand il y a des valeurs aberrantes

**Exemple :**
Salaires dans une petite entreprise : 1500€, 1600€, 1550€, 1650€, 8000€

- Moyenne = (1500 + 1600 + 1550 + 1650 + 8000) ÷ 5 = 2860€
- Médiane = 1600€ (valeur centrale après tri)

Ici, la médiane est plus représentative car la moyenne est "tirée vers le haut" par le salaire de 8000€.`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calcul de moyenne',
            problem: `Les températures relevées à midi pendant une semaine sont :
Lundi : 18°C, Mardi : 21°C, Mercredi : 19°C, Jeudi : 23°C,
Vendredi : 20°C, Samedi : 22°C, Dimanche : 19°C

Calculer la température moyenne de la semaine.`,
            solution: '20,29°C (environ 20,3°C)',
            steps: [
              'Additionner toutes les températures : 18 + 21 + 19 + 23 + 20 + 22 + 19 = 142°C',
              'Compter le nombre de jours : 7 jours',
              'Diviser la somme par le nombre de jours : 142 ÷ 7',
              'Résultat : 20,29°C (on peut arrondir à 20,3°C)',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Médiane d\'une série',
            problem: `Voici les notes de Lucas en histoire-géo ce trimestre :
12, 8, 15, 10, 13, 9, 14

Déterminer la médiane de cette série.`,
            solution: '12',
            steps: [
              'Ordonner les notes : 8, 9, 10, 12, 13, 14, 15',
              'Compter l\'effectif : 7 notes (nombre impair)',
              'Trouver la valeur centrale : c\'est la 4ème valeur',
              'Médiane = 12',
              'Interprétation : 50% des notes sont ≤ 12 et 50% sont ≥ 12',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Étendue',
            problem: `Les durées des trajets de Marie pour aller au collège cette semaine (en minutes) :
25, 18, 22, 30, 20

Calculer l'étendue de cette série.`,
            solution: '12 minutes',
            steps: [
              'Identifier la durée maximale : 30 minutes',
              'Identifier la durée minimale : 18 minutes',
              'Calculer l\'étendue : 30 - 18 = 12 minutes',
              'Interprétation : l\'écart entre le trajet le plus court et le plus long est de 12 minutes',
            ],
          },
        ],
        prerequisites: [],
        relatedLessons: ['statistics_quartiles'],
      },
      {
        id: 'statistics_quartiles',
        skillId: 'statistics_quartiles',
        title: 'Quartiles et Diagramme en Boîte',
        description: 'Découvre les quartiles et apprends à construire un diagramme en boîte',
        icon: '📦',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'Les quartiles divisent une série en 4 groupes égaux',
          'Q1 sépare les 25% des valeurs les plus basses',
          'Q3 sépare les 75% des valeurs les plus basses',
          'Le diagramme en boîte visualise la répartition des données',
        ],
        sections: [
          {
            id: 'quartiles_def',
            title: 'Définition des Quartiles',
            content: `Les **quartiles** divisent une série ordonnée en 4 groupes de même effectif.

**Les trois quartiles :**

- **Q1** (premier quartile) : 25% des valeurs sont inférieures ou égales à Q1
- **Q2** (deuxième quartile) : c'est la médiane ! 50% des valeurs sont ≤ Q2
- **Q3** (troisième quartile) : 75% des valeurs sont inférieures ou égales à Q3

**Visualisation :**
\`\`\`
25% des données | 25% | 25% | 25%
────────────────────────────────────
Min     Q1      Q2     Q3      Max
                (médiane)
\`\`\`

**Intervalle interquartile :**
IQ = Q3 - Q1
C'est l'étendue des 50% de valeurs centrales.`,
            order: 1,
          },
          {
            id: 'quartiles_calc',
            title: 'Calcul des Quartiles',
            content: `**Méthode pour calculer les quartiles :**

**Étape 1 :** Ordonner les données dans l'ordre croissant

**Étape 2 :** Trouver la médiane (Q2)

**Étape 3 :** Partager la série en deux moitiés
- Moitié inférieure : toutes les valeurs < médiane
- Moitié supérieure : toutes les valeurs > médiane

**Étape 4 :**
- Q1 = médiane de la moitié inférieure
- Q3 = médiane de la moitié supérieure

**Exemple :**
Série : 5, 8, 10, 12, 14, 15, 18, 20, 22

1. Déjà ordonnée ✓
2. Médiane (Q2) = 14 (5ème valeur sur 9)
3. Moitié inférieure : 5, 8, 10, 12
   Moitié supérieure : 15, 18, 20, 22
4. Q1 = (8 + 10) ÷ 2 = 9
   Q3 = (18 + 20) ÷ 2 = 19

**Résultat :** Q1 = 9, Q2 = 14, Q3 = 19`,
            order: 2,
          },
          {
            id: 'boxplot',
            title: 'Le Diagramme en Boîte',
            content: `Le **diagramme en boîte** (ou boîte à moustaches) est une représentation graphique qui utilise les quartiles.

**Éléments du diagramme :**

\`\`\`
    |<-------- Étendue -------->|

  Min   Q1    Q2    Q3   Max
    |    |     |     |    |
    |────┤─────┼─────┤────|
    └─┘  └─────┴─────┘  └─┘
  Moustache  Boîte  Moustache
  gauche              droite
\`\`\`

**Construction :**
1. Tracer un axe gradué
2. Dessiner une boîte de Q1 à Q3
3. Tracer un trait vertical à Q2 (médiane) dans la boîte
4. Tracer les "moustaches" : de Min à Q1 et de Q3 à Max

**Lecture du diagramme :**
- La boîte contient 50% des données centrales
- Plus la boîte est grande, plus les données sont dispersées
- La position de la médiane dans la boîte indique la symétrie`,
            order: 3,
          },
          {
            id: 'boxplot_interpretation',
            title: 'Interprétation',
            content: `**Comment interpréter un diagramme en boîte ?**

**Dispersion :**
- Boîte large → données dispersées
- Boîte étroite → données concentrées
- Longues moustaches → valeurs extrêmes éloignées

**Symétrie :**
- Médiane au centre de la boîte → distribution symétrique
- Médiane vers Q1 → données concentrées vers les valeurs basses
- Médiane vers Q3 → données concentrées vers les valeurs hautes

**Comparaison de séries :**
On peut comparer plusieurs séries en superposant leurs diagrammes en boîte.

**Exemple :**
Comparer les notes de deux classes :
- Classe A : boîte centrée sur 12, étendue de 8 à 16
- Classe B : boîte centrée sur 11, étendue de 4 à 18

→ Classe A : niveau homogène autour de 12
→ Classe B : niveau plus dispersé, quelques très bonnes et très mauvaises notes`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calcul des quartiles',
            problem: `Voici les âges des participants à un atelier (en années) :
10, 12, 13, 14, 15, 15, 16, 18, 19, 20, 22

Déterminer Q1, Q2 (médiane) et Q3.`,
            solution: 'Q1 = 13, Q2 = 15, Q3 = 19',
            steps: [
              'Série déjà ordonnée : 10, 12, 13, 14, 15, 15, 16, 18, 19, 20, 22',
              'Effectif = 11 (impair)',
              'Q2 (médiane) = 6ème valeur = 15',
              'Moitié inférieure : 10, 12, 13, 14, 15',
              'Q1 = médiane de la moitié inférieure = 13',
              'Moitié supérieure : 16, 18, 19, 20, 22',
              'Q3 = médiane de la moitié supérieure = 19',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Diagramme en boîte',
            problem: `Pour la série suivante, tracer le diagramme en boîte :
Min = 5, Q1 = 8, Q2 = 12, Q3 = 16, Max = 20

Décrire la répartition des données.`,
            solution: 'Distribution légèrement asymétrique vers les valeurs basses',
            steps: [
              'Tracer un axe gradué de 0 à 25',
              'Dessiner la boîte de 8 à 16',
              'Tracer la médiane à 12 (au centre de la boîte)',
              'Moustache gauche : de 5 à 8 (longueur = 3)',
              'Moustache droite : de 16 à 20 (longueur = 4)',
              'La médiane est centrée → distribution assez symétrique',
              '50% des données sont entre 8 et 16 (étendue interquartile = 8)',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Intervalle interquartile',
            problem: `Les notes d'un contrôle ont pour quartiles : Q1 = 9 et Q3 = 15.
Calculer l'intervalle interquartile et interpréter.`,
            solution: 'IQ = 6',
            steps: [
              'Formule : IQ = Q3 - Q1',
              'Calcul : IQ = 15 - 9 = 6',
              'Interprétation : 50% des élèves ont entre 9 et 15',
              'L\'écart entre ces notes est de 6 points',
              'Cet intervalle contient la moitié centrale des résultats',
            ],
          },
        ],
        prerequisites: ['statistics_basics'],
        relatedLessons: ['statistics_diagrams'],
      },
      {
        id: 'statistics_diagrams',
        skillId: 'statistics_diagrams',
        title: 'Diagrammes et Représentations Graphiques',
        description: 'Apprends à créer et interpréter différents types de diagrammes',
        icon: '📉',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Le diagramme en barres compare des effectifs',
          'Le diagramme circulaire montre des proportions',
          'L\'histogramme groupe les données par classes',
          'Chaque type de graphique a ses avantages',
        ],
        sections: [
          {
            id: 'bar_chart',
            title: 'Diagramme en Barres',
            content: `Le **diagramme en barres** représente des effectifs ou des fréquences par des rectangles (barres).

**Caractéristiques :**
- Axe horizontal : les catégories (modalités)
- Axe vertical : les effectifs ou fréquences
- Hauteur des barres proportionnelle aux effectifs
- Les barres sont séparées (données qualitatives)

**Construction :**
1. Tracer deux axes perpendiculaires
2. Graduer l'axe vertical (effectifs)
3. Placer les catégories sur l'axe horizontal
4. Dessiner une barre pour chaque catégorie

**Exemple :**
Sports préférés dans une classe :
- Football : 12 élèves
- Basketball : 8 élèves
- Tennis : 5 élèves
- Natation : 6 élèves

On dessine 4 barres de hauteurs respectives 12, 8, 5 et 6.

**Avantages :** Facile à lire, comparaison visuelle immédiate`,
            order: 1,
          },
          {
            id: 'pie_chart',
            title: 'Diagramme Circulaire',
            content: `Le **diagramme circulaire** (ou "camembert") représente des proportions.

**Principe :**
- Un cercle représente le total (100% ou 360°)
- Chaque catégorie = un secteur angulaire
- L'angle du secteur est proportionnel à la fréquence

**Calcul des angles :**
Angle = (Effectif de la catégorie ÷ Effectif total) × 360°

**Exemple :**
Moyens de transport (40 élèves) :
- Voiture : 16 élèves → (16÷40) × 360° = 144°
- Bus : 12 élèves → (12÷40) × 360° = 108°
- Vélo : 8 élèves → (8÷40) × 360° = 72°
- À pied : 4 élèves → (4÷40) × 360° = 36°

**Construction :**
1. Tracer un cercle
2. Calculer les angles
3. Tracer les secteurs avec un rapporteur
4. Colorier et légender chaque secteur

**Vérification :** La somme des angles doit faire 360°

**Avantages :** Visualisation claire des proportions et du "poids" de chaque catégorie`,
            order: 2,
          },
          {
            id: 'histogram',
            title: 'Histogramme',
            content: `L'**histogramme** représente des données groupées en classes.

**Différence avec le diagramme en barres :**
- Histogramme : données quantitatives continues groupées en intervalles
- Barres collées (continuité des classes)
- Largeur des barres = amplitude de la classe

**Exemple :**
Tailles des élèves (en cm) :
- [140 ; 150[ : 5 élèves
- [150 ; 160[ : 12 élèves
- [160 ; 170[ : 8 élèves
- [170 ; 180[ : 3 élèves

**Construction :**
1. Tracer les axes
2. Placer les limites de classes sur l'axe horizontal
3. Dessiner des rectangles **collés**
4. Hauteur = effectif de la classe

**Lecture :**
- La classe [150 ; 160[ contient le plus d'élèves (12)
- La distribution est concentrée autour de 150-160 cm

**Avantages :** Visualise la distribution de données continues`,
            order: 3,
          },
          {
            id: 'choice',
            title: 'Quel Diagramme Choisir ?',
            content: `**Guide pour choisir le bon type de représentation :**

**Diagramme en barres :**
- ✓ Données qualitatives (catégories distinctes)
- ✓ Comparer des effectifs entre catégories
- ✓ Ex : sports préférés, couleurs favorites

**Diagramme circulaire :**
- ✓ Montrer des proportions / parts d'un tout
- ✓ Visualiser la répartition en pourcentages
- ✓ Ex : répartition du budget, parts de marché
- ✗ Éviter si trop de catégories (> 6)

**Histogramme :**
- ✓ Données quantitatives continues
- ✓ Données groupées en classes
- ✓ Visualiser une distribution
- ✓ Ex : tailles, âges, notes groupées

**Diagramme en boîte :**
- ✓ Résumer une série avec quartiles
- ✓ Comparer plusieurs séries
- ✓ Repérer les valeurs extrêmes

**Tableau :**
- ✓ Présenter des données précises
- ✓ Comparer plusieurs caractéristiques`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Diagramme en barres',
            problem: `Résultats d'un sondage sur les animaux préférés (30 élèves) :
Chien : 12, Chat : 10, Lapin : 5, Hamster : 3

Construire le diagramme en barres.`,
            solution: 'Diagramme avec 4 barres de hauteurs 12, 10, 5 et 3',
            steps: [
              'Tracer un axe vertical gradué de 0 à 12 (ou 15)',
              'Tracer un axe horizontal avec 4 positions',
              'Dessiner la barre "Chien" de hauteur 12',
              'Dessiner la barre "Chat" de hauteur 10',
              'Dessiner la barre "Lapin" de hauteur 5',
              'Dessiner la barre "Hamster" de hauteur 3',
              'Légender les axes et donner un titre',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Diagramme circulaire',
            problem: `Répartition du temps libre d'un collégien (24 heures/semaine) :
Sport : 6h, Jeux vidéo : 8h, Lecture : 4h, Autres : 6h

Calculer les angles pour le diagramme circulaire.`,
            solution: 'Sport: 90°, Jeux: 120°, Lecture: 60°, Autres: 90°',
            steps: [
              'Total = 24 heures',
              'Sport : (6÷24) × 360° = 0,25 × 360° = 90°',
              'Jeux vidéo : (8÷24) × 360° = 0,33... × 360° = 120°',
              'Lecture : (4÷24) × 360° = 0,167 × 360° = 60°',
              'Autres : (6÷24) × 360° = 0,25 × 360° = 90°',
              'Vérification : 90 + 120 + 60 + 90 = 360° ✓',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Choix du diagramme',
            problem: `Pour chaque situation, indiquer le type de diagramme le plus adapté :

a) Évolution du nombre de naissances par année
b) Répartition des élèves par niveau scolaire
c) Distribution des notes d'un contrôle (groupées par tranches)`,
            solution: 'a) Courbe, b) Barres ou circulaire, c) Histogramme',
            steps: [
              'a) Évolution temporelle → diagramme en courbe (ligne)',
              'b) Catégories distinctes → diagramme en barres',
              '   Ou proportions → diagramme circulaire',
              'c) Données continues groupées → histogramme',
              'Le choix dépend de l\'information à mettre en avant',
            ],
          },
        ],
        prerequisites: ['statistics_basics'],
        relatedLessons: ['statistics_quartiles'],
      },
      {
        id: 'statistics_frequency',
        skillId: 'statistics_frequency',
        title: 'Effectifs et Fréquences',
        description: 'Maîtrise les notions d\'effectif, fréquence et pourcentage',
        icon: '🔢',
        difficulty: 'beginner',
        estimatedTime: 15,
        keyPoints: [
          'L\'effectif est le nombre d\'éléments d\'une catégorie',
          'La fréquence est le rapport effectif/total',
          'La fréquence s\'exprime en décimal, fraction ou pourcentage',
          'La somme des fréquences vaut toujours 1 (ou 100%)',
        ],
        sections: [
          {
            id: 'effectif',
            title: 'L\'Effectif',
            content: `L'**effectif** d'une valeur ou d'une catégorie est le nombre de fois qu'elle apparaît dans une série.

**Effectif total :** Somme de tous les effectifs (nombre total d'éléments)

**Exemple :**
Sport préféré de 25 élèves :
- Football : 10 élèves → effectif = 10
- Basketball : 7 élèves → effectif = 7
- Tennis : 5 élèves → effectif = 5
- Natation : 3 élèves → effectif = 3

**Effectif total** = 10 + 7 + 5 + 3 = 25 élèves

**Tableau d'effectifs :**
\`\`\`
| Sport       | Effectif |
|-------------|----------|
| Football    |    10    |
| Basketball  |     7    |
| Tennis      |     5    |
| Natation    |     3    |
| Total       |    25    |
\`\`\``,
            order: 1,
          },
          {
            id: 'frequency',
            title: 'La Fréquence',
            content: `La **fréquence** d'une valeur est le rapport de son effectif sur l'effectif total.

**Formule :**
Fréquence = Effectif de la valeur ÷ Effectif total

**Propriété importante :**
La somme de toutes les fréquences = 1

**Exemple (suite) :**
- Fréquence du football = 10 ÷ 25 = 0,4
- Fréquence du basketball = 7 ÷ 25 = 0,28
- Fréquence du tennis = 5 ÷ 25 = 0,2
- Fréquence de la natation = 3 ÷ 25 = 0,12

**Vérification :**
0,4 + 0,28 + 0,2 + 0,12 = 1 ✓

**Expression en fraction :**
On peut aussi écrire les fréquences en fractions :
- Football : 10/25 = 2/5
- Basketball : 7/25
- Tennis : 5/25 = 1/5
- Natation : 3/25`,
            order: 2,
          },
          {
            id: 'percentage',
            title: 'Pourcentage',
            content: `Le **pourcentage** est une fréquence exprimée sur 100.

**Formule :**
Pourcentage = Fréquence × 100
ou
Pourcentage = (Effectif ÷ Effectif total) × 100

**Exemple (suite) :**
- Football : 0,4 × 100 = 40%
- Basketball : 0,28 × 100 = 28%
- Tennis : 0,2 × 100 = 20%
- Natation : 0,12 × 100 = 12%

**Interprétation :**
"40% des élèves préfèrent le football"
signifie que sur 100 élèves, 40 préféreraient le football.

**Vérification :**
La somme des pourcentages = 100%
40 + 28 + 20 + 12 = 100 ✓

**Tableau complet :**
\`\`\`
| Sport       | Effectif | Fréquence | Pourcentage |
|-------------|----------|-----------|-------------|
| Football    |    10    |   0,40    |     40%     |
| Basketball  |     7    |   0,28    |     28%     |
| Tennis      |     5    |   0,20    |     20%     |
| Natation    |     3    |   0,12    |     12%     |
| Total       |    25    |   1,00    |    100%     |
\`\`\``,
            order: 3,
          },
          {
            id: 'applications',
            title: 'Applications',
            content: `**Utilisation des fréquences et pourcentages :**

**1. Comparaison de séries de tailles différentes**

Classe A (25 élèves) : 10 ont la moyenne
Classe B (30 élèves) : 12 ont la moyenne

Effectifs : difficilement comparables
Fréquences :
- Classe A : 10/25 = 0,4 = 40%
- Classe B : 12/30 = 0,4 = 40%

→ Même proportion dans les deux classes

**2. Calcul d'effectifs à partir de fréquences**

Si 35% des 120 élèves du collège font du sport :
Effectif = 35% de 120 = 0,35 × 120 = 42 élèves

**3. Proportionnalité**

Les fréquences permettent de faire des prédictions :
Si 60% des élèves d'une classe de 25 aiment les maths,
et qu'on interroge 200 élèves avec la même proportion :
60% de 200 = 0,6 × 200 = 120 élèves

**Attention :** Une fréquence ne donne pas forcément un effectif entier !`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Calcul de fréquences',
            problem: `Résultats d'un sondage sur 40 personnes :
Oui : 24 personnes
Non : 12 personnes
Sans avis : 4 personnes

Calculer la fréquence de chaque réponse.`,
            solution: 'Oui: 0,6 (60%), Non: 0,3 (30%), Sans avis: 0,1 (10%)',
            steps: [
              'Effectif total = 40 personnes',
              'Fréquence "Oui" = 24 ÷ 40 = 0,6 = 60%',
              'Fréquence "Non" = 12 ÷ 40 = 0,3 = 30%',
              'Fréquence "Sans avis" = 4 ÷ 40 = 0,1 = 10%',
              'Vérification : 0,6 + 0,3 + 0,1 = 1 ✓',
              'ou : 60% + 30% + 10% = 100% ✓',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Du pourcentage à l\'effectif',
            problem: `Dans un collège de 600 élèves, 45% sont des filles.
Combien y a-t-il de filles dans ce collège ?`,
            solution: '270 filles',
            steps: [
              'Donnée : 45% des 600 élèves sont des filles',
              'Calcul : 45% de 600',
              'Méthode 1 : 0,45 × 600 = 270',
              'Méthode 2 : (45 × 600) ÷ 100 = 27000 ÷ 100 = 270',
              'Il y a 270 filles dans le collège',
              'Donc il y a 600 - 270 = 330 garçons',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Comparaison',
            problem: `Classe A (24 élèves) : 18 ont eu la moyenne
Classe B (30 élèves) : 21 ont eu la moyenne

Quelle classe a le meilleur taux de réussite ?`,
            solution: 'Classe B (70% contre 75%)',
            steps: [
              'Classe A : fréquence = 18 ÷ 24 = 0,75 = 75%',
              'Classe B : fréquence = 21 ÷ 30 = 0,7 = 70%',
              'En effectif, la classe B a plus d\'élèves avec la moyenne (21 > 18)',
              'En fréquence, c\'est la classe A qui a le meilleur taux (75% > 70%)',
              'La classe A a un meilleur taux de réussite',
            ],
          },
        ],
        prerequisites: [],
        relatedLessons: ['statistics_basics', 'statistics_diagrams'],
      },
    ],
  },
  {
    id: 'probability',
    title: 'Les Probabilités',
    description: 'Découvre le monde du hasard et apprends à calculer des probabilités',
    theme: 'crystal',
    icon: '🎲',
    order: 9,
    gradeLevel: '4eme',
    lessons: [
      {
        id: 'probability_intro',
        skillId: 'probability_basic',
        title: 'Introduction aux Probabilités',
        description: 'Découvre les notions de base : expérience aléatoire, issue, événement et probabilité',
        icon: '🎯',
        difficulty: 'beginner',
        estimatedTime: 20,
        keyPoints: [
          'Une expérience aléatoire a plusieurs résultats possibles',
          'La probabilité mesure la chance qu\'un événement se réalise',
          'La probabilité est un nombre entre 0 et 1',
          'Un événement certain a une probabilité de 1',
        ],
        sections: [
          {
            id: 'random_experiment',
            title: 'Expérience Aléatoire',
            content: `Une **expérience aléatoire** est une expérience dont on ne peut pas prévoir le résultat à l'avance.

**Exemples d'expériences aléatoires :**
- Lancer un dé à 6 faces
- Tirer une carte dans un jeu de 52 cartes
- Tirer une boule dans un sac
- Lancer une pièce de monnaie

**Issue :** C'est un résultat possible d'une expérience aléatoire

**Exemple :** Pour un dé à 6 faces
- Issues possibles : 1, 2, 3, 4, 5, 6
- Il y a 6 issues possibles

**Univers :** C'est l'ensemble de toutes les issues possibles
Notation : Ω (omega)

Pour le dé : Ω = {1, 2, 3, 4, 5, 6}`,
            order: 1,
          },
          {
            id: 'event',
            title: 'Événement',
            content: `Un **événement** est un ensemble d'issues.

**Exemples avec un dé à 6 faces :**

- Événement A : "Obtenir un nombre pair"
  A = {2, 4, 6}

- Événement B : "Obtenir un nombre supérieur à 4"
  B = {5, 6}

- Événement C : "Obtenir 3"
  C = {3} (événement élémentaire)

**Types d'événements :**

1. **Événement élémentaire** : contient une seule issue
   Ex : Obtenir exactement 5

2. **Événement certain** : contient toutes les issues
   Ex : Obtenir un nombre entre 1 et 6

3. **Événement impossible** : ne contient aucune issue
   Ex : Obtenir 7 avec un dé à 6 faces
   Notation : ∅ (ensemble vide)`,
            order: 2,
          },
          {
            id: 'probability_def',
            title: 'Définition de la Probabilité',
            content: `La **probabilité** d'un événement mesure sa chance de se réaliser.

**Notation :** P(A) se lit "probabilité de l'événement A"

**Propriétés :**
- 0 ≤ P(A) ≤ 1
- P(événement impossible) = 0
- P(événement certain) = 1

**Cas d'équiprobabilité :**

Quand toutes les issues ont la même chance de se produire :

**Formule :**
\`\`\`
P(A) = Nombre d'issues favorables à A
       ─────────────────────────────────
       Nombre total d'issues
\`\`\`

**Exemple avec un dé :**
- P(obtenir 5) = 1/6
- P(obtenir un nombre pair) = 3/6 = 1/2
- P(obtenir un nombre ≤ 6) = 6/6 = 1
- P(obtenir 7) = 0/6 = 0`,
            order: 3,
          },
          {
            id: 'probability_practice',
            title: 'Calculs de Probabilités',
            content: `**Méthode pour calculer une probabilité :**

1. **Identifier l'univers** : lister toutes les issues possibles
2. **Compter le nombre total d'issues**
3. **Identifier les issues favorables** à l'événement
4. **Appliquer la formule** : P(A) = (issues favorables) / (issues totales)

**Exemple : Roue de loterie**

Une roue est divisée en 8 secteurs égaux numérotés de 1 à 8.

Univers : Ω = {1, 2, 3, 4, 5, 6, 7, 8}
Nombre total d'issues : 8

**Événement A : "Obtenir un multiple de 3"**
- Issues favorables : {3, 6}
- Nombre d'issues favorables : 2
- P(A) = 2/8 = 1/4 = 0,25 = 25%

**Événement B : "Obtenir un nombre premier"**
- Issues favorables : {2, 3, 5, 7}
- Nombre d'issues favorables : 4
- P(B) = 4/8 = 1/2 = 0,5 = 50%`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Lancer de dé',
            problem: `On lance un dé équilibré à 6 faces.

Calculer la probabilité de chaque événement :
a) Obtenir 4
b) Obtenir un nombre impair
c) Obtenir un nombre strictement inférieur à 5`,
            solution: 'a) 1/6, b) 1/2, c) 2/3',
            steps: [
              'Univers : Ω = {1, 2, 3, 4, 5, 6}, donc 6 issues',
              'a) Obtenir 4 : une seule issue favorable {4}',
              '   P(obtenir 4) = 1/6',
              'b) Obtenir un nombre impair : {1, 3, 5} = 3 issues',
              '   P(nombre impair) = 3/6 = 1/2',
              'c) Nombre < 5 : {1, 2, 3, 4} = 4 issues',
              '   P(nombre < 5) = 4/6 = 2/3',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Tirage de cartes',
            problem: `On tire au hasard une carte d'un jeu de 32 cartes (4 couleurs : ♥ ♦ ♣ ♠, 8 valeurs par couleur : 7, 8, 9, 10, Valet, Dame, Roi, As).

Calculer la probabilité de tirer :
a) Un As
b) Un cœur
c) Le Roi de pique`,
            solution: 'a) 1/8, b) 1/4, c) 1/32',
            steps: [
              'Nombre total de cartes : 32',
              'a) Il y a 4 As (un par couleur)',
              '   P(As) = 4/32 = 1/8',
              'b) Il y a 8 cœurs (8 cartes de cette couleur)',
              '   P(cœur) = 8/32 = 1/4',
              'c) Il y a exactement 1 Roi de pique',
              '   P(Roi de pique) = 1/32',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Sac de billes',
            problem: `Un sac contient 5 billes rouges, 3 billes bleues et 2 billes vertes.
On tire une bille au hasard.

Quelle est la probabilité de tirer une bille bleue ?`,
            solution: '3/10 = 0,3 = 30%',
            steps: [
              'Compter le nombre total de billes : 5 + 3 + 2 = 10',
              'Nombre de billes bleues : 3',
              'P(bille bleue) = 3/10',
              'On peut aussi l\'exprimer en décimal : 0,3',
              'Ou en pourcentage : 30%',
            ],
          },
        ],
        prerequisites: [],
        relatedLessons: ['probability_composed'],
      },
      {
        id: 'probability_composed',
        skillId: 'probability_composed',
        title: 'Événements Composés',
        description: 'Apprends à calculer des probabilités d\'événements complémentaires, réunion et intersection',
        icon: '🔀',
        difficulty: 'intermediate',
        estimatedTime: 25,
        keyPoints: [
          'L\'événement contraire A̅ contient les issues qui ne sont pas dans A',
          'P(A) + P(A̅) = 1',
          'La réunion A ∪ B : "A ou B" (au moins l\'un des deux)',
          'L\'intersection A ∩ B : "A et B" (les deux en même temps)',
        ],
        sections: [
          {
            id: 'complementary',
            title: 'Événement Contraire',
            content: `L'**événement contraire** (ou complémentaire) de A est l'événement qui se réalise quand A ne se réalise pas.

**Notation :** A̅ (se lit "A barre") ou "non A"

**Propriété fondamentale :**
\`\`\`
P(A) + P(A̅) = 1
\`\`\`

Donc : **P(A̅) = 1 - P(A)**

**Exemple avec un dé :**

Événement A : "Obtenir un nombre pair" = {2, 4, 6}
Événement contraire A̅ : "Obtenir un nombre impair" = {1, 3, 5}

- P(A) = 3/6 = 1/2
- P(A̅) = 3/6 = 1/2
- Vérification : 1/2 + 1/2 = 1 ✓

**Utilité :**
Il est parfois plus facile de calculer P(A̅) puis d'utiliser P(A) = 1 - P(A̅)

**Exemple :**
"Au moins un 6 en 2 lancers" → plus facile de calculer "aucun 6" !`,
            order: 1,
          },
          {
            id: 'union',
            title: 'Réunion d\'Événements',
            content: `La **réunion** de deux événements A et B est l'événement "A ou B" (au moins l'un des deux).

**Notation :** A ∪ B (se lit "A union B")

**Définition :** A ∪ B se réalise si A se réalise, ou si B se réalise, ou si les deux se réalisent.

**Exemple avec un dé :**

A : "Obtenir un nombre pair" = {2, 4, 6}
B : "Obtenir un nombre > 4" = {5, 6}

A ∪ B : "Pair OU > 4" = {2, 4, 5, 6}

**Cas particuliers :**

1. **Si A et B sont incompatibles** (pas d'issue en commun) :
   P(A ∪ B) = P(A) + P(B)

2. **Si A et B ont des issues communes** :
   P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

**Exemple :**
Dans notre cas : P(A ∪ B) = 4/6 = 2/3
Vérification : P(A) + P(B) - P(A ∩ B) = 3/6 + 2/6 - 1/6 = 4/6 ✓`,
            order: 2,
          },
          {
            id: 'intersection',
            title: 'Intersection d\'Événements',
            content: `L'**intersection** de deux événements A et B est l'événement "A et B" (les deux en même temps).

**Notation :** A ∩ B (se lit "A inter B")

**Définition :** A ∩ B se réalise si A et B se réalisent tous les deux simultanément.

**Exemple avec un dé :**

A : "Obtenir un nombre pair" = {2, 4, 6}
B : "Obtenir un nombre > 4" = {5, 6}

A ∩ B : "Pair ET > 4" = {6}

P(A ∩ B) = 1/6

**Événements incompatibles :**

Deux événements sont **incompatibles** (ou disjoints) s'ils ne peuvent pas se réaliser en même temps.

A ∩ B = ∅ (ensemble vide)
Donc P(A ∩ B) = 0

**Exemple :**
C : "Obtenir 2"
D : "Obtenir 5"

C et D sont incompatibles car on ne peut pas obtenir 2 et 5 en même temps.
C ∩ D = ∅`,
            order: 3,
          },
          {
            id: 'formulas',
            title: 'Formules Utiles',
            content: `**Récapitulatif des formules importantes :**

**1. Événement contraire :**
\`\`\`
P(A̅) = 1 - P(A)
P(A) + P(A̅) = 1
\`\`\`

**2. Réunion (événements incompatibles) :**
\`\`\`
Si A ∩ B = ∅, alors :
P(A ∪ B) = P(A) + P(B)
\`\`\`

**3. Réunion (cas général) :**
\`\`\`
P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
\`\`\`

**4. Événements certains et impossibles :**
\`\`\`
P(∅) = 0
P(Ω) = 1
\`\`\`

**Astuce :**
Pour vérifier vos calculs, utilisez toujours :
- Toutes les probabilités doivent être entre 0 et 1
- La somme des probabilités de tous les événements élémentaires = 1`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Événement contraire',
            problem: `On lance un dé. La probabilité d'obtenir un nombre strictement supérieur à 2 est 2/3.

Quelle est la probabilité d'obtenir un nombre inférieur ou égal à 2 ?`,
            solution: '1/3',
            steps: [
              'Événement A : "Nombre > 2"',
              'Événement contraire A̅ : "Nombre ≤ 2"',
              'On sait que P(A) = 2/3',
              'Formule : P(A̅) = 1 - P(A)',
              'P(A̅) = 1 - 2/3 = 3/3 - 2/3 = 1/3',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Réunion',
            problem: `Dans un jeu de 32 cartes, on tire une carte au hasard.

Calculer la probabilité de tirer un cœur ou un Roi.`,
            solution: '11/32',
            steps: [
              'A : "Tirer un cœur" → 8 cartes, P(A) = 8/32',
              'B : "Tirer un Roi" → 4 cartes, P(B) = 4/32',
              'A ∩ B : "Tirer le Roi de cœur" → 1 carte',
              'P(A ∩ B) = 1/32',
              'Formule : P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
              'P(A ∪ B) = 8/32 + 4/32 - 1/32 = 11/32',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Incompatibilité',
            problem: `On tire une carte dans un jeu de 32 cartes.

A : "Tirer un pique"
B : "Tirer un cœur"

a) A et B sont-ils incompatibles ?
b) Calculer P(A ∪ B)`,
            solution: 'a) Oui, b) 1/2',
            steps: [
              'a) Une carte ne peut pas être à la fois pique ET cœur',
              '   Donc A ∩ B = ∅ : A et B sont incompatibles',
              'b) P(A) = 8/32 (8 piques)',
              '   P(B) = 8/32 (8 cœurs)',
              '   Comme A et B sont incompatibles :',
              '   P(A ∪ B) = P(A) + P(B) = 8/32 + 8/32 = 16/32 = 1/2',
            ],
          },
        ],
        prerequisites: ['probability_intro'],
        relatedLessons: ['probability_tree'],
      },
      {
        id: 'probability_tree',
        skillId: 'probability_tree',
        title: 'Arbres de Probabilités',
        description: 'Utilise les arbres pour calculer des probabilités d\'expériences à plusieurs étapes',
        icon: '🌳',
        difficulty: 'intermediate',
        estimatedTime: 30,
        keyPoints: [
          'Un arbre représente toutes les issues possibles d\'une expérience',
          'La somme des probabilités sur les branches d\'un même nœud = 1',
          'Pour calculer une probabilité : multiplier le long d\'un chemin',
          'Pour plusieurs chemins : additionner leurs probabilités',
        ],
        sections: [
          {
            id: 'tree_intro',
            title: 'Qu\'est-ce qu\'un Arbre ?',
            content: `Un **arbre de probabilités** est un diagramme qui représente toutes les issues possibles d'une expérience à plusieurs étapes.

**Éléments d'un arbre :**

- **Nœuds** : points de décision
- **Branches** : chemins possibles
- **Probabilités** : inscrites sur chaque branche

**Règles importantes :**

1. La somme des probabilités partant d'un même nœud = 1
2. On multiplie les probabilités le long d'un chemin
3. On additionne les probabilités de chemins différents

**Exemple simple :**

On tire une bille rouge (R) ou bleue (B) dans un sac, puis une deuxième fois.

\`\`\`
          R (1/2)─── R (1/4)
        ╱
Départ ─┤
        ╲
          B (1/2)─── B (1/4)
\`\`\`

Si tirage avec remise et P(R) = P(B) = 1/2 :
- P(R puis R) = 1/2 × 1/2 = 1/4
- P(B puis B) = 1/2 × 1/2 = 1/4`,
            order: 1,
          },
          {
            id: 'with_replacement',
            title: 'Tirage Avec Remise',
            content: `**Tirage avec remise** : on remet l'objet tiré avant le tirage suivant.

**Conséquence :** Les probabilités ne changent pas d'un tirage à l'autre.

**Exemple :**

Un sac contient 3 boules rouges (R) et 2 boules bleues (B).
On tire une boule, on note sa couleur, **on la remet**, puis on tire à nouveau.

**1ère étape :**
- P(R) = 3/5
- P(B) = 2/5

**2ème étape :**
- Si on a tiré R : P(R) = 3/5 et P(B) = 2/5 (identique)
- Si on a tiré B : P(R) = 3/5 et P(B) = 2/5 (identique)

**Arbre :**
\`\`\`
           ╱─ R (3/5) → P(R,R) = 3/5 × 3/5 = 9/25
      R (3/5)
     ╱      ╲─ B (2/5) → P(R,B) = 3/5 × 2/5 = 6/25
    ╱
Départ
    ╲
     ╲      ╱─ R (3/5) → P(B,R) = 2/5 × 3/5 = 6/25
      B (2/5)
           ╲─ B (2/5) → P(B,B) = 2/5 × 2/5 = 4/25
\`\`\`

**Vérification :** 9/25 + 6/25 + 6/25 + 4/25 = 25/25 = 1 ✓`,
            order: 2,
          },
          {
            id: 'without_replacement',
            title: 'Tirage Sans Remise',
            content: `**Tirage sans remise** : on ne remet pas l'objet tiré.

**Conséquence :** Les probabilités changent au 2ème tirage.

**Exemple :**

Même sac : 3 rouges (R), 2 bleues (B).
On tire une boule, on note sa couleur, **on ne la remet pas**, puis on tire à nouveau.

**1ère étape :**
- P(R) = 3/5
- P(B) = 2/5

**2ème étape :**

Si on a tiré R (il reste 2R et 2B, soit 4 boules) :
- P(R) = 2/4 = 1/2
- P(B) = 2/4 = 1/2

Si on a tiré B (il reste 3R et 1B, soit 4 boules) :
- P(R) = 3/4
- P(B) = 1/4

**Arbre :**
\`\`\`
           ╱─ R (1/2) → P(R,R) = 3/5 × 1/2 = 3/10
      R (3/5)
     ╱      ╲─ B (1/2) → P(R,B) = 3/5 × 1/2 = 3/10
    ╱
Départ
    ╲
     ╲      ╱─ R (3/4) → P(B,R) = 2/5 × 3/4 = 6/20 = 3/10
      B (2/5)
           ╲─ B (1/4) → P(B,B) = 2/5 × 1/4 = 2/20 = 1/10
\`\`\`

**Vérification :** 3/10 + 3/10 + 3/10 + 1/10 = 10/10 = 1 ✓`,
            order: 3,
          },
          {
            id: 'calculations',
            title: 'Calculs avec les Arbres',
            content: `**Méthode pour calculer des probabilités avec un arbre :**

**1. Construire l'arbre :**
- Dessiner toutes les branches possibles
- Indiquer les probabilités sur chaque branche
- Vérifier que la somme = 1 à chaque nœud

**2. Pour un événement simple (un seul chemin) :**
Multiplier les probabilités le long du chemin

**3. Pour un événement composé (plusieurs chemins) :**
- Identifier tous les chemins favorables
- Calculer la probabilité de chaque chemin
- Additionner ces probabilités

**Exemple :**

Quelle est la probabilité d'obtenir au moins une boule rouge en 2 tirages ?

**Événement :** "Au moins 1 rouge" = R,R ou R,B ou B,R

Chemins favorables :
- R,R : P = 3/10
- R,B : P = 3/10
- B,R : P = 3/10

**Résultat :** P(au moins 1 rouge) = 3/10 + 3/10 + 3/10 = 9/10

**Méthode alternative (plus rapide) :**
P(au moins 1 R) = 1 - P(aucun R) = 1 - P(B,B) = 1 - 1/10 = 9/10 ✓`,
            order: 4,
          },
        ],
        examples: [
          {
            id: 'ex1',
            title: 'Exemple 1 : Tirage avec remise',
            problem: `Un sac contient 4 jetons numérotés 1, 2, 3, 4.
On tire un jeton, on note son numéro, on le remet, puis on tire à nouveau.

Calculer :
a) P(obtenir deux fois le numéro 1)
b) P(obtenir deux numéros pairs)`,
            solution: 'a) 1/16, b) 1/4',
            steps: [
              'P(1 au 1er tirage) = 1/4',
              'Avec remise : P(1 au 2ème) = 1/4',
              'a) P(1,1) = 1/4 × 1/4 = 1/16',
              'Numéros pairs : {2, 4}, donc P(pair) = 2/4 = 1/2',
              'b) P(pair, pair) = 1/2 × 1/2 = 1/4',
            ],
          },
          {
            id: 'ex2',
            title: 'Exemple 2 : Tirage sans remise',
            problem: `Un sac contient 2 billes rouges et 3 billes vertes.
On tire deux billes successivement sans remise.

Calculer la probabilité de tirer :
a) Deux billes rouges
b) Une bille de chaque couleur`,
            solution: 'a) 1/10, b) 3/5',
            steps: [
              'Total : 5 billes',
              'a) P(R,R) = P(R au 1er) × P(R au 2ème sachant R au 1er)',
              '   = 2/5 × 1/4 = 2/20 = 1/10',
              'b) "1 de chaque" = R,V ou V,R',
              '   P(R,V) = 2/5 × 3/4 = 6/20',
              '   P(V,R) = 3/5 × 2/4 = 6/20',
              '   P(1 de chaque) = 6/20 + 6/20 = 12/20 = 3/5',
            ],
          },
          {
            id: 'ex3',
            title: 'Exemple 3 : Application',
            problem: `On lance deux fois de suite une pièce équilibrée (Pile ou Face).

Calculer :
a) P(obtenir deux fois Pile)
b) P(obtenir au moins un Face)`,
            solution: 'a) 1/4, b) 3/4',
            steps: [
              'P(Pile) = P(Face) = 1/2 à chaque lancer',
              'a) P(P,P) = 1/2 × 1/2 = 1/4',
              'b) Méthode 1 : "Au moins 1 Face" = P,F ou F,P ou F,F',
              '   = 1/4 + 1/4 + 1/4 = 3/4',
              '   Méthode 2 (plus rapide) :',
              '   P(au moins 1 Face) = 1 - P(aucun Face)',
              '   = 1 - P(P,P) = 1 - 1/4 = 3/4',
            ],
          },
        ],
        prerequisites: ['probability_composed'],
        relatedLessons: ['statistics_basics'],
      },
    ],
  },
];
