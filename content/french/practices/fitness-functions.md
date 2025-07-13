---
title: "Fitness Functions"
meta_title: "Fitness Functions – Protéger l’architecture grâce à des vérifications automatisées"
description: "Découvrez comment les Fitness Functions permettent de préserver les caractéristiques clés de votre architecture en les mesurant régulièrement et automatiquement."
draft: false
---

## Fitness Functions ou comment protéger les caractéristiques clés de votre produit

La Continuous Architecture soutient le changement guidé et incrémental comme principe fondamental. Les *Fitness Functions* peuvent aider à évaluer dans quelle mesure un système respecte certains objectifs et contraintes architecturales, de manière automatisée. Elles permettent aux architectes de **communiquer, valider et préserver** les caractéristiques architecturales de manière automatisée et continue, ce qui est essentiel pour construire une Continuous Architecture.

Une *fitness function* est utilisée pour résumer dans quelle mesure une solution de conception donnée atteint ses objectifs. Lorsqu’on définit une solution évolutive, la fitness function sert à exprimer ce que signifie « mieux » dans ce contexte. Une *fitness function architecturale*, telle que définie dans [Building Evolutionary Architectures](http://www.thoughtworks.com/books/building-evolutionary-architectures), fournit une évaluation objective de l’intégrité de certaines caractéristiques architecturales à préserver. Il s’agit souvent de ce qu’on appelle les exigences non fonctionnelles.

Les bénéfices des *fitness functions* sont nombreux, en voici quelques-uns :

* Communiquer, valider et préserver les caractéristiques architecturales de manière automatisée et continue.
* Clarifier les performances attendues de l’architecture produit et la définition de “fini”.
* Réagir en temps réel lorsqu’une caractéristique importante échoue.
* Appuyer la préparation du plan de refactoring et de la *runway* architecturale.
* Permettre à un architecte de formuler des exigences architecturales vérifiables dans le pipeline de construction.
* Intégrer les contraintes et ambitions DevOps dans les travaux d’architecture.

L’illustration ci-dessous montre les différents types de *fitness functions* :

![image](./images/practices/misc/fitness-functions-types.png)

* **Atomique vs Holistique**
  * Les fonctions atomiques s’appliquent à un contexte spécifique et testent un aspect particulier de l’architecture (ex : couplage, complexité cyclomatique).
  * Les fonctions holistiques couvrent un ensemble de caractéristiques (ex : sécurité + scalabilité).

* **Déclenchée vs Continue**
  * Les fonctions déclenchées s’exécutent sur événement (ex : tests unitaires, CI/CD).
  * Les fonctions continues s’exécutent en permanence (ex : vitesse de transaction en production via *Monitoring Driven Development*).

* **Statique vs Dynamique**
  * Les fonctions statiques produisent un résultat fixe (ex : succès/échec).
  * Les fonctions dynamiques s’adaptent au contexte (ex : objectif de performance variable selon la charge).

* **Automatisée vs Manuelle**
  * Les fonctions automatisées sont intégrées aux outils CI/CD.
  * Les fonctions manuelles (ex : exigences légales) nécessitent une validation humaine.

## Définir une fitness function en 3 étapes

> Que veut-on mesurer ?  
> Comment va-t-on le mesurer ?  
> Quand va-t-on le mesurer ?

L’image ci-dessous illustre cette pratique et sa mise en œuvre dans une équipe :

![image](./images/practices/kit-fitness-functions.jpeg)

1. Votre première activité sera de choisir les caractéristiques à suivre en fonction du contexte de votre produit. Cela peut être le temps de réponse, la scalabilité, la conformité à une norme, ou encore la complexité du code pour préserver le time-to-market.  
   Exemple : [Neal Ford](http://nealford.com/) suit dans ses livres le nombre de pronoms genrés. Cela montre bien à quel point une fitness function dépend de votre contexte et de vos priorités.

   Pourquoi vouloir protéger ces caractéristiques ? Parce qu’à défaut, elles se dégraderont à mesure que votre produit évolue. Cette pratique vise à les mettre régulièrement en lumière. Un bon point de départ est d’identifier les enjeux d’architecture de votre produit (ou ceux imposés par votre organisation), puis de sélectionner les exigences non fonctionnelles pertinentes à surveiller.

2. Pour chaque fonction, vous devez définir ce que vous mesurez et comment vous le mesurez (avec préférence pour l’automatisation). Définissez :
   * une valeur de référence,
   * un objectif cible,
   * un seuil d’échec.

   Chaque fitness function doit avoir un responsable chargé de garantir sa mesure régulière.

3. Le “quand mesurer” dépend de votre capacité à le faire en continu. Certaines fonctions peuvent l’être (ex : complexité à chaque build), d’autres non.

## Suivi et gouvernance

Une fois vos *fitness functions* définies, rassemblez-les dans un tableau de suivi à examiner chaque semaine. Pour celles qui échouent, un plan d’action doit être établi pour les remettre sur les rails. Cette rigueur est essentielle pour éviter des problèmes majeurs en production.

L’objectif de cette pratique est de **prévenir** les dégradations invisibles jusqu’à ce qu’elles affectent brutalement l’utilisateur final.

Nous vous recommandons de **limiter le nombre de fitness functions** suivies simultanément :  
3 au début, 5 à 6 pour une équipe expérimentée.

![image](./images/practices/misc/fitness-functions-board.png)
