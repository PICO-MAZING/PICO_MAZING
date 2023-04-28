---
sidebar_position: 1
---

# Réflexion sur la mise en place du serveur

## Objectifs
Le principe d'un serveur dans notre cas est de pouvoir héberger l'agent Micro-ROS. Nous avons donc opté pour un Raspberry Pi 4b. Qui est petit et transportable.
De plus, nous voulions un appareil embarquant le wifi, lui permettant de communiquer. Donc nous optons pour que notre serveur crée un point d'accès pour le robot. Pour gérer le wifi nous utilisons RaspAP qui est un outil qui permet de gérer le wifi de notre raspberry pi.  
Notre agent Micro-ROS a besoin de docker, un outil de virtualisation. De plus, pour nous aider à faire de la gestion nous allons utiliser Portainer qui crée un dashboard pour gérer nos conteneurs.
