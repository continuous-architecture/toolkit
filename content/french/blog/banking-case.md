---
title: "Étude de cas bancaire"
meta_title: "Étude de cas bancaire – Illustration des pratiques de Continuous Architecture"
description: "Une étude de cas issue du secteur bancaire pour illustrer les pratiques de Continuous Architecture à travers l’analyse du système d’information de plusieurs marques d’un même groupe opérant en Europe."
date: 2021-07-04T05:00:00Z
image: "./images/blog/banking-case/uni-IT-landscape.png"
categories: ["case studies"]
author: "Frédéric Lé"
tags: []
draft: false
---

## Introduction

Cette étude de cas bancaire est en cours de développement. Son objectif est d’illustrer les pratiques de la Continuous Architecture. Elle servira principalement à tester le méta-modèle et à fournir un exemple concret à utiliser lors des sessions de formation.

Ce travail est sous licence Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International.  
Pour consulter une copie de cette licence, rendez-vous sur http://creativecommons.org/licenses/by-sa/4.0/  
ou envoyez un courrier à Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

![image](./images/blog/by-sa.png)

## Situation actuelle de RB Bank

**RB Bank** est présente dans trois pays : France, Allemagne et Espagne.

En France, la banque opère sous trois marques :

* **Uni** qui s’adresse aux particuliers, petites entreprises et entreprises, via un modèle « click and mortar » avec 740 agences.
* **SB** qui cible les petites entreprises et leurs dirigeants à travers un réseau de 420 agences, principalement situées dans le sud-est du pays.
* **Direct** qui s’adresse aux jeunes urbains via un modèle de banque mobile.

En Allemagne, la banque opère sous la marque **Broker** et propose des services d’investissement personnel principalement en ligne, avec quelques agences dans les grandes villes.

En Espagne, la banque opère sous la marque **Banco 7**, et s’adresse aux particuliers et petites entreprises via un modèle « click and mortar » avec 860 agences.

### Offres de produits

Le tableau ci-dessous décrit les familles de produits proposées par chaque marque.

| **Famille de produits** | **Uni** | **SB** | **Direct** | **Broker** | **Banco 7** |
|-------------------------|:-------:|:------:|:----------:|:----------:|:-----------:|
| Compte courant          |   X     |   X    |     X      |     X      |      X      |
| Services de paiement    |   X     |   X    |     X      |     X      |      X      |
| Crédit personnel        |   X     |        |     X      |            |      X      |
| Crédit à la consommation|   X     |        |     X      |            |      X      |
| Prêts immobiliers       |   X     |   X    |     X      |            |      X      |
| Produits d’épargne      |   X     |        |            |     X      |      X      |
| Services de courtage    |         |        |            |     X      |             |
| Services d’investissement|  X     |        |            |     X      |      X      |
| Prêts à l’équipement    |   X     |   X    |            |            |      X      |
| Assurance IARD          |   X     |   X    |     X      |            |      X      |

### Offres actuelles

#### Prêts aux petites entreprises chez UNI

Les produits de prêt aux petites entreprises ne sont pas compétitifs et ne sont pas adaptés aux besoins spécifiques des segments de clientèle :

* Mauvaise gestion des prêts dépréciés
* Produits de crédit non conçus pour optimiser la consommation de capital

Les lacunes des systèmes et processus existants ont un impact négatif sur l’expérience client. Le faible niveau d’automatisation, combiné aux reprises liées à la non-qualité, génère des coûts élevés qui détériorent le ratio coûts/revenus de la marque UNI.

### Modèle opérationnel

Chaque marque est une entité juridique détenue à 100 % par le groupe RB Bank et gère son propre bilan ainsi que son compte de résultat. Les reportings financiers et réglementaires sont consolidés au niveau du groupe.

Chaque marque gère son propre système d’information avec un minimum de directives du groupe.

#### Activités d'UNI

L’unité opérationnelle UNI a adopté une structure organisationnelle classique de banque de détail :

![Organisation UNI](./images/blog/banking-case/uni-org-chart.png)

Elle est soutenue par un système d’information représenté dans la figure suivante :

![Système d'information UNI](./images/blog/banking-case/uni-IT-landscape.png)
