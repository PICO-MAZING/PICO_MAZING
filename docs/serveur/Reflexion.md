---
sidebar_position: 1
---

# Réflexion sur la mise en place du serveur

## Objectifs
Dans notre projet, nous avons besoin d'un serveur capable d'héberger l'agent [Micro-ROS](https://micro.ros.org/docs/tutorials/core/first_application_rtos/). Après avoir examiné plusieurs options, nous avons choisi d'utiliser un Raspberry Pi 4b en raison de sa petite taille et de sa portabilité. Nous avons également opté pour un Raspberry Pi doté du wifi intégré, afin de permettre une communication fluide. Pour faciliter la gestion du wifi, nous avons décidé de configurer notre serveur pour créer un point d'accès pour le robot. Pour ce faire, nous utilisons [RaspAP](https://raspap.com), un outil qui nous permet de gérer le wifi de notre Raspberry Pi en toute simplicité.

En ce qui concerne l'agent Micro-ROS, nous avons constaté qu'il nécessitait l'utilisation de [Docker](https://docs.docker.com/engine/install/debian/), un outil de virtualisation. Pour faciliter la gestion de nos conteneurs, nous avons également choisi d'utiliser [Portainer](https://www.portainer.io/installation/). Ce dernier offre une interface utilisateur graphique qui permet de gérer facilement nos conteneurs et de suivre leur état en temps réel.