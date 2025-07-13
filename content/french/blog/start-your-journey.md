---
title: "Commencer le parcours"
meta_title: "Commencez votre transformation avec la Continuous Architecture"
description: "Découvrez les approches bottom-up, top-down et organique pour déployer la Continuous Architecture dans votre organisation, avec l’exemple de Michelin à l’appui."
date: 2021-07-15T05:00:00Z
image: "./images/blog/challenges.png"
categories: ["Change Management"]
author: "Olivier Jauze"
tags: []
draft: false
---

## Commencez votre parcours

Le déploiement des nouvelles méthodes de travail (pratiques, rituels, cadre) décrites dans le Cadre et la Boîte à Outils de Continuous Architecture constitue un véritable parcours de transformation. Il n’existe pas de trajectoire unique pour faire évoluer votre entreprise (ou une partie de celle-ci) depuis son état actuel vers l’état cible (ou *étoile du nord*) que nous recommandons et qui est incarné dans les principes du [Manifeste de la Continuous Architecture](link:/docs/manifest/manifesto.html).

### Plusieurs manières de démarrer ce parcours :

* **Approche Bottom-up** : déployer la Continuous Architecture sur un périmètre limité avec un niveau de changement compatible avec la culture de votre organisation actuelle.
* **Approche Top-down** : concevoir et lancer un changement plus ambitieux sur une *unité opérationnelle*, avant d’élargir progressivement.
* **Approche Organique** : un mélange des deux.

L’approche *bottom-up* permet de **tester le terrain** et de démontrer des résultats concrets. Une fois l’organisation prête à une transformation plus large, une approche mixte est souvent nécessaire.

Le schéma ci-dessous (issu de la vue "Organisation" du [Cadre de Continuous Architecture](framework)) peut vous aider à définir le périmètre et le rythme du changement :

![image](./images/framework/organization.svg)

## Démarrer en *bottom-up*

L’approche *bottom-up* commence au niveau des équipes. On évalue d’abord leur **autonomie**, car chaque équipe a une composition et des compétences spécifiques. L’outil d’[évaluation de l’autonomie des équipes](rituals/team-autonomy-readiness) a été conçu pour cela.

Puis, expérimentez quelques pratiques de Continuous Architecture sans changer la structure des équipes. Commencez par exemple avec le [Registre de Décision d’Architecture (ADR)](practices/architecture-decision-records) : outil simple à forte valeur ajoutée car il rend explicites les décisions. Décrivez ensuite votre trajectoire d’architecture via la [Piste d’Architecture](practices/architecture-runway). Mettez en place des rituels comme la [réunion hebdomadaire d’architecture](rituals/weekly-architecture-meeting) pour créer une **zone de dialogue** autour de l’architecture.

Si vos équipes sont organisées par projets ou compétences, vous constaterez peut-être un manque de transversalité et trop de dépendances. Il sera alors pertinent d’adopter une approche *produit* décrite dans la section [Organisation](framework/organization).

Le passage vers une organisation réellement agile peut révéler des lacunes en compétences (product owner, praticien agile, etc.). Il est important d’investir dans la formation et l’accompagnement, voire le recrutement.

Enfin, des obstacles peuvent émerger, comme un **système de reconnaissance basé sur la production** plutôt que sur les résultats utilisateurs. À ce stade, une approche bottom-up atteint ses limites. Il est temps d’impliquer le management et les RH pour initier une transformation plus large.

## Démarrer en *top-down*

L’agilité à l’échelle est difficile car elle implique des changements en profondeur, y compris culturels. Trois grandes banques [^1] [^2] ont adopté un modèle inspiré de Spotify [^3] :

* **Équipes alignées flux** (Squads et Tribes)
* **Équipes transverses** (Chapters et Guilds)

Chez Fidelity et ING, ce modèle a été déployé **de manière top-down**, avec un redéploiement des collaborateurs sur les nouveaux rôles.

Mais ce changement d’organisation ne suffit pas. Il faut aussi :

* Repenser les objectifs et la reconnaissance
* Prévoir un plan de (re)montée en compétences
* Faire évoluer la culture, les croyances, le leadership

Exemples :

* Chez Société Générale, l’**autonomie alignée** était soutenue par un objectif partagé et des OKRs.
* Chez Fidelity, des principes de leadership tels que *« dire les choses telles qu’elles sont »*, *« permettre aux autres de décider »* ou *« assumer le résultat »* ont soutenu la transformation.

