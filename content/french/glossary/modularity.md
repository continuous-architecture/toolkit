---
title: "Modularité"
meta_title: "Modularité – Architecture produit et logicielle"
description: "La modularité désigne une architecture où chaque composant assure une fonction clairement définie et interagit de manière explicite avec les autres. Cela permet d’adapter ou de faire évoluer une partie sans impacter l’ensemble du système, tant dans les produits physiques que logiciels."
draft: false
---

## Contexte Produit

Une *architecture modulaire* présente les deux caractéristiques suivantes [^1] :

* Chaque bloc (ou "chunk") implémente un ou quelques éléments fonctionnels dans leur intégralité  
* Les interactions entre les blocs sont bien définies et sont généralement fondamentales pour les fonctions principales du produit

L’architecture la plus modulaire est celle où **chaque élément fonctionnel** du produit est mis en œuvre par **exactement un bloc physique**, avec un **nombre limité d’interactions bien définies** entre les blocs.

Une telle architecture permet de **modifier un bloc sans impacter les autres**, tout en assurant le bon fonctionnement du produit. Les blocs peuvent également être conçus **de manière relativement indépendante** les uns des autres.

L’opposé d’une architecture modulaire est une *architecture intégrée*.

---

## Contexte Logiciel

Selon **Parnas, Clements et Weiss** [^2], l’objectif principal d’une décomposition en modules est de **réduire le coût global du logiciel** en permettant aux modules d’être conçus et modifiés **indépendamment**. Les objectifs spécifiques de cette décomposition sont :

* (a) La structure de chaque module doit être **suffisamment simple** pour être totalement comprise ;  
* (b) Il doit être possible de **modifier l’implémentation** d’un module **sans connaître** celle des autres et **sans affecter leur comportement** ;  
* (c) La **facilité d’une modification** doit être proportionnelle à la **probabilité** qu’un tel changement soit nécessaire :  
  * Les changements probables doivent pouvoir être réalisés **sans modifier les interfaces** ;  
  * Les changements moins probables peuvent impliquer des modifications d’interfaces, mais uniquement sur des **modules petits et peu utilisés** ;  
  * Seuls les changements très improbables devraient impliquer des **modifications dans les interfaces de modules largement utilisés** ;  
* (d) Il doit être possible de faire une **modification majeure du logiciel** sous forme d’une **série de changements indépendants** sur les modules individuels — autrement dit, **sauf pour les interfaces**, les développeurs ne devraient **pas avoir besoin de se coordonner** entre eux.

Si les interfaces des modules ne sont pas modifiées, il devrait être possible d’**exécuter et tester toute combinaison de versions anciennes et nouvelles** des modules.

[^1]: *Product Design and Development*, Ulrich, Karl T., Eppinger, Steven D., Yang, Maria C. – McGraw-Hill Higher Education, 7e édition. ISBN : 978-1-260-04365-5  
[^2]: *The Modular Structure of Complex Systems*, D. L. Parnas (University of Victoria), P. C. Clements & D. M. Weiss (U.S. Naval Research Laboratory)
