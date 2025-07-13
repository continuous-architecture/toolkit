---
title: "Scoping 360"
meta_title: "Scoping 360° – Aligner l’équipe sur la vision produit et la livraison"
description: "Scoping 360° est un cadre collaboratif pour aider les équipes agiles à s’aligner sur une vision produit claire, une architecture adaptée et une feuille de route de livraison efficace."
draft: false
---

## Scoping 360°

> 📝 Note : Le kit *Scoping 360°* est une évolution majeure de la pratique interne Michelin *Value Driven Design / Design Event*, décrite dans le livre [Agile with Guts](https://www.infoq.com/minibooks/agile-guts/) (2010). Cette évolution s'inspire notamment de la méthode [360° Agile Scoping d’OCTO](https://blog.octo.com/le-cadrage-360-preparez-vos-projets-de-delivery-agile/).

L’objectif du *Scoping 360°* est de préparer au mieux une équipe agile à livrer un produit **juste**, **rapide** et **bien intégré** dans son écosystème. C’est une pratique qui s’appuie sur une série d’ateliers collaboratifs adaptés au contexte, généralement organisés aux frontières d’un MVP ou d’une nouvelle release.

![image](./images/framework/from-idea-to-retirement.png)

## Principes directeurs

* **Time-boxé** : pour converger rapidement. La durée varie de 2 à 6 semaines selon le contexte, mais une fois planifié, le cadrage a une date de fin fixe.
* **Unité de temps et de lieu** : tous les participants concernés par un thème participent au même moment et au même endroit (virtuel ou physique).
* **Incrémental et évolutif** : l’objectif est d’être prêt à livrer la **prochaine release**, pas toutes celles à venir.
* **Vue complète (360°)** : le cadrage aborde toutes les dimensions nécessaires à une vision holistique du produit.
* **Collaboratif et plaisant** : apprendre ensemble, dans un cadre productif et engageant.

![image](./images/practices/scoping360-workshops.png)

## Dimensions couvertes

Le *Scoping 360°* adresse tous les sujets que l’équipe devra traiter pour délivrer le produit :

* **Produit** : vision, proposition de valeur, problèmes à résoudre, recherche utilisateurs, storymap, roadmap...
* **Organisation** : rôles, responsabilités, risques, compétences, standards d’équipe...
* **Technique** : architecture fonctionnelle et technique, devops, stratégie de test, pratiques de développement...

Les ateliers mêlent des pratiques issues du Lean, de l’Agile, du Design Thinking, de l’ingénierie logicielle et de la Continuous Architecture, afin de :

* Comprendre les problèmes à résoudre
* Construire une vision produit partagée
* Définir l’organisation de l’équipe
* Identifier et adresser les risques
* Définir l’architecture cible
* Structurer le design produit
* Planifier le MVP

![image](./images/practices/misc/scoping360-goals.png)

## Atelier Architecture dans le Scoping 360°

Une séquence d’ateliers permet de construire **collectivement** l’architecture cible du produit tout en produisant les **livrables minimums** nécessaires :

![image](./images/practices/misc/scoping360-architecture.png)

1. **Partage de connaissances**  
   Comprendre la situation actuelle, identifier les solutions existantes, les problèmes récurrents, les feedbacks utilisateurs, données d’exploitation, etc.  
   *(Optionnel si produit neuf)*

2. **DDD & Event Storming**  
   Utilisation des pratiques de *Domain Driven Design* (espace problème déjà partiellement couvert en amont).  
   Identification des événements métier, langage omniprésent, *bounded contexts* et leurs interactions.

3. **Définition de l’architecture cible**  
   À partir des *bounded contexts*, définir une architecture modulaire, adaptée, évolutive.  
   Chaque contexte peut avoir ses propres contraintes exprimées sous forme de [fitness functions](./fitness-functions).

4. **Choix technologiques**  
   Pour chaque *context* :  
   * Développement interne ou solution marché (SaaS/COTS)  
   * Stack technique (langage, middleware, hébergement, réseau…)

5. **Chaîne CI/CD**  
   L’architecture doit permettre une **intégration et un déploiement continus**.  
   Toute décision architecturale incompatible avec la CI/CD doit être remise en question.

6. **Vérification de l’opérabilité**  
   Dernier atelier : s’assurer que le produit sera **opérable en production**.  
   Logging, monitoring, gestion des erreurs, reprise après incident, résilience...  
   *(À considérer dès le début, mais revu en fin de cadrage)*

Le Scoping 360° constitue un **point de départ structurant**. Il n’est ni figé ni parfait, mais il donne à l’équipe les **meilleures chances de démarrer avec une vision claire, partagée et actionnable**.
