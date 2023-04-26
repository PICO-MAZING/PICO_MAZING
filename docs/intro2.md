---
sidebar_position: 1
---

# Introduction 2

## CONTEXTE
3il souhaiterait un nouvel outil pédagogique et de communication. L’objectif de ce projet est de développer un essaim de robots qui servirait donc de support de communication lors de salons, JPO…
En fonction du niveau de développement du projet, ces robots pourraient également être utilisés lors des cours et des TP de robotique par exemple.

Les domaines concernés par notre projet sont les systèmes embarqués et les infrastructures. Nous nous inspirons d’une solution déjà existante : les “micromouse” utilisées lors de compétitions de résolution de labyrinthes.

Ici, nous apportons la notion de coopération entre plusieurs robots (conçus par nos soins) pour la résolution du labyrinthe.


## ACTEURS

**Client externe** : Romain MARIE / 3iL

**Agile master** : GAND Valentin
**Lead tech** : PICOT Benoît
**Développeurs** : TARCY Allan / DELILLE Henri

**Enseignant technique** : Romain MARIE / Jesus FRANCO ROBLES

_Note : notre équipe s’est vu réduire son nombre en cours de projet._


# Fonctionnalités

## CARACTÉRISTIQUES TECHNIQUES

### MATÉRIEL

| Composant                       | Quantité |
|--------------------------------|----------|
| Microcontrôleur Raspberry Pi   | W        |
| Capteurs Détecteurs d’obstacles| 3        |
| Capteurs de ligne               | 3        |
| Bouton programmable             | 1        |
| Led programmable                | 1        |
| Batterie Pile 9V                | 1        |
| Autonomie                       | Environ 1h |
| Connectique PC                  | Micro USB |
| Mise à jour logiciel            | Micro USB|


### COMPOSANTS

| Pièce                                 | Quantité |
|---------------------------------------|----------|
| Circuit imprimé                       | 1        |
| Roue                                  | 2        |
| Roue folle                            | 1        |
| Support moteurs                       | 2        |
| Moteurs                               |          |
| DC n20                                | 2        |
| Contrôleurs                           |          |
| Raspberry Pi Pico W                   | 1        |
| Module moteurs (TB6612FNG)            | 1        |
| Capteurs                              |          |
| Capteur de distance infrarouge        | 3        |
| Module suiveur de ligne KY-033        | 3        |
| Autres                                |          |
| Régulateur de tension (buck-boost)    | 1        |
| Connecteur pile 9V                    | 1        |
| Pile 9V (rechargeable)                | 1        |


# Open source
 
Le Picobot est construit autour des composants suivants: châssis, moteurs, roues, microcontrôleur, capteurs, batterie. Le châssis du Picobot est un circuit imprimé sur lequel sont soudées des fiches permettant d’accueillir les différents composants du robot. Ce système permet de remplacer les composants défectueux, et d’utiliser le robot sous différentes configurations. Certaines parties du Picobot ont été réalisées par impression 3D. L’ensemble des fichiers de conception sont disponibles sur le répertoire du projet.
