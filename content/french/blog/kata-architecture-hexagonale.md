---
title: "France Travail - Kata architecture Hexagonale"
meta_title: ""
description: ""
date: 2025-04-10T05:00:00Z
image: ""
categories: ["case studies"]
author: "David Berthier"
tags: []
draft: false
---

Nous proposons un Kata sur l'architecture hexagonale que nous avons joué à l'occasion d'une conférence interne pour les développeurs de la DSI France travail.

## Objectif de l'atelier

L'objectif de l'atelier est de faire découvrir l'architecture hexagonale aux participants.
Il peut s'agit de développeurs ou de tout autre profil intéressé par ce pattern.

## Pré requis

L'atelier propose une découverte sans avoir à utiliser de code ni d'ordinateur ce qui le rend accessible à un public large et très facile à déployer.  
L'atelier ne s'appuie pas sur un langage de développement particulier.  
Les participants ont seulement besoin de connaitre les concepts généraux de conception.

## Description du contexte

L'atelier s'appuie sur le thème "Retour vers le futur".  

Le pitch utilisé dans le cadre de ce hands on est le suivant :
La McFly Compagnie, leader du voyage temporel, entreprend une refonte de son système pour sécuriser les déplacements à travers le temps et collaborer avec la ChronoCorp, spécialiste multitemporel. Ce hands-on se concentre sur la création d’une API de régulation des voyages, garantissant la sécurité de l’espace-temps en validant les périodes sensibles et les risques d’interférences historiques. En parallèle, il explore l’intégration de flux de données non linéaires et de contrôles avancés des anomalies temporelles, en exploitant des bases externes pour répondre aux exigences croissantes de fiabilité et d’interopérabilité.

Ce cas d'utilisation est la base sur laquelle nous nous appuyons lors de ce hands on pour introduire et avoir un premier contact avec l'architecture hexagonale.

## Description des ressources

### Trame Kata architecture hexagonale

La trame d'animation à suivre pendant le hands on avec les différentes étapes et une proposition de réponse aux exercices. Attention il est important de retenir qu'il n'y a pas une unique "bonne" réponse à cet exercice. Les réponses proposées ne se posent pas en réponse unique.

![image](./images/blog/kata-architecture-hexagonale/trame-kata.png)

### Event storming

L'event storming proposé au participants pour explorer le domaine métier de notre sujet. En pratique sur le hands on seule une partie de l'events storming est réellement utilisée. Le reste de l'event storming est proposé pour avoir une vision plus large du domaine et, pourquoi pas, ajouter d'autres exercices sur la base de ce périmètre métier à terme.

![image](./images/blog/kata-architecture-hexagonale/event-storming.png)

### Supports

Les support présenté aux participants avec les uses cases sur lesquels on leur propose de proposer une solution :

* [Support - Format PDF](/download/kata-architecture-hexagonale/support-pitch.pdf)
* [Support - Format PPT](/download/kata-architecture-hexagonale/support-pitch.pptx)
* [Cheat sheet - Format PDF](/download/kata-architecture-hexagonale/cheat-sheet.pdf)
* [Cheat sheet - Format PPT](/download/kata-architecture-hexagonale/cheat-sheet.pptx)
