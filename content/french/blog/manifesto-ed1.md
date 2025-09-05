---
title: "Manifeste de la Continuous Architecture - Edition 1.0 (2019)"
meta_title: "Manifeste de la Continuous Architecture"
description: "Ce manifeste présente les croyances et principes fondateurs de la Continuous Architecture, une approche moderne de l’architecture logicielle alignée avec la livraison continue et la résilience produit."
date: 2025-07-08T05:00:00Z
image: "./images/manifesto/manifesto.jpg"
categories: ["archives"]
author: "Romain Chapon"
tags: []
draft: false
---

Ce document est la **première édition (1.0) du Manifeste Continuous Architecture**, publiée initialement en 2019.  
Il présente l’ensemble des convictions et principes fondateurs qui ont servi de base à l’approche Continuous Architecture.  

⚠️ Une version plus récente est disponible : [Manifeste Continuous Architecture – Édition 2.0](/manifesto).  
Nous encourageons les lecteurs à se référer à cette nouvelle édition pour une vision actualisée.

---

Ce manifeste de la **Continuous Architecture** vise à fournir un ensemble clair de **convictions** et de **principes** pour notre **modèle opérationnel d’architecture**.  
Il ne cherche **pas à concurrencer** d’autres manifestes célèbres (par exemple : [Manifeste Agile](https://agilemanifesto.org), [Manifeste Réactif](https://www.reactivemanifesto.org)).  
Il reflète une transition entre une approche traditionnelle en cascade avec de gros designs en amont, vers une **logique de piste continue**.

## Nous architecturons des produits durables, pas uniquement des solutions projet

Considérez vos activités d’architecture comme une **piste d’envol continue**, qui accompagne le produit tout au long de son cycle de vie — de la naissance à la fin. Cela signifie : prendre des décisions, concevoir de nouvelles fonctionnalités, reconsidérer ou réviser ce qui a été fait en fonction du nouveau contexte.  
La conception doit être **robuste face aux changements futurs**. Ce mode de pensée est **beaucoup plus difficile à appliquer dans une logique projet**, d’autant que vous changez souvent de projet, entraînant des pertes de temps ou d’information.

## Nous architecturons nos produits avec une vision holistique

Cette idée repose sur deux dimensions complémentaires :  

1. Une **vue fullstack** de l’architecture (infrastructure, réseau, middleware, application, urbanisation)  
2. Une **intégration cohérente** dans le système global — en particulier dans les échanges avec les autres systèmes

## Nous validons l’architecture par l’implémentation, pas par des documents

Les **slides PowerPoint** et les **diagrammes Archimate** ne vont pas en production. Ce qui y va, c’est le **code écrit par l’équipe**.  
Et devinez quoi : **plus tôt, c’est mieux** 😉

## Les architectes partagent la responsabilité du produit final, y compris son exploitabilité

Lorsque vous concevez une solution, **gardez toujours à l’esprit que le produit sera réellement déployé**.  
Il doit donc être **pensé pour être opéré facilement**.

## L’architecture est une activité collective et une compréhension partagée, pas un document transmis d’une équipe à une autre

Un document d’architecture devient **obsolète dès qu’il est écrit**.  
Cela ne veut pas dire qu’il ne faut plus écrire, mais que **comprendre** l’architecture, les raisons des décisions, la vision fullstack du produit est **bien plus important**.  
Le rôle de l’architecte est de **transmettre cette compréhension à l’équipe**... et d’écrire **le minimum nécessaire** pour bien communiquer **en interne et en externe**.

## Retarder les décisions jusqu’au moment le plus responsable

C’est ce que l’on appelle le **"last responsible moment"**.  
Plus on attend, plus on a de **retours concrets**, et plus la décision pourra être **pertinente**.  
La difficulté du rôle d’architecte est de savoir **quand** décider :  
– trop tôt, on décide à l’aveugle ;  
– trop tard, le **coût du changement** devient élevé.

## Prioriser en fonction du risque : commencer par les fonctionnalités clients qui ont un fort impact architectural

Un exemple : vous souhaitez décomposer un monolithe. Vous avez le choix entre commencer par des fonctionnalités back-office ou visibles par les utilisateurs.  
Nous recommandons de **commencer par les fonctionnalités orientées utilisateur**.

Pourquoi ? Parce que **le risque est plus élevé**, mais **l’impact pour l’utilisateur le sera aussi**.  
Dans ce cas, adopter une **architecture microservices** permettra de livrer plus vite, de mieux isoler les changements et de **scaler différemment** les parties de votre produit.

![image](./images/manifesto/manifesto.jpg)
