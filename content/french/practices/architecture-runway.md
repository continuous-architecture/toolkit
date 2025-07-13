---
title: "Architecture Runway"
meta_title: "Architecture Runway – Aligner architecture intentionnelle et design émergent"
description: "L'Architecture Runway permet de concilier design émergent et décisions architecturales anticipées pour construire des produits évolutifs et cohérents dans le temps."
draft: false
---

Cette pratique repose sur plusieurs convictions :

* L’époque où les architectes descendaient de leur tour d’ivoire pour dicter quoi faire aux équipes est révolue.
* Les personnes travaillant au quotidien sur les produits sont bien placées pour dire des choses pertinentes sur leur architecture et leur conception. C’est ce que nous appelons le *design émergent*.
* À l’inverse, se reposer uniquement sur un design émergent peut être risqué, notamment pour les systèmes complexes. Les architectes ont toujours un rôle à jouer pour *piloter* (et non *imposer*) l’architecture des produits. Sinon, une architecture émergera d’elle-même... et ils devront en subir les conséquences. Ce que les architectes proposent intentionnellement s’appelle l’*architecture intentionnelle*.
* L’architecture d’un produit est un voyage : il faut adapter son cap en fonction des contraintes et des changements rencontrés.

Le *Continuous Architecture Toolkit* s’appuie sur la pratique de l’**architecture runway**, issue du [SAFe et du Scaled Agile Framework ®](https://www.scaledagileframework.com/) [^1], pour concevoir en continu les fondations techniques nécessaires à la mise en œuvre des fonctionnalités à court terme, sans refonte ou retard excessif. C’est une pratique continue qui permet une approche *rencontre au milieu* entre architectes et équipes, afin de :

* organiser une zone de dialogue entre l’architecture intentionnelle (règles fortes) et le design émergent (zone laissée ouverte), comme illustré ci-dessous ;
* définir le bon équilibre entre user stories fonctionnelles et techniques dans le backlog ;
* identifier des opportunités d’investissement dans des user stories techniques pour augmenter la capacité à changer.

![image](./images/practices/misc/connect-the-dots.png)

Cette zone de dialogue est saine car :

* les équipes peuvent influencer et ajuster l’architecture intentionnelle à partir des retours terrain et nourrir le futur avec de nouvelles idées ;
* elle donne aux architectes l’opportunité de *convaincre* plutôt que d’imposer, d’aligner les équipes et de gérer les dépendances entre produits.

## La pratique du runway en résumé

Comme beaucoup d'autres pratiques du modèle de Continuous Architecture, le *runway* est une pratique continue. Nous recommandons de le mener au moins une fois par an, idéalement 2 à 3 fois, afin de permettre des pivots avant que les coûts de changement ne deviennent trop élevés.

Cette pratique se décompose en 5 étapes :

* Tout commence par la collecte de tous les éléments intentionnels : ambitions produit, roadmaps (métier, SI...), règles et cadres de référence existants (architectures de référence, stacks techniques autorisées, etc.). Des outils comme le [radar Thoughtworks](https://www.thoughtworks.com/radar) sont très utiles pour les visualiser. Il permet à l'organisation d’indiquer les techniques, outils, plateformes et langages/frameworks à *évaluer*, *essayer*, *adopter* ou *éviter*.
* Ensuite, il faut analyser le backlog produit pour identifier les user stories ou points significatifs du point de vue de l’architecture. En parallèle, on recommande de définir des *fitness functions* (voir [Building Evolutionary Architectures](http://www.thoughtworks.com/books/building-evolutionary-architectures)) pour évaluer objectivement certaines caractéristiques d’architecture à préserver. Cela permet de faire émerger les technologies, techniques, styles d’architecture, ou design patterns à utiliser.
* Une fois la vision claire sur les besoins, contraintes et qualités à protéger, on peut créer le *cadre technologique* du produit. Le radar peut à nouveau être utilisé ici, avec une version spécialisée au niveau produit. Chaque nouveauté identifiée devrait être associée à une [décision d’architecture](./architecture-decision-records). Continuous Architecture fournit un [référentiel GitLab](http://google.fr) basé sur le projet [open source de Zalando](https://github.com/zalando/tech-radar), que vous pouvez cloner pour générer votre radar.
* En combinant l’analyse du backlog, les fitness functions et le radar, vous pouvez identifier les *enablers* à ajouter au backlog. On distingue deux types : les études techniques (spikes) et les user stories techniques. Si un choix technique est incertain, créez un *spike* pour le tester (PoC, etc.) — ce qui s’aligne avec le principe de *dernier moment responsable*. Et comme les ressources sont limitées, il est essentiel de **prioriser les enablers**.
* Enfin, vous devez vous assurer que le backlog contient à la fois fonctionnalités **et** enablers, et que ceux-ci sont bien positionnés dans les bons sprints / MVPs pour construire une roadmap cohérente. Trop souvent, seuls les items à forte valeur client sont prioritaires. Pourtant, les enablers sont indispensables à la livraison des fonctionnalités et à la pérennité du produit. Dernier point : créez un **kit de communication** pour votre runway — il vous aidera à le partager avec les architectes et parties prenantes.

Le visuel ci-dessous illustre cette pratique :

![image](./images/practices/kit-architecture-runway.png)

Le mot **runway** est ici très important : ce n’est **pas un exercice ponctuel**, mais un processus vivant.  
De nouvelles fonctionnalités vont apparaître, de nouvelles contraintes vont surgir, votre produit entrera dans de nouvelles phases... vous devez **ajuster continuellement** votre runway.  
Les rituels hebdomadaires d’architecture et les ateliers de cadrage 360° sont d’excellents moments pour le faire, car ils garantissent un espace de discussion.

[^1]: SAFe et Scaled Agile Framework sont des marques déposées de Scaled Agile, Inc.
