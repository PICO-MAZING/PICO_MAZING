---
sidebar_position: 3
---

# Mise en place du développement sur PC

##  Configuration du PC 
Le Picobot a été programmé sur la version humble de ROS2. Ce guide suivra donc les instructions spécifiques correspondant à cette version de ROS2.
Nous vous recommandons d'utiliser Ubuntu (En WSL pour Windows)

### Installation de ROS2 🤿

Pour installer ROS2 - humble, veuillez vous référer aux instructions suivantes : [Installation ROS2 Humble](https://docs.ros.org/en/humble/Installation.html)

:::tip
Pour plus de flexibilité, notez qu’il est possible d’installer ROS2 au travers d’un conteneur (LXD, docker).

Pour plus d’informations, consulter: [ROS development with LXD](https://ubuntu.com/blog/ros-development-with-lxd), [Running ROS 2 nodes in Docker](https://docs.ros.org/en/humble/How-To-Guides/Run-2-nodes-in-single-or-separate-docker-containers.html), [ROS Docker](http://wiki.ros.org/docker/Tutorials/Docker) et [Docker GUI](http://wiki.ros.org/docker/Tutorials/GUI).

Pour utiliser les applications graphiques de ROS depuis Docker, nous avons également rédigé un succinct tutoriel résumant les étapes nécessaires à la mise en place de l’environnement: [ROS GUI DOCKER](https://github.com/PICO-MAZING/ros_gui_docker).
:::

:::tip

Sur Windows vous pouvez utiliser WSL2 pour installer Ubuntu et ROS2. Pour plus d'informations, consulter: [WSL2](https://docs.microsoft.com/fr-fr/windows/wsl/install-win10)
:::

### Installation de micro-ros 🔬

Pour installer micro-ros, veuillez suivre les instructions suivantes : [Installation micro-ros](https://micro.ros.org/docs/tutorials/core/first_application_linux/).

À noter qu’ici, il est important d’installer l’agent micro-ros, qui est également téléchargeable en standalone via l’utilitaire snap d’Ubuntu via la commande ``` sudo snap install micro-ros-agent```

### Configuration du Raspberry Pi Pico W 
Pour configurer le robot, veuillez suivre les instructions disponibles sur notre répertoire git : [micro-ros pico wifi](https://github.com/PICO-MAZING/uros_pico_w) (bien penser à entrer la bonne configuration internet dans le fichier pico_micro_ros_example.c)

# Commandes de base

Pour connecter le Picobot à ROS2, bien penser à lancer l’agent depuis le PC, [Voir la documentation serveur](../serveur/installation.mdx)

:::tip
Vous pouvez installer le serveur sur la même machine; vous pouvez le démarrer en executant la commande suivante: 
```docker run -it -d -p 8888:8888 microros/micro-ros-agent:foxy udp4 --port 8888```
:::

### Commande à distance

Utilitaire de téléopération (commandes de contrôle basiques)

```ros2 run picobot picobot_keyboard```

### Monitoring du robot

```ros2 run picobot picobot_listener```

Vous pouvez également monitorer l’ensemble des topics depuis rqt.
Lancer la commande `rqt`. Si le “Topic Monitor” ne s’affiche pas, le démarrer en sélectionnant l’onglet `plugins -> Topics -> Topic Monitor`

