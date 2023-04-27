---
sidebar_position: 1
---
# Introduction

### Images

## Contexte

Chaque année, 3iL propose à ses élèves de 2ème année de cycle ingénieur un projet leur permettant de développer leur savoir-faire, en réalisant un projet d’application professionnelle en complément de leur parcours technologique du semestre 7.

Dans ce contexte, les élèves ont - sous certaines conditions - l’opportunité de soumettre leurs idées de projet. C’est de cette façon qu’est né le projet **PICO-MAZING** dont l’objet était de construire un labyrinthe modulable et des robots capables de le résoudre en coopération.

3il, notre client - incarné par Monsieur Romain MARIE - souhaiterait un nouvel outil pédagogique et de communication permettant d’exposer certaines compétences acquises au cours de notre formation.
Il s’agissait donc de produire un support de communication exposant brièvement notre projet, support qui pourrait être utilisé lors de salons, JPO…

À minima, nous devions donc proposer une solution de résolution de labyrinthe à partir d’un robot fonctionnant sous ROS, une plateforme de robotique enseignée à l’école.

Ce projet couvre un champ étendu de domaines: systèmes embarqués, robotique, conception 3D et électronique, et infrastructures systèmes.

## Acteurs

**Client externe** : Romain MARIE / 3iL

**Agile master** : GAND Valentin

**Lead tech** : PICOT Benoît

**Développeurs** : TARCY Allan / DELILLE Henri

**Enseignant technique** : Romain MARIE / Jesus FRANCO ROBLES

# Fonctionnalités

## Caractéristiques techniques

### Matériel

| Composant                                   | Quantité  |
| ------------------------------------------- | ---------- |
| **Microcontrôleur Raspberry Pi**     | W          |
| **Capteurs Détecteurs d’obstacles** | 3          |
| **Capteurs de ligne**                 | 3          |
| **Bouton programmable**               | 1          |
| **Led programmable**                  | 1          |
| **Batterie Pile 9V**                  | 1          |
| **Autonomie**                         | Environ 1h |
| **Connectique PC**                    | Micro USB  |
| **Mise à jour logiciel**             | Micro USB  |

### Composants

| Pièce                              | Quantité |
| ----------------------------------- | --------- |
| **Châssis**                  |           |
| Circuit imprimé                    | 1         |
| Roue                                | 2         |
| Roue folle                          | 1         |
| Support moteurs                     | 2         |
| **Moteurs**                   |           |
| Moteur à courant continu (N20)     | 2         |
| **Contrôleurs**                                  |
| Raspberry Pi Pico W                 | 1         |
| Module moteurs (TB6612FNG)          | 1         |
| **Capteurs**                                      |
| Capteur de distance infrarouge      | 3         |
| Module suiveur de ligne KY-033      | 3         |
| **Autres**                                       |
| Régulateur de tension (buck-boost) | 1         |
| Connecteur pile 9V                  | 1         |
| Pile 9V (rechargeable)              | 1         |

# Matériel Open Source

Le Picobot est construit autour des composants suivants: châssis, moteurs, roues, microcontrôleur, capteurs, batterie. Le châssis du Picobot est un circuit imprimé sur lequel sont soudées des fiches permettant d’accueillir les différents composants du robot. Ce système permet de remplacer les composants défectueux, et d’utiliser le robot sous différentes configurations. Certaines parties du Picobot ont été réalisées par impression 3D. L’ensemble des fichiers de conception sont disponibles sur le répertoire du projet.
