---
sidebar_position: 2
---
# Guide de démarrage rapide

Dans cette section nous nous attacherons à présenter une marche à suivre afin de mettre en marche le Picobot. Pour suivre ce tutoriel, il faudra disposer d’un ordinateur capable d’installer ROS, nativement ou au travers d’un conteneur.

## Mise en contexte

Avant de commencer notre tutoriel, explicitons ce qui se cache derrière les termes que nous emploierons tout au long de ce guide.

### Raspberry Pi Pico W

Le Raspberry Pi Pico W est la version équipée du Wifi/BLE du célèbre microcontrôleur Raspberry Pi Pico (2021) de la fondation Raspberry Pi. [Sorti en Juin 2022](https://raspberry-pi.fr/raspberry-pi-pico-wifi/), le RPI PICO W accessible à partir de 8.40€ est une option abordable et fiable pour entrer dans le monde de l'embarqué et de l’Internet des objets.

### Micro-ROS

Robot Operating System (ROS) est une plateforme libre de développement logicielle pour robot. Dans sa première version, ROS ne permettait pas à l’écosystème d'interagir directement avec les microcontrôleurs. Pour pallier ce défaut dans ROS2, le projet micro-ROS a vu le jour.

Micro-ROS est une surcouche du protocole DDS - utilisé dans ROS2 - pour les appareils à ressources limitées (microcontrôleurs). Cette plateforme repose une infrastructure client/agent permettant une communication avec le réseau ROS aux systèmes équipés de microcontrôleurs. L’agent, nommé ‘micro-ros-agent’ sert donc de passerelle entre ROS2 et les clients.

Plus de détails sont disponibles sur le [le site de micro-ROS](https://micro.ros.org/).

## Configuration du PC

Le Picobot a été programmé sur la version humble de ROS2. Ce guide suivra donc les instructions spécifiques correspondant à cette version de ROS2.

### Installation de ROS2

Pour installer ROS2 - humble, veuillez vous référer aux instructions suivantes : [Installation ROS2 Humble](https://docs.ros.org/en/humble/Installation.html)

Pour plus de flexibilité, notez qu’il est possible d’installer ROS2 au travers d’un conteneur (LXD, docker). Consulter: [ROS development with LXD](https://ubuntu.com/blog/ros-development-with-lxd), [Running ROS 2 nodes in Docker](https://docs.ros.org/en/humble/How-To-Guides/Run-2-nodes-in-single-or-separate-docker-containers.html), [ROS Docker](http://wiki.ros.org/docker/Tutorials/Docker) et [Docker GUI](http://wiki.ros.org/docker/Tutorials/GUI) pour plus d’informations.

Pour utiliser les applications graphiques de ROS depuis Docker, nous avons également rédigé un succinct tutoriel résumant les étapes nécessaires à la mise en place de l’environnement: [ROS GUI DOCKER](https://github.com/PICO-MAZING/ros_gui_docker).

### Installation de micro-ROS

Pour installer micro-ros, veuillez suivre les instructions suivantes : [Installation micro-ros](https://micro.ros.org/docs/tutorials/core/first_application_linux/).

À noter qu’ici, il est important d’installer l’agent micro-ros, depuis [l’outil terminal fourni par micro-ros](https://micro.ros.org/docs/tutorials/core/first_application_linux/), par un conteneur ou via l’utilitaire snap d’Ubuntu via la commande:

`sudo snap install micro-ros-agent`

## Configuration du Picobot

Le Picobot est basé sur un microcontrôleur dont les ressources restent limitées. Plusieurs considérations sont à prendre en compte avant de le mettre en marche. Le Picobot possède une unique node nommée `picobot_node`. Cette node publie sur le topic `picobot/sensors` et s’abonne au topic `picobot/cmd_vel`. Le robot communique avec le réseau ROS toutes les 100ms.

### Topic `picobot/sensors`

Tous les capteurs du Picobot renvoient des informations binaires (1 si activé, 0 sinon).

Pour alléger au maximum la charge réseau du robot, les informations des 6 capteurs sont compactées dans un entier de 8 bits (0 - 63) représentant l’ensemble des états possibles.

### Topic `picobot/cmd_vel`

En l’état, le Picobot réalise un nombre prédéfini de mouvements.

Chacun de ces mouvements est représenté dans une énumération **action** composée des actions **STOP : 0, FORWARD : 1, RIGHT : 2, BACKWARD : 3, LEFT : 4, DUCK_LEFT : 5, DUCK_RIGHT : 6**.

Les actions **DUCK_LEFT** et **DUCK_RIGHT** représentent respectivement le mouvement avant de la roue gauche et l’arrêt de la roue droite, et le mouvement avant de la roue droite et l’arrêt de la roue gauche.

Ces actions sont à différencier de **LEFT** et **RIGHT** représentant respectivement le mouvement avant de la roue gauche et arrière de la roue droite, et le mouvement avant de la roue droite et arrière de la roue gauche.

À la réception d’une commande sur le topic, le Picobot effectue l’action associée correspondant à une fonction implémentée dans notre librairie [librobot](https://github.com/allantarcy/uros_pico_w/tree/master/librobot).

### Installation de l'application micro-ROS

Pour configurer le robot, veuillez suivre les instructions disponibles sur notre répertoire git : [micro-ros pico wifi](https://github.com/allantarcy/uros_pico_w) (bien penser à entrer la bonne configuration internet dans le fichier pico_micro_ros_example.c)

## Commandes de base

Pour connecter le Picobot à ROS2, bien penser à lancer l’agent depuis le PC.

Depuis le paquet snap:

`micro-ros-agent udp4 --port 4444`

Depuis ROS2 (après avoir compilé la node. En cas de besoin, se référer à ce [tutoriel](https://micro.ros.org/docs/tutorials/core/first_application_linux/)):

`ros2 run micro_ros_agent micro_ros_agent udp4 --port 4444`

Depuis un conteneur Docker:

`docker run -it --rm -v /dev:/dev --privileged --net=host microros/micro-ros-agent:humble udp4 --port 4444`

(Bien penser à changer le numéro de port si nécessaire)

### Téléopération

Pour commander le Picobot, nous avons implémenté un utilitaire de téléopération à partir du clavier, basé sur le package [turtle_teleop](http://wiki.ros.org/turtle_teleop) de ROS.

`ros2 run picobot picobot_keyboard`

### Monitoring du robot

Pour observer la configuration actuelle des capteurs et les commandes en direction du robot lancer la node `picobot_listener` avec la commande suivante:

`ros2 run picobot picobot_listener`

Vous pouvez également monitorer l’ensemble des topics depuis `rqt`.

Lancer la commande `rqt`. Si le “Topic Monitor” ne s’affiche pas, le démarrer en sélectionnant l’onglet `Plugins -> Topics -> Topic Monitor`.

## Node `picobot_line_follower`

Cette node pose les fondements du parcours du Picobot dans le labyrinthe et expose un exemple de résolution à partir de la stratégie “tribord” selon laquelle le robot tourne à droite dès que possible. Ici, on s’attache à suivre une ligne jusqu’à se retrouver au centre d’une case depuis laquelle on décidera de la marche à suivre (tourner à droite si possible, avancer sinon, tourner à gauche, ...). Pour lancer cette node, placer le robot dans le labyrinthe puis taper la commande suivante:

`ros2 run picobot picobot_line_follower`

## NODE `picobot_maze_solving`

Cette node n’a pas été implémentée. Ici, il faudrait réimplémenter la partie résolution du labyrinthe de simulateur. Cette node nous permettrait de résoudre des labyrinthes en spécifiant leur taille, le nombre de robots à inclure dans la résolution et le type d’algorithme  de résolution; et de récupérer la position des robots en temps réel.
