---
title: "Ré-architecture de notre solution de séchage"
meta_title: "Étude de cas – Refonte d’une solution industrielle avec le Domain Driven Design"
description: "Découvrez comment une solution de pilotage industriel dans le domaine du pneumatique a été repensée à l’aide du Domain Driven Design, de l’Event Storming aux contextes liés et aux cartes de scénarios."
date: 2021-07-04T05:00:00Z
image: "./images/blog/curing-domain/event_storming.png"
categories: ["case studies"]
author: "Olivier Jauze"
tags: []
draft: false
---

## Introduction

[Domain Driven Design](https://fr.wikipedia.org/wiki/Conception_guid%C3%A9e_par_le_domaine) (DDD) est un ensemble de concepts et de pratiques visant à aligner la structure et le langage du code logiciel avec le domaine métier qu’il soutient. Popularisé par Eric Evans, il a connu un fort regain d’intérêt ces dernières années. Une des principales difficultés lorsqu’on souhaite adopter le DDD pour modéliser et concevoir une solution est la suivante : **« Par où diable commencer ? »**

Nous avons rédigé cette étude de cas, inspirée d’un cas réel, pour présenter une approche permettant d’appliquer le DDD en tant qu’architecte concevant un produit. Ce n’est pas la seule approche possible, mais elle peut servir de guide utile.

## Contexte

Dans l’industrie du pneu, les pneus sont fabriqués par cuisson ou vulcanisation d’un pneu brut, appelé "green tyre", composé de couches de caoutchouc et de métal. Ce processus se déroule dans les ateliers de cuisson des usines, où des lignes de presses (press lines) sont pilotées en parallèle par un système d’information. Vu de haut, le processus est simple : pour pouvoir cuire un type de pneu donné, il faut d’abord transmettre la recette de cuisson à la ou les presses, et assembler puis monter les outillages (moule et vessie) dans la presse. La presse consomme ensuite le premier pneu brut, tout en transmettant des informations tout au long du cycle. Une fois le cycle terminé, les données finales permettent de contrôler la qualité, de créer des non-conformités si besoin, et de générer la fiche de cuisson (véritable "acte de naissance" du pneu). La presse appelle alors le pneu suivant, et continue à transmettre des données de monitoring de son état.

## Comment avons-nous appliqué le DDD dans ce contexte ?

### Explorer le domaine avec un Event Storming

Avant de parler architecture, il faut d’abord modéliser le domaine métier — ici, la cuisson des pneus. Une bonne pratique pour commencer est l’**Event Storming**, un atelier collaboratif où l’on modélise le domaine à l’aide d’événements métiers disposés sur une frise temporelle.

L’objectif n’est pas de concevoir la solution technique, mais de **découvrir le domaine**. Deux points essentiels à respecter :

* Être explicite et sans ambiguïté dans les termes utilisés. Ce vocabulaire partagé s’appelle le **langage omniprésent** (*ubiquitous language*).
* Rester concentré sur le métier, pas la technique.

Voici l’Event Storming que nous avons réalisé pour notre domaine via Miro :

![image](./images/blog/curing-domain/event_storming.png)

### Découper le domaine en *bounded contexts*

Une fois l’Event Storming terminé, il est temps d’identifier les *bounded contexts*. Ces contextes permettent de simplifier l’architecture en séparant les préoccupations. Chacun peut évoluer à son propre rythme, avec son propre stack technique, voire sa propre équipe.

Il n’existe pas de recette miracle pour identifier les contextes, mais certains critères peuvent aider (voir figure ci-dessous) : différences de langage, de chaînes de valeur, d’exigences non fonctionnelles (performance, scalabilité…), ou encore de rythme de changement.

![image](./images/blog/curing-domain/context_decomposition.png)

Dans notre cas, cela nous a menés à 3 types de contextes :

* **Contextes supports** : fournissent des référentiels (gammes, recettes…), gèrent les équipements et outillages (moules, vessies).
* **Contextes cœur** : gèrent la mise en presse des pneus bruts, la création des fiches de cuisson, la gestion des arrêts, etc.
    * La presse elle-même est un gros contexte non découpable, car son logiciel embarqué ne permet pas d’architecture modulaire.
* **Contextes externes** : hors du domaine métier, mais avec lesquels il faut interagir.

Nous avons ensuite identifié les **événements pivots**, émis par un contexte et consommés par un autre :

![image](./images/blog/curing-domain/bounded_contexts2.jpg)

### Définir les couplages avec une *context map*

Même avec des contextes autonomes, des dépendances subsistent. La **context map** offre une vision d’ensemble des relations entre contextes, et donc entre équipes.

Il existe 3 types de relations entre équipes :

* **Libres** : pas de lien
* **Mutuellement dépendantes**
* **Amont/aval** : les décisions de l’amont impactent l’aval, mais pas l’inverse

![image](./images/blog/curing-domain/teams_relationships.png)

Puis, il existe 9 **patterns d’intégration** pour caractériser les relations entre contextes :

![image](./images/blog/curing-domain/integration_patterns.png)

<sup>ref 1</sup> Avec l’aimable autorisation de [ddd crew](http://github.com/ddd-crew/bounded-context-canvas)

Arbre de décision proposé pour un lien amont/aval :

* Si le langage est standard dans l’entreprise → **Published Language**
    * Avec API : combiner avec **Open/Host Service**
* Sinon, si l’aval est considéré comme **client** → **Customer/Supplier**
* Sinon → **Anti-Corruption Layer**

Nous recommandons **d’éviter** si possible : *Shared Kernel*, *Partnership* et *Conformist* qui induisent un couplage fort.

Voici la *context map* de notre cas :

![image](./images/blog/curing-domain/contexts_map.png)

Exemples de décisions prises :

* Certains contextes (équipements, équipes) sont standardisés → **Conformist**
* La **performance TRS** (Taux de Rendement Synthétique) est un standard → **Published Language**
* La **fiche de cuisson** est un événement partagé → **Published Language**
* Le plus souvent, **Anti-Corruption Layer** pour préserver l’autonomie des contextes
* Un cas de **Customer/Supplier** avec l’ERP (gestion des stocks de vessies)

### Décrire chaque contexte en détail

Prochaine étape : utiliser un **Bounded Context Canvas** pour décrire les responsabilités et interactions de chaque contexte.

* Partie gauche : communications entrantes (commandes, requêtes, événements)
* Partie droite : communications sortantes
* Centre :
  * **Langage omniprésent**
  * **Règles métier**

Exemple : contexte "Recette de cuisson"

![image](./images/blog/curing-domain/context_canvas.png)

### Décrire la dynamique de bout en bout

Le *canvas* est utile pour modéliser chaque contexte, mais il perd la vue d’ensemble. C’est pourquoi nous complétons avec un outil de scénario, basé sur un parcours utilisateur. Cela permet de décrire les tâches et événements déclenchés dans plusieurs contextes.

Exemple : scénario autour de la recette de cuisson.

![image](./images/blog/curing-domain/scenario.png)

## Réflexions complémentaires

Encore une fois, cette approche n’est **qu’un exemple** d’application du DDD. Ce n’est ni universel, ni unique. Adaptez-la selon votre contexte.

On peut aussi appliquer le DDD à un niveau supérieur, pour décrire un domaine métier complet. Dans ce cas, les *bounded contexts* représentent des **produits** qui eux-mêmes pourraient être modélisés en DDD. Seule la granularité change.
