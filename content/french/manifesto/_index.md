---
title: "Manifeste de la Continuous Architecture"
meta_title: "Manifeste de la Continuous Architecture"
description: "Ce manifeste présente les croyances et principes fondateurs de la Continuous Architecture, une approche moderne de l’architecture logicielle alignée avec la livraison continue et la résilience produit."
draft: false
---

Ce Manifeste de la Continuous Architecture expose un ensemble clair de convictions et de principes qui fondent notre modèle opérationnel d’architecture.
Il ne cherche pas à concurrencer d’autres manifestes bien connus (comme le [Manifeste Agile](https://agilemanifesto.org) ou le [Manifeste Réactif](https://www.reactivemanifesto.org)), mais ) exprimer une évolution : celle du passage des approches linéaires traditionnelles de planification de bout en bout, basées sur de grands plans initiaux, vers **un état d'esprit d'adaptation permanente et de livraison continue**.

---

## Tendances et transformations clés

### Évolutions qui façonnent l’expérience client et produit

**Les clients et utilisateurs en attendent davantage**

* Les clients privilégient les produits et services qui solutionne des besoins concrets et les aident à accomplir leurs tâches.
* La majorité abandonnent une entreprise après une mauvaise expérience.
* Leurs attentes sont influencées par les grandes entreprises technologiques.
* Ils privilégient de plus en plus les marques alignées sur des valeurs sociales et environnementales ; les organisations intègrent des objectifs ESG à la fois pour des besoins de confirmité et attractivité.

**La technologie change la donne**

* Les systèmes cyber-physiques rendent les produits plus intelligents, connectés, personnalisés et efficaces.
* L’intégration du monde numérique et du monde physique ouvre de nouvelles possibilités en matière de fonctionnalités, d’interactions et de services.
* L’intelligence artificielle et les modèles de langage (LLM) permettent des expériences plus personnalisées, efficaces et réactives.

**Les modèles économiques évoluent**

* Le passage au modèle « as-a-service » transforme les offres (usage plutôt que possession), les modèles de revenus, de vente et de livraison.
* De nouveaux écosystèmes émergent, combinant des capacités issues de secteurs différents pour proposer des services qu’aucune entreprise seule ne pourrait proposer.

---

### Évolutions qui transforment les organisations

**La décision devient moins centralisée**

* Les équipes proches du problème et du client prennent plus vite des décisions, sans couches d’approbation multiples — elles s’adaptent plus rapidement aux évolutions du marché
* La décentralisation permet de mieux passer à l’échelle en répartissant la charge décisionnelle.

**Les faits, soutenus par les données, guident les choix**

* Les données offrent une vision objective de la réalité, réduisant l’influence des opinions, émotions et biais personnels.
* Elles aident à détecter plus rapidement les évolutions du marché, des comportements clients et de la concurrence.
* La culture décisionnelle évolue de l'intuition vers une approche plus scientifique.

**Les pratiques managériales influencent la performance**

* Dans beaucoup d'organisations, la hiérarchie freine l’initiative et limite l’innovation.
* Le manque d’autonomie et de reconnaissance réduit l’engagement, au détriment de la performance économique et sociale.
* Les collaborateurs comme dirigeants appellent à des pratiques managériales renouvellées.

---

### Évolutions qui transforment le logiciel

**Déploiement rapide du Software-Defined-X et du X-as-Code**

* En passant de solutions centrées matériel à des solutions pilotées par logiciel, le Software-Defined-X :
  * Permet d’adapter rapidement les systèmes aux besoins changeants en abstrahant les dépendances matérielles.
  * Réduit les coûts opérationnels par l’automatisation des tâches répétitives tout en améliorant la résilience en limitant l’erreur humaine.

**Le logiciel devient une commodité**

* Les plateformes low-code/no-code démocratisent la création logicielle, accélérant l’innovation en abaissant les barrières techniques.
* Les outils d’IA générative et de codage agentique transforment la productivité ; on estime que d’ici cinq ans, 95 % du code sera généré par l’IA (contre 30 % aujourd’hui).

**Les plateformes se généralisent**

* En séparant les composants stables des différenciateurs, les plateformes offrent des économies d’échelle tout en accélérant l’innovation.
* Les plateformes dotées de fonctions self-service à fort potentiel renforcent l’autonomie des équipes.

**Les exigences non fonctionnelles (NFR) deviennent essentielles**

* Sécurité, sûreté, confidentialité, résilience, robustesse, durabilité et frugalité deviennent des moteurs clés de l'architecture.
* La traçabilité des exigences garantit que les décisions d'architecture s’alignent sur les impacts métiers (ex. : pratiques SRE).

---

## Nous concevons des expériences produits supérieures

* Nous adoptons une **approche outside-in**, fondée sur la compréhension du contexte client et des parties prenantes.
* Nous intégrons les pratiques d'**exploration du contexte client** issues de la sociologie, de l’anthropologie et du marketing.
* Nous exploration du contexte client **l’automatisation à visage humain** pour rendre les produits et services plus simples à utiliser.
* Nous mettons en oeuvre **l’architecture au service du flux**, soutenant un développement et des opérations continus grâce à des boucles de rétroaction rapides.
* Nous créons des **produits intelligents** tirant parti des capacités de l’IA et des LLM.
* Nous développons des **produits et services sûrs, sécurisés, durables et antifragiles** que les clients peuvent pleinement adopter.
* Nous assurons des processus de livraison et de support efficaces, à la hauteur des attentes des parties prenantes.

---

## Nous promouvons une approche socio-technique

* La Continuous Architecture est récursive : **nous concevons les systèmes socio-techniques qui conçoivent et opèrent le système produit**.
* **L’architecture alimente les discussions essentielles et éclaire les décisions** à la fois au niveau de l’entreprise et du produit. Les architectes agissent comme experts et facilitateurs.
* Nous utilisons la **modularité** pour éliminer les dépendances inter-équipes inutiles — un puissant levier d’autonomie.
* Nous valorisons la **symbiose entre humains et machines** : humains + IA > humains seuls ou machines seules. L’automatisation totale n’est pas toujours la meilleure réponse.
* Nous favorisons l'**organisation apprenante**, par le mentorat et l’autonomisation des équipes.
* Nous appliquons la loi de Conway : en **structurant les équipes selon l’architecture cible (manoeuvre de Conway inversée)**, nous réduisons les interfaces et les transferts.
* Nous reconnaissons que toute nouvelle technologie modifient les équilibres sociaux. Nous prônons la **co-évolution des systèmes technologiques et sociaux**.

---

## Nous concevons et pilotons des systèmes complexes

* Nous privilégions le **modélisation et la conception de domaine** plutôt que des processus rigides ou des choix technologiques dictés par la mode.
* Nous pratiquons une **ingénierie des exigences, fondée sur la rigueur et la traçabilité**, liant les objectifs non fonctionnels et leurs métriques aux besoins métiers (ex. : SRE).
* Nous encourageons **l’identité auto-souveraine et les smart contacts** pour sécuriser les échanges de données dans les écosystèmes.
* Nous **étendons le développement produit** à la conception des processus de livraison et de support, en validant l’architecture par la livraison rapide et le retour terrain.
* Nous privilégions **l’aplatissement des architectures plutôt que la superposition** : la décomposition modulaire guide l’évolution du système. Nous standardisons les frontières pour favoriser la réutilisation et la composabilité.
* Nous adoptons le **platform thinking** pour maximiser la réutilisation et l’autonomie.
* Nous concevons avec une **vision holistique**, reconnaissant l’interdépendance des modèles économiques, du matériel, du logiciel et des services.
* Nous promouvons l’**ingénierie simultanée** plutôt que les processus séquentiels.

---

## Nos principes

1. **Primauté du client** : conception outside-in, fondée sur la recherche et l’empathie.
2. **Flux et rétroaction** : livraison continue, automatisation et cycles d’apprentissage rapides.
3. **Équilibre socio-technique** : les systèmes évoluent conjointement avec les personnes et la technologie.
4. **Autonomie par la modularité** : réduire les dépendances, maximiser l’autonomie.
5. **Résilience et responsabilité** : concevoir pour la sécurité, la durabilité et la confiance.
6. **Vision systèmique** : aligner les facteurs humains, technologiques et économiques.

---

✨ *Nous invitons les praticiens, les organisations et les communautés à adopter, partager et faire évoluer ces principes avec nous pour façonner l’avenir de la Continuous Architecture.*

---

Ce document est la **deuxième édition (2.0) du Manifeste Continuous Architecture**, publiée en 2025.  
Il met à jour et enrichit les convictions et principes fondateurs présentés dans la première édition.  

ℹ️ Pour des raisons historiques, la [première édition du Manifeste Continuous Architecture (1.0)](/blog/manifesto-ed1) reste disponible en archive.
