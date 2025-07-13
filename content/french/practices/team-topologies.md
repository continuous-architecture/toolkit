---
title: "Team Topologies"
meta_title: "Team Topologies – Aligner l’organisation des équipes avec l’architecture produit"
description: "Découvrez comment concevoir une organisation d’équipes alignée sur votre architecture produit, en vous appuyant sur le modèle Team Topologies et des ateliers collaboratifs adaptés à votre contexte."
draft: false
---

## Architecturer votre organisation en même temps que votre produit

[Team Topologies](https://teamtopologies.com) est un cadre aujourd’hui très populaire dans notre industrie. Il peut se résumer ainsi : **comment favoriser un flux rapide de travail entre développement et opérations en optimisant l’organisation des équipes** via quatre types d'équipes et trois modes d'interaction.

L’approche montre comment façonner l’organisation pour qu’elle **facilite** l’architecture souhaitée plutôt que de la freiner. Une organisation alignée avec l’architecture modulaire du produit permet une plus grande autonomie, grâce à la réduction des dépendances inter-équipes.

Ce principe s’appuie sur la **loi de Conway**, énoncée il y a près de 50 ans :  
> *"Toute organisation qui conçoit un système produira une conception qui reflète la structure de communication de cette organisation."*

![image](./images/practices/misc/conway-law.png)

👉 D’où l’idée de mettre en œuvre le **"Conway inverse"** : faire évoluer l’organisation des équipes pour refléter l’architecture désirée.

## Les quatre types d’équipes

Team Topologies définit **quatre topologies d’équipes**. Toutes sont utiles, mais deux sont clés dans le contexte produit :

* **Stream-Aligned Teams** : équipes alignées avec les [value streams](./value-stream), en lien direct avec la logique produit.
* **Platform Teams** : équipes plateformes qui réduisent la charge cognitive des autres équipes via des services self-service (ex. : cluster Kubernetes, pipelines CI/CD...).

Les **modes d’interaction** (collaboration, facilitation, fourniture de service) viennent compléter cette structuration pour fluidifier la communication et améliorer les modes de coopération.

![image](./images/practices/team-topologies.png)

L’objectif global est de **réduire la charge cognitive** pesant sur les équipes. Une charge excessive ralentit la livraison de valeur, multiplie les frictions et fait grossir le backlog. L'approche Team Topologies propose une manière pragmatique de la mesurer et de la réduire.

## Comment l’appliquer dans votre contexte ?

Lire le livre ne suffit pas. Nous proposons ici une **recette éprouvée** et une **séquence d’ateliers** permettant de construire collectivement une nouvelle organisation cible.

> 🔁 Ces ateliers doivent être menés **après la définition de l’architecture** du produit, afin d’aligner l’organisation sur l’architecture intentionnelle.

### Participants recommandés

* Membres des équipes : tech leads, POs/PMs, architectes...
* Architectes métier ou SI : pour une vision bout-en-bout
* Managers des équipes concernées : les embarquer dès le départ évite le rejet en aval

🎯 Un [template Miro](blog/miro) est fourni pour animer ces ateliers collaboratifs :

![image](./images/practices/misc/tp-miro.png)

## Agenda des ateliers

| Étape | Objectif |
|-------|----------|
| **Cartographier les interactions actuelles** | Identifier les équipes impliquées et les modes de collaboration. |
| **Stabilité des équipes** | Repérer les équipes sujettes à un turnover élevé ou à des changements fréquents. |
| **Cartographie actuelle des topologies** | Cartographier l’organisation actuelle par rapport aux 4 topologies (même si c’est flou ou hybride). |
| **Symptômes de delivery** | Identifier les symptômes liés à l’organisation actuelle : délais, dépendances, irritants... |
| **Cartographie cible** | Repenser les équipes, leur type et leurs interactions. Plusieurs alternatives peuvent être confrontées. |
| **Staffing** | Valider la faisabilité via une **matrice de compétences**. Peut-on vraiment staffer les équipes définies ? |
| **Team API** | Synthèse de chaque équipe : missions, engagements, interactions — comme une carte d'identité d'équipe. |

## Pourquoi utiliser cette pratique ?

* Aligner organisation et architecture pour un delivery plus fluide
* Réduire les dépendances inter-équipes
* Clarifier les responsabilités et les interfaces
* Mieux anticiper les changements à grande échelle (scaling produit ou organisationnel)

[^1]: Un *value stream* représente les étapes nécessaires pour livrer de la valeur à un client, depuis le déclencheur jusqu’à la livraison. Il structure l’organisation autour du flux de valeur.
