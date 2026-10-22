---
title: "Préparation à l'autonomie des équipes"
meta_title: "Évaluation de l'autonomie des équipes"
description: "Rituel pour évaluer la capacité d’une équipe à prendre des décisions architecturales de manière autonome, tout en assurant l’intégrité du système d'information à grande échelle."
draft: false
---

## Préparation à l'autonomie des équipes

L’un des objectifs clés du modèle opérationnel Continuous Architecture est de permettre aux équipes produits de prendre en toute sécurité des décisions d’architecture afin de favoriser l’appropriation de bout en bout et la livraison continue. Cela implique de décentraliser la prise de décision architecturale tout en maintenant l'intégrité d’un système d’information composé généralement de milliers d'applications avec des flux de données complexes.

Pour atteindre cet objectif, et car les équipes de delivery ont des besoins de supervision différents selon leur contexte, le modèle opérationnel de Continuous Architecture propose une approche formelle pour évaluer leur niveau de préparation à l’autonomie en matière de décisions d’architecture. Cette évaluation est réalisée régulièrement, sur un horizon de 12 à 18 mois, lors du xref:team-readiness-ritual[rituel de préparation à l’autonomie,800,800] à l’aide de l’outil dédié.

## L’outil de préparation à l’autonomie

L’outil propose trois niveaux de centralisation/décentralisation pour la prise de décision en architecture :

* *Niveau 1* : L’équipe de delivery est autonome pour prendre les décisions d’architecture nécessaires à l’évolution des produits qu’elle gère. Les architectes Produit et Fullstack interviennent en support à la demande.
* *Niveau 2* : Les décisions architecturales sont prises sous la supervision des architectes Produit et Fullstack en charge du domaine ou de la ligne de produits. Ils orchestrent la collaboration entre les acteurs, assurent la cohérence globale et développent le jugement des équipes (coaching & mentoring) pour renforcer leur autonomie.
* *Niveau 3* : Les décisions doivent être prises de manière centralisée, sous gouvernance de l’architecture d’entreprise. Les architectes EA forment la communauté et les équipes aux nouvelles considérations architecturales pour accroître leur autonomie.

Le niveau d’autonomie est défini équipe par équipe en fonction de l’évaluation sur deux axes :

* Axe *Y* : maturité de l’équipe de delivery par rapport à :
  * la connaissance et la maîtrise des gardes-fous architecturaux (principes, blueprints, standards) de l’organisation,
  * l’évaluation des compétences techniques et fonctionnelles des membres de l’équipe.
* Axe *X* : niveau de risque architectural du produit prenant en compte notamment :
  * le stade de vie du produit,
  * les dépendances avec d’autres produits et les décisions transverses,
  * les enjeux de sécurité et de conformité,
  * le niveau d’investissement,
  * les engagements contractuels/sourcing.

![image](./images/rituals/misc/kit-autonomy-assesment.png)

💡 : Le niveau de maturité fonctionnelle et technique de l’équipe, croisé avec le niveau de risque architectural, détermine sa capacité à prendre des décisions d’architecture de manière autonome.

L’un des rôles de l’architecte dans le modèle Continuous Architecture est de former les équipes à l’architecture. Le rituel d’évaluation est une opportunité pour évaluer l’adoption des pratiques CA (symbolisées par le A sur l’affiche) et identifier des axes de progression avec l’équipe (symbolisés par le T). Le radar à droite sert à cela, et couvre les 8 dimensions clés de Continuous Architecture :

* Autonomisation des équipes : approche produit & rôles d’architecture
* Rituels & pratiques
* Zone de dialogue formalisée dans les livrables & décisions d’architecture
* Propriétés du système : conformité aux principes d’évolutivité continue

## Le rituel d’évaluation de la préparation à l’autonomie

L’évaluation de l’autonomie est réalisée régulièrement via ce rituel, animé par les architectes Produit et Fullstack de la ligne de produits concernée.

![image](./images/rituals/team-autonomy-readiness.png)

Les participants habituels sont le Delivery Manager, l’architecte référent, l’architecte d’entreprise et éventuellement des leaders techniques et responsables d’équipes.

Le livrable principal du rituel est l’affiche de synthèse de l’autonomie par équipe. Mais le dialogue entre les participants est tout aussi important. Le rituel permet aussi de mettre à jour le **plan de progression des pratiques et compétences Continuous Architecture** pour les équipes de delivery et les architectes.

![image](./images/rituals/misc/kit-generic-progress-plan.png)

Pour bien préparer cette évaluation, les architectes Produit et Fullstack s’appuient sur plusieurs éléments :

* Les roadmaps produits sur 12 à 18 mois
* La dernière revue du lien : ./img/kit-generic-progress-plan.png[plan de progrès et de montée en compétence Continuous Architecture]
* L’évaluation globale de l’architecture des produits du portefeuille (obsolescence, dette technique, alignement avec les principes et blueprints, qualité de service, qualité de l’expérience...)

## Exemple de livrable d’évaluation

Voici un exemple d’évaluation sur un domaine comprenant plusieurs équipes.

![image](./images/rituals/misc/team-autonomy-sample1.jpg)

Les rectangles arrondis représentent des équipes de delivery pérennes. Comme on peut le voir, dans ce domaine, une équipe est jugée autonome car elle possède les compétences nécessaires et le niveau de risque est acceptable. Deux équipes sont en cours de montée en compétence grâce à la présence d’architectes dans les équipes. Une autre équipe nécessite un pilotage plus fort, étant positionnée sur un processus métier critique sans les compétences suffisantes. Pour chaque équipe, des post-its sont renseignés : les verts pour les points forts récents, les rouges pour les axes de progrès.

Cet outil donne une vue claire et simple du niveau d’autonomie des équipes de votre domaine.

![image](./images/rituals/misc/team-autonomy-sample2.jpg)

Le radar permet d’illustrer la position de chaque équipe dans l’adoption de Continuous Architecture. Il permet de visualiser les domaines maîtrisés et ceux encore en progression. Il reflète aussi la maturité globale du domaine et les avancées réalisées.
