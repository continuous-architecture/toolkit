---
title: "Rôles d’architectes"
meta_title: "Rôles d’architectes"
description: "Comprendre les rôles architecturaux dans une approche Lean & Agile centrée sur le produit et l’autonomie des équipes."
draft: false
image: "images/roles/roles.png"
---

Aux côtés d’Yves Caseau, nous pensons *"que l’architecture dans une approche lean & agile n’est pas une discipline réservée aux experts, mais une compétence que tous les membres de l’équipe doivent posséder, à différents niveaux."* [^1]

C’est pourquoi nous souhaitons commencer par définir ce que nous entendons par architecture, voir [Qu’est-ce que l’architecture ?](what-is-architecture). Cela ne signifie pas que nous ne définirons pas de rôles d’architectes, bien au contraire. Cela implique que nous décrirons aussi la dimension architecturale des rôles non architectes, en particulier lorsque ces rôles ont une composante numérique.

## Une profusion de rôles d’architectes

Depuis une dizaine d’années, différents rôles d’architectes sont apparus : architectes d’entreprise, architectes de solution, architectes infrastructure, réseau, intégration, sécurité, données...

Derrière cette tendance, l’idée était que les rôles d’architectes devaient être organisés autour des "couches" représentant les spécialités de l’IT, et les maîtriser de bout en bout. Face au monde numérique et au besoin de livrer en continu des systèmes d’information modernes distribués, cela pose plusieurs problèmes :

1. Les architectes sont devenus hyper-spécialistes de leur domaine et ont perdu la vision globale du système. Cette approche très spécialisée ne permet pas de considérer tous les niveaux d’un produit – de l’infrastructure aux couches fonctionnelles – et mène à des décisions localement optimales mais sous-optimales à l’échelle globale.
2. Plus les connaissances s’accumulent dans une discipline, plus les échanges interdisciplinaires deviennent difficiles.
3. Cette approche en silos a mené à des situations où de nombreux architectes doivent collaborer sur un projet, augmentant le besoin de coordination, ralentissant la prise de décision.
4. Enfin, la plupart des architectes étaient positionnés en transverse, hors des équipes, rendant leur implication concrète difficile.

Du point de vue des équipes de delivery, une nuée d’architectes leur tombait dessus, chacun avec une vision, des compétences, des objectifs différents... Beaucoup d’équipes nous ont confié que cela pouvait être difficile d’aligner tout le monde sur une vision commune. Avec la Continuous Architecture, nous cherchons à simplifier la vie des équipes et à clarifier les rôles d’architectes.

Nos objectifs sont de :

1. Développer le jugement architectural des équipes pour renforcer leur autonomie
2. Développer une vision systémique (voir le tout)
3. Clarifier les rôles et responsabilités entre architectes, experts métiers ou IT et équipes de delivery

En respectant le principe que les architectes doivent se concentrer sur le système dans son ensemble, les préoccupations transverses (vision large), tandis que les designers / experts / spécialistes IT doivent se concentrer sur leur domaine (approfondissement), nous avons abouti à 3 rôles : Architecte d’entreprise, Architecte produit et Architecte fullstack.

{{< gallery dir="./images/roles" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

Détails disponibles :

* [Architecte d’entreprise](enterprise-architect)
* [Architecte produit](product-architect)
* [Architecte fullstack](fullstack-architect)

## Pourquoi seulement trois rôles ?

Précisons-le : en aucun cas nous ne disons que les autres rôles d’architectes n’existent plus ou ne sont plus utiles. Mais ils ne servaient pas notre objectif. Quelques exemples :

* Architectes réseau : le réseau peut être considéré comme un produit à part entière (certes complexe), qui peut donc avoir un architecte produit. Mais chaque équipe construit aujourd’hui des systèmes distribués et doit donc prendre en compte le réseau dans ses conceptions. Les experts réseau peuvent être sollicités ponctuellement si besoin.
* Architectes d’intégration ou de données : bien qu’ils puissent être utiles sur ces sujets complexes, ils ne sont pas dans les équipes, créant une dépendance et freinant leur montée en compétence.
* Architectes sécurité : personne ne nie l’importance de la sécurité. Le problème reste le même : on peut toujours solliciter un spécialiste sécurité, mais nous préférons des équipes responsabilisées, capables de traiter les sujets elles-mêmes, et de se faire accompagner en cas de besoin.

Un motif récurrent émerge ici : ces rôles spécialisés restent utiles, soit pour gérer leur propre produit (réseau, datacenters, middlewares d’intégration...), soit pour aider les équipes quand leurs compétences sont dépassées.

Tout en reconnaissant l’utilité de ces rôles spécialisés, nous avons voulu insister sur trois horizons :

* relier stratégie métier et architecture du système d’information : rôle de l’Architecte d’entreprise
* concevoir des produits qui répondent aux attentes des utilisateurs : rôle de l’Architecte produit, proche des utilisateurs et du Product Owner
* concevoir les produits comme des systèmes distribués : rôle de l’Architecte fullstack, inspiré du développeur fullstack

## Équiper les équipes avec les bonnes compétences

Les équipes produit doivent gérer de nombreuses activités, qui nécessitent des compétences variées. Et comme vous l’avez compris, on leur demande aussi de faire de l’architecture.

Rôles, intitulés de poste et personnes sont trois choses différentes :

* Un rôle est un ensemble d’activités à mener au sein de l’équipe.
* Une personne peut remplir un ou plusieurs rôles selon ses compétences et son appétence. Nous avons vu des cas où les rôles d’Architecte produit et d’Architecte fullstack étaient tenus par la même personne.
* Il est tout à fait acceptable que certaines activités d’architecture soient réalisées par des membres de l’équipe.
* Le ou les rôles tenus par une personne définissent ensuite son intitulé de poste.

[^1]: L’approche lean de la transformation digitale : Du client au code et du code au client, Dunod 2020, ISBN : 978-2-10-081615-6
