---
title: "Organisation"
meta_title: "Vue Organisation – Aligner structure d’équipe et architecture cible"
description: "La vue Organisation du CAF propose un modèle structurant basé sur les Operating Units, les Team Topologies et l’Inverse Conway Maneuver pour aligner les équipes sur la valeur et limiter la charge cognitive."
draft: false
---

## Organisation

La vue Organisation représente la décomposition hiérarchique de l’entreprise en un modèle organisationnel. Le schéma ci-dessous décrit la manière dont le CAF suggère de modéliser votre organisation.

![image](./images/framework/organization.svg)

Nous devons compléter la décomposition structurelle de l’entreprise en Unités Opérationnelles :

* Verticalement, en définissant les équipes qui composent les Unités Opérationnelles  
* Horizontalement (dimensions organisationnelles), en précisant comment le pouvoir est réparti, quelles compétences sont requises, quels systèmes de gestion doivent être mis en place, quelles sont les nouvelles façons de travailler, les croyances, l’état d’esprit et les comportements qui doivent devenir la norme

Le CAF propose du contenu couvrant chacune de ces dimensions organisationnelles, par exemple à travers un ensemble de [pratiques](../practices) et de [rituels](../rituals).

[Team Topologies](https://teamtopologies.com) est aujourd’hui très populaire dans notre secteur, et nous pensons qu’il est tout à fait pertinent dans le contexte de notre architecture. Le schéma ci-dessous présente le modèle générique de topologies d’équipes selon le CAF.

![image](./images/framework/team-topologies.svg)

Comme vous pouvez le constater, nous mettons l’accent sur deux des quatre topologies. Cela ne signifie pas que les équipes « sous-systèmes complexes » ou « d’habilitation » ne sont pas utiles, mais selon nous, les **équipes alignées sur le flux de valeur** (*stream-aligned*) et les **équipes plateforme** sont les plus importantes. Les premières sont directement alignées (comme leur nom l’indique) avec le flux de valeur et la notion de produit. Les secondes promeuvent l’idée que les équipes plateforme peuvent **réduire la charge cognitive** des équipes produit en leur fournissant des plateformes en libre-service. Offrir des services simples à consommer, comme un cluster Kubernetes, aide en effet les équipes alignées à se concentrer sur la création de valeur.

Lors de la définition de la structure organisationnelle, il est important de prendre en compte :

* La [loi de Conway](https://fr.wikipedia.org/wiki/Loi_de_Conway), qui stipule que « toute organisation qui conçoit un système (au sens large) produira un design dont la structure reflète celle de sa propre structure de communication ». Il est donc très probable que vous y soyez soumis, comme nous le sommes tous. Plutôt que de la subir, vous pouvez appliquer la **manœuvre de Conway inversée**, qui recommande de faire évoluer votre structure organisationnelle pour soutenir l’architecture cible. C’est simple à comprendre, mais puissant à mettre en œuvre.
* La **charge cognitive** d’une équipe n’est pas un sujet nouveau. Ce qui est nouveau, c’est de commencer à la prendre en compte pour préserver l’efficacité de l’équipe. L’ignorer, c’est voir l’efficacité et la capacité à délivrer de la valeur diminuer, pendant que le backlog en cours, lui, explose. Le **nombre de Dunbar** est souvent évoqué à ce sujet. Il fait référence à une recherche de l’anthropologue **Robin Dunbar** sur le nombre de personnes avec lesquelles une relation sociale stable est possible : environ 150. Plus intéressant encore : on peut entretenir une relation de confiance profonde avec environ 15 personnes, et une relation très proche avec environ 5. Appliqué au monde de l’entreprise et à la livraison de produits IT, cela nous conduit à dire qu’une équipe agile efficace ne devrait pas dépasser **9 personnes**. Cela permet de **garder la charge cognitive sous contrôle** en limitant le nombre d’interactions quotidiennes nécessaires.
