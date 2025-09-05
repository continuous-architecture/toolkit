---
title: "Manifeste de la Continuous Architecture"
meta_title: "Manifeste de la Continuous Architecture"
description: "Ce manifeste présente les croyances et principes fondateurs de la Continuous Architecture, une approche moderne de l’architecture logicielle alignée avec la livraison continue et la résilience produit."
draft: false
---

Ce Manifeste de la Continuous Architecture expose un ensemble clair de convictions et de principes pour notre modèle opérationnel d’architecture.
Il ne cherche pas à concurrencer d’autres manifestes bien connus (par ex. [Agile Manifesto](https://agilemanifesto.org), [Reactive Manifesto](https://www.reactivemanifesto.org)).
Il reflète une transition des approches traditionnelles en cascade avec de grands designs initiaux vers un **état d’esprit de piste continue**.

---

## Tendances et évolutions clés

### Évolutions qui façonnent l’expérience client et produit

**Les clients et utilisateurs attendent davantage**

* Les clients privilégient les produits et services qui résolvent de vrais problèmes et les aident à accomplir leurs tâches.
* La plupart abandonnent une entreprise après une mauvaise expérience.
* Leurs attentes sont influencées par les grandes entreprises technologiques.
* Ils privilégient de plus en plus les marques alignées sur des valeurs sociales et environnementales ; les organisations intègrent des objectifs ESG à la fois pour se conformer et pour attirer talents et clients.

**La technologie change la donne**

* Les systèmes cyber-physiques rendent les produits plus intelligents, connectés, personnalisés et efficaces.
* L’intégration du monde numérique et du monde physique ouvre de nouvelles possibilités en matière de fonctionnalités, d’interactions et de services.
* L’IA et les LLM permettent des expériences plus personnalisées, efficaces et réactives.

**Les modèles économiques évoluent**

* Le passage au modèle « as-a-service » transforme les offres (usage vs. propriété), les modèles de revenus, de vente et de livraison.
* Des écosystèmes d’affaires émergent en combinant des capacités issues de secteurs différents pour proposer des services qu’aucune entreprise seule ne pourrait fournir.

---

### Évolutions qui transforment les organisations

**La prise de décision est moins centralisée**

* Les équipes proches du problème et du client décident plus vite, sans multiples niveaux de validation, et s’adaptent mieux aux changements du marché.
* La décentralisation permet de mieux passer à l’échelle en répartissant la charge décisionnelle.

**Les décisions sont guidées par les faits et les données**

* Les données offrent une vision objective de la réalité, réduisant l’influence des opinions et biais personnels.
* Elles aident à détecter plus rapidement les évolutions du marché, des comportements clients et de la concurrence.
* La culture décisionnelle passe du « jeu de devinettes » à une approche plus scientifique.

**Les pratiques managériales influencent la performance**

* Dans de nombreuses organisations, un management trop hiérarchique freine l’initiative et limite la capacité d’innovation.
* Le manque d’autonomie et de reconnaissance réduit l’engagement des collaborateurs, avec un impact direct sur la performance économique et sociale.
* Employés comme dirigeants expriment un besoin croissant d’améliorer les pratiques managériales.

---

### Évolutions qui transforment le logiciel

**Déploiement rapide du Software-Defined-X et du X-as-Code**

* En passant d’une approche centrée sur le matériel à des solutions pilotées par logiciel, Software-Defined-X :

  * Permet d’adapter rapidement les ressources aux besoins changeants en supprimant la dépendance au matériel.
  * Réduit les coûts opérationnels par l’automatisation des tâches routinières tout en améliorant la résilience grâce à la diminution des erreurs humaines.

**Le logiciel devient une commodité**

* Les plateformes low-code/no-code démocratisent la création logicielle, accélérant l’innovation en abaissant les barrières techniques.
* Les outils d’IA générative pour le code transforment la productivité et les workflows : on estime que 95 % du code sera généré par l’IA d’ici 5 ans (contre 30 % aujourd’hui).

**Les plateformes deviennent la norme**

* En séparant les composants stables des différenciateurs, les plateformes offrent économies d’échelle et accélération de l’innovation.
* Celles dotées de fonctions self-service efficaces permettent l’autonomie des équipes.

**Les exigences non fonctionnelles (NFR) deviennent clés**

* Sécurité, sûreté, confidentialité, résilience, robustesse, durabilité et frugalité deviennent des moteurs essentiels des décisions architecturales.
* La traçabilité des exigences garantit l’alignement des choix architecturaux avec l’impact métier (ex. pratiques SRE).

---

## Nous offrons une expérience produit supérieure

* Nous adoptons une **approche outside-in**, en analysant le contexte des clients et parties prenantes pour orienter la conception.
* Nous intégrons les pratiques de **recherche client** issues de la sociologie, de l’anthropologie et du marketing.
* Nous favorisons **l’automatisation avec une touche humaine** pour rendre les produits et services plus simples d’usage.
* Nous exploitons **l’architecture pour le flux**, afin de soutenir le développement et les opérations continus, en raccourcissant les cycles d’apprentissage grâce aux retours rapides du terrain.
* Nous concevons des **produits intelligents** tirant parti des capacités de l’IA et des LLM.
* Nous développons des **produits et services sûrs, sécurisés, durables et antifragiles**, dignes de la confiance de nos clients.
* Nous garantissons des **processus de livraison et de support efficaces** répondant aux attentes de qualité des parties prenantes.

---

## Nous défendons une approche socio-technique

* la Continuous Architecture est récursive : **nous construisons les systèmes socio-techniques qui conçoivent et opèrent le système produit**.
* **L’architecture suscite des discussions essentielles et éclaire les décisions** aux niveaux entreprise et produit. L’architecte est un expert et un coach.
* Nous utilisons la **modularité** pour éliminer les dépendances inter-équipes évitables, levier puissant d’autonomie.
* Nous encourageons la **symbiose entre humains et machines** : humains + IA > humains seuls ou machines seules. L’automatisation totale n’est pas toujours la meilleure solution.
* Nous développons une **organisation apprenante**, basée sur le mentorat et des équipes autonomes et responsabilisées.
* Nous appliquons la loi de Conway : en **structurant les équipes selon l’architecture cible (inverse Conway maneuver)**, nous réduisons les interfaces et les transferts.
* Nous reconnaissons que toute nouvelle technologie impacte l’équilibre social. Nous favorisons la **co-évolution des systèmes technologiques et sociaux**.

---

## Nous concevons et pilotons des systèmes complexes

* Nous privilégions le **modélisation et le design de domaine** plutôt que les processus rigides ou la course aux technologies à la mode.
* Nous pratiquons une **ingénierie rigoureuse des exigences**, en liant objectifs non fonctionnels et métriques aux besoins métiers (ex. SRE).
* Nous encourageons **l’identité auto-souveraine et les smart contracts** pour sécuriser les échanges de données dans les écosystèmes.
* Nous **étendons le développement produit** à la conception des processus de livraison et de support. Nous validons l’architecture par des livraisons rapides et des retours utilisateurs.
* Nous privilégions le **nivellement plutôt que la superposition** : la décomposition modulaire guide l’évolution des systèmes. Nous standardisons les interfaces pour favoriser la réutilisation et la composition.
* Nous adoptons le **platform thinking** pour maximiser la réutilisation et l’autonomie.
* Nous concevons avec une **vision holistique**, reconnaissant l’interdépendance des modèles économiques, matériels, logiciels et services.
* Nous promouvons l’**ingénierie simultanée** plutôt que séquentielle.

---

## Nos principes

1. **Primauté du client** : conception outside-in, fondée sur la recherche et l’empathie.
2. **Flux et feedback** : livraison continue, automatisation et cycles d’apprentissage rapides.
3. **Équilibre socio-technique** : faire évoluer conjointement personnes et technologies.
4. **Autonomie par la modularité** : réduire les dépendances, maximiser l’autonomie.
5. **Résilience et responsabilité** : sécurité, durabilité et confiance intégrées dès la conception.
6. **Pensée systémique holistique** : aligner modèle économique, technologie et facteur humain.

---

✨ *Nous invitons les praticiens, organisations et communautés à adopter, partager et faire évoluer ces principes avec nous pour façonner l’avenir de la Continuous Architecture.*

---

Ce document est la **deuxième édition (2.0) du Manifeste Continuous Architecture**, publiée en 2025.  
Il met à jour et enrichit les convictions et principes fondateurs présentés dans la première édition.  

ℹ️ Pour des raisons historiques, la [première édition du Manifeste Continuous Architecture (1.0)](/blog/manifesto-ed1) reste disponible en archive.
