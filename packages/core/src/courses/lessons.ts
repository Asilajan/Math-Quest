import { CourseChapter } from './types';

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
        relatedLessons: ['powers_negative'],
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
];
