---
title: "Gouvernance"
meta_title: "Gouvernance – Règles de décision et rôles du projet"
description: "Ce document définit le processus de gouvernance du Continuous Architecture Toolkit : rôles, responsabilités, prise de décision par consensus paresseux, et fonctionnement du comité de gouvernance."
draft: false
---

L’objectif de ce document est de **décrire le processus de prise de décision** et de définir les **règles sociales d’interaction** pour notre projet.

## Communauté

Si vous souhaitez contacter les responsables de ce projet, plusieurs canaux sont à votre disposition :

* **GitHub** : sur github.com, vous pouvez notifier toute l’équipe en utilisant le handle `@github/Continuous-Architecture-Toolkit`
* **Slack** : nous sommes assez actifs sur Slack

### Rôles et responsabilités

* **Utilisateurs** : membres de la communauté qui ont un besoin du *Continuous Architecture Toolkit*. Ils sont les membres **les plus importants** du projet — sans eux, celui-ci n’aurait pas de raison d’être. Tout le monde peut être utilisateur ; il n’y a **aucune exigence particulière**. Nous encourageons les utilisateurs à participer à la communauté et à nous faire part de leurs retours autant que possible. Leur contribution permet à l’équipe du projet de mieux répondre à leurs besoins. Voir le [guide des contributeurs](/CONTRIBUTING.md) pour plus de détails.

* **Contributeurs** : membres de la communauté qui contribuent **de manière concrète** au projet. Il peut s’agir de personnes identifiant des besoins, signalant des bugs, apportant des améliorations via des pull requests, promouvant le projet ou aidant la communauté à se développer. Voir le [guide des contributeurs](/CONTRIBUTING.md) pour plus de détails.

* **Mainteneurs** : responsables de l’orientation du projet, engagés dans son amélioration à long terme.  Ce sont les **seules personnes disposant des droits de commit** sur le projet.

### Processus de prise de décision

Le mécanisme de décision par défaut du projet *Continuous Architecture Toolkit* repose sur le principe du [consensus paresseux (*lazy consensus*)](http://www.apache.org/foundation/how-it-works.html#decision-making).  
Cela signifie que toute décision est considérée comme approuvée par l’équipe, tant qu’aucune objection n’est exprimée.

Le silence vaut accord implicite, équivalent à un accord explicite. L’accord explicite peut naturellement être formulé à tout moment.

En cas d’objection, les membres de l’équipe travaillent ensemble pour aboutir à une solution **acceptable par tous** — elle sera de nouveau soumise au principe du *lazy consensus*.

#### Politique de commit

Pour approuver une modification proposée par un contributeur, le projet applique une politique *Review-Then-Commit* :  
toute pull request doit obtenir l’approbation par *lazy consensus* d’au moins un mainteneur (vote +1 contraignant) **et aucune opposition (-1)**, afin d’être intégrée.

#### Comité de Gouvernance

Le comité de gouvernance est chargé de traiter les sujets nécessitant un consensus, tels que :

* Superviser les pull requests, s’assurer de l’absence de problèmes de droits ou de licences, et vérifier la cohérence avec la direction souhaitée pour le projet
* Superviser les canaux de communication et la communauté afin de garantir un développement ouvert et transparent
* Décider des éléments officiellement distribués comme produits du projet — **toutes les versions doivent être validées par le comité**
* Orienter le projet dans la durée
* Veiller à une communauté productive et harmonieuse
* Proposer de nouveaux membres pour le comité (nouveaux mainteneurs)
* Gérer les ressources partagées du projet : dépôt de code, canaux de communication, sites web
* Représenter officiellement le projet
* Maintenir ces règles et tout autre guide associé

Le **Comité de Gouvernance** est l’organe principal de prise de décision.  
Il se réunit en visioconférence à la demande, avec participation ouverte à tous les mainteneurs.  
Tout mainteneur peut ajouter des sujets à l’ordre du jour de la réunion.

Les décisions y sont prises selon le principe du [*lazy consensus*](http://www.apache.org/foundation/how-it-works.html#decision-making), **à l’exception des nominations de nouveaux membres**.

#### Statut de membre mainteneur

Le statut de mainteneur peut être accordé à toute personne ayant contribué **de façon importante et continue pendant au moins 3 mois** au *Continuous Architecture Toolkit*.

Cela inclut notamment l’amélioration des assets, la documentation, l’organisation d’événements ou le support communautaire.

Les nouveaux membres peuvent être proposés par n’importe quel mainteneur actuel.  
Un consensus est fortement souhaité pour l’acceptation, mais la décision finale repose sur un **vote formel à la majorité** lors du comité (plus de votes +1 contraignants que de -1 contraignants).
