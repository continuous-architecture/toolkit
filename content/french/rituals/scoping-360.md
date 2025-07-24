---
title: "Rituels"
meta_title: "Atelier d’architecture Scoping 360"
description: "Atelier collaboratif visant à construire l’architecture d’un produit de manière progressive et itérative dans le cadre d’un MVP. L'approche 360° permet de couvrir l’ensemble des dimensions techniques, organisationnelles et opérationnelles."
draft: false
---

## Atelier d’architecture Scoping 360

Cet atelier d’architecture fait partie de l’approche xref:scoping360.adoc[Scoping 360°] que nous proposons lors de la création d’un produit. Pour esquisser l’architecture d’un produit, nous avons défini une séquence qui vous permet de couvrir tous les aspects de l’architecture de manière 360°. L’objectif est de définir collectivement et progressivement l’architecture de vos produits, mais aussi de produire le minimum d’artefacts d’architecture nécessaires. Car oui, nous croyons que des documents d’architecture doivent être produits.

Deux messages importants ici :

* Ce rituel ne doit pas être utilisé uniquement au début du cycle de vie de votre produit, mais à chaque itération majeure ou Minimum Viable Product (MVP). Vous pouvez adapter la séquence en fonction de vos besoins. Il est évident que vous passerez plus de temps au démarrage que pour les MVPs suivants.
* Il est essentiel de concentrer vos discussions sur le prochain incrément de produit (c’est-à-dire le MVP). Ne cherchez pas à répondre à toutes les questions pour définir une architecture cible ultime.

![image](./images/rituals/scoping-architecture.png)

## Comment avons-nous construit cette séquence ?

* Cela commence généralement par un atelier d’event storming pour découvrir (ou redécouvrir) votre domaine et identifier les bounded contexts. Cela nous "force" également à penser notre système en termes d’événements métiers réels plutôt qu’en échanges de messages entre applications logicielles.
* Définir des bounded contexts est utile pour garantir la modularité de votre système, mais aussi pour adapter et optimiser l’organisation qui le développera.
* Ensuite, nous décrivons chaque contexte et leurs relations à travers les fameux patterns d’intégration stratégique.
* Pour ne pas perdre de vue l’écosystème de bout en bout, relier les contextes qui couvrent des cas d’usage métier complets est utile. Cela permet aussi de s’assurer que la décomposition reste cohérente.
* Avant de passer à la description détaillée de chaque contexte, il est intéressant de réfléchir à leur mode de réalisation. Comment allez-vous mettre en œuvre un contexte qui est au cœur de votre business ou source de différenciation ? Faut-il le développer ou s’appuyer sur une solution du marché ?
* Une fois ce design (et cette décomposition) établi, on peut passer au choix de la stack technologique et à la façon dont vous allez la déployer et l’opérer. On y retrouve notamment l’intégration et le déploiement continus (CI/CD), le monitoring, l’observabilité, etc.
* Tout au long de la démarche, il est essentiel d’enregistrer vos décisions d’architecture.

Les visuels ci-dessous sont extraits d’un board [Miro](https://miro.com/) que nous avons créé. Miro est un outil collaboratif en ligne parfaitement adapté à ce type d’atelier. Vous y reconnaîtrez la séquence que nous venons de décrire.

Le fichier de sauvegarde du board est disponible [ici](/download/rituals/workshop-architecture.rtb)

![image](./images/rituals/misc/workshop-architecture-1-2.png)
![image](./images/rituals/misc/workshop-architecture-3-4.png)
![image](./images/rituals/misc/workshop-architecture-5-6.png)
![image](./images/rituals/misc/workshop-architecture-last.png)
