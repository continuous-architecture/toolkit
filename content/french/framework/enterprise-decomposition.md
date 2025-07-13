---
title: "Décomposition de l’Entreprise"
meta_title: "Décomposition de l’Entreprise – Structurer un système complexe"
description: "Découvrez comment modéliser une entreprise comme un système hiérarchique de sous-systèmes appelés 'Unités Opérationnelles', en lien avec les autres vues du Framework de Continuous Architecture."
draft: false
---

## Décomposition de l’Entreprise

Une entreprise est un système complexe composé de plusieurs sous-systèmes. En accord avec Herbert Simon, nous affirmons que la **hiérarchie** est l’un des schémas structurels centraux utilisés par l’architecte de la complexité[^1]. Par système hiérarchique, Simon entend un système composé de sous-systèmes interconnectés, chacun d’eux étant à son tour structuré de manière hiérarchique, jusqu’à atteindre un niveau élémentaire.

Simon souligne que, étymologiquement, le mot "hiérarchie" renvoie à une relation d’autorité où un sous-système est subordonné au système auquel il appartient. Toutefois, à l’instar de Simon, nous élargissons cette notion à des systèmes où les relations entre sous-systèmes sont plus complexes que celles observées dans une organisation strictement formelle.

Une fois que l’on accepte de modéliser l’entreprise comme un système composé de sous-systèmes, il faut encore les désigner. Dans le domaine de l’ingénierie système, utiliser le terme "sous-système" ne pose pas de problème. Mais dans le monde de l’entreprise, c’est différent : chaque choix terminologique est porteur de significations implicites. Par exemple, parler de "divisions" renvoie à l’organigramme ; parler de "Domaines" ou de "Zones de valeur" évoque une modélisation IT.

Nous avons choisi de nous appuyer sur la définition d’**Unité Opérationnelle** telle que proposée par *Law Insider*[^2] : pour un exercice fiscal donné, une Unité Opérationnelle désigne une division, filiale, groupe, ligne de produits ou regroupement de lignes de produits pour laquelle un compte de résultat (ventes et résultat opérationnel) est produit.

Le schéma ci-dessous illustre la décomposition de l’entreprise en une ou plusieurs Unités Opérationnelles. Chaque Unité peut être décomposée récursivement en d’autres Unités Opérationnelles. Le sens générique donné à ce terme permet une grande flexibilité dans la manière de nommer les sous-systèmes en fonction de la terminologie propre à chaque entreprise. Par exemple, une banque de détail est généralement constituée d’un réseau de distribution et d’un ensemble de services de back-office. Le réseau de distribution est souvent organisé par territoires, tandis que les grands comptes sont gérés par secteur d’activité.

Les Unités Opérationnelles vendent des produits et/ou services à des clients internes ou externes, et disposent d’un compte de résultat, voire d’un bilan.

![image](./images/framework/enterprise-decomposition.svg)

Au-delà du choix des mots, des questions plus structurantes se posent :

* Quels critères combiner pour décomposer l’entreprise ?
* Quelles sont les responsabilités d’une Unité Opérationnelle ?
* Quel degré d’autonomie accorder à une Unité Opérationnelle ?
* Comment les Unités Opérationnelles se coordonnent-elles entre elles ?
* Comment aligner l’ensemble des Unités qui composent l’entreprise ?

Les autres vues du CAF (design émergent) fournissent des éléments de réponse à ces questions :

* La vue **Objectifs d’Expérience** fournit des hypothèses de segmentation de marché — critère clé de décomposition. Par exemple, doit-on créer une Unité dédiée au segment clientèle "patrimoniale" ? Une autre pour les jeunes ? L’unité en charge du segment patrimonial peut-elle concevoir ses propres produits de crédit immobilier ou doit-elle réutiliser ceux existants ?
* La vue **Produit** aide à regrouper les produits par ligne, et à identifier les opportunités de créer des plateformes produits communes à plusieurs Unités Opérationnelles.
* La vue **Opérations** permet d’identifier des "usines industrialisées", capables de mutualiser les compétences et les volumes pour fournir des services à moindre coût aux unités orientées marché.
* La vue **Technologie** met en lumière les capacités numériques partagées qui peuvent être offertes aux autres Unités pour accélérer leur transformation digitale.

De façon réciproque, la vue **Décomposition de l’Entreprise** influence l’évolution des autres vues (architecture intentionnelle).

[^1]: *The Architecture of Complexity*, Herbert A. Simon, Proceedings of the American Philosophical Society, Vol. 106, No. 6 (12 décembre 1962), pp. 467-482.  
[^2]: Voir [https://www.lawinsider.com/dictionary/operating-unit](https://www.lawinsider.com/dictionary/operating-unit)