Si vous cherchez une approche de conduite du changement, [les 8 étapes de Kotter](https://www.kotterinc.com/8-steps-process-for-leading-change/) [^5] peuvent être une bonne base.

> Attention toutefois : il est risqué d’adopter un framework de solution sans avoir clarifié les vrais problèmes. Cela s’applique aussi aux cadres comme SAFe, Spotify ou Kotter.

Beaucoup d’organisations copient le modèle Spotify sans :

* Encourager une **culture de l’expérimentation**
* Traiter **la dimension culturelle**, pourtant essentielle à la réussite

la Continuous Architecture ne se déploie pas à l’aide d’un modèle top-down rigide. Nous prônons une approche **organique**, partant des problèmes concrets, associant bottom-up et top-down, et promouvant l’expérimentation continue.

## Démarrer en *organique*

L’approche organique consiste à **créer les conditions de l’émergence du changement**. On peut commencer par une expérimentation sur des équipes en difficulté (ex. dette technique élevée), souvent plus réceptives.

On utilise alors les outils (ADRs, Runway, rituels...) qui aident l’équipe à progresser. Une fois les premiers résultats obtenus, vous pouvez chercher un soutien organisationnel pour étendre l’approche.

L’idée : ne pas transformer une unité complète, mais **plusieurs domaines en parallèle**, à leur rythme, selon leurs contraintes.

### Exemple Michelin : une transformation organique

Trois ans plus tôt, Michelin constate que l’architecture risque de devenir un **goulot d’étranglement** dans l’accélération numérique. Il faut évoluer vers un modèle plus collaboratif et soutenable. C’est la naissance de **l’initiative de Continuous Architecture**, en partenariat avec **Glue N’DO**.

#### Les grandes étapes :

* 3 ans : des expérimentations locales à un déploiement global organique
* 5 défis initiaux
* Des catalyseurs : vision partagée, équipe guide, boîte à outils ouverte, modèle évolutif, communauté
→ **Penser grand, agir petit**

#### Phase 1 : Lancement

Des équipes pilotes volontaires ont testé l’approche avec deux objectifs :

1. Tester notre MVP (version initiale de la Continuous Architecture)
2. Prouver que ça aide les équipes

Ce succès initial a permis de crédibiliser l’approche et d’identifier les freins structurels à lever.

#### Phase 2 : Déploiement organique

Le Chief Enterprise Architect valide l’approche et **demande à chaque domaine** de déployer la Continuous Architecture **à sa manière**.

Même en pleine pandémie (2020–2021), le modèle est étendu, avec des **sessions d’onboarding**, du coaching et une **communauté active**.

## Les 5 défis initiaux de Michelin

Chaque entreprise a ses propres défis architecturaux. Chez Michelin, les 5 premiers leviers d’action ont été :

![image](./images/blog/challenges.png)

1. **Connecter les points** : rompre avec l’architecture descendante, créer une **zone de dialogue** entre intentionnelle et émergente.
2. **Continuous** : relier l’architecture à un processus logiciel continu (de l’idée à la livraison).
3. **Voir le système global** : fusionner build & run, adopter une approche fullstack, penser l’intégration système.
4. **(Re)Équilibrer** : redonner leur place aux exigences non fonctionnelles (qualité, performance...).
5. **Les personnes** : redéfinir les rôles, former, coacher, développer les compétences avec l’[Architecture Kata](architecture-kata).

## Les catalyseurs du changement

### Une vision partagée et une coalition guide

Un système d'information dans un monde VUCA doit être **évolutif**. Il faut donc des architectures découplées, basées sur des modèles cloud-native, orientés événements, microservices...

Mais la technologie seule ne suffit pas : il faut **réinventer le modèle collaboratif**, développer **l’alignement et l’autonomie**, tout en maintenant l’intégrité système.

### Une boîte à outils ouverte

Chaque équipe est différente. Chez Glue N’DO, nous avons imaginé le *jeu de fléchettes de l’architecture* : chaque équipe choisit les pratiques adaptées à son contexte et place ses fléchettes dans le centre (bull's eye). L’architecte devient un **leader-serviteur**, aidant l’équipe à viser juste.

### Un modèle collaboratif évolutif

Grâce à un **kit d’évaluation de l’autonomie**, on évalue :

* La maturité de l’équipe
* Les défis architecturaux du produit

Cela permet d’ajuster la gouvernance, le rôle des architectes et d’**éviter les ralentissements bureaucratiques**.

### Une communauté et un réseau

La communauté de Continuous Architecture chez Michelin est locale et globale, animée chaque mois. Grâce à l’**initiative open source**, elle partage apprentissages et accélère la transformation.

## Une approche organique : « Penser grand, agir petit »

Lancer un tel changement nécessite **plus qu’une nouvelle méthode**. Il faut changer les processus, la culture, les croyances et les comportements.

* Une transformation **top-down** apporte l’**illusion du changement**, sans autonomie réelle.
* Une approche **bottom-up** seule se heurte à des limites.

> Recommandation : **adoptez une approche organique** — comme Michelin.

**Penser grand** : porter une vision, créer un cadre propice, supprimer les obstacles.  
**Agir petit** : accompagner localement les équipes, à leur rythme, dans leur contexte, en favorisant les opportunités et l’innovation.

---

[^1]: [Société Générale & Fidelity - Experience report](https://www.youtube.com/watch?v=qeWpRGTc5TQ)  
[^2]: [Transformation agile d’ING – McKinsey](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)  
[^3]: [Spotify Model – Atlassian](https://www.atlassian.com/agile/agile-at-scale/spotify)  
[^4]: [Team Topologies – Livre](https://teamtopologies.com/book)  
[^5]: [Méthodologie Kotter – Leading Change](https://www.kotterinc.com/8-steps-process-for-leading-change/)  
[^6]: [Pourquoi le modèle Spotify ne suffit pas](https://www.infoq.com/news/2016/10/no-spotify-model/) / [Business2Community](https://www.business2community.com/strategy/there-is-no-spotify-model-for-scaling-agile-02284278)
