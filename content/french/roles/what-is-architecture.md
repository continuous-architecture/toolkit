---
title: "Qu'est-ce que l'architecture"
meta_title: "Qu’est-ce que l’architecture ?"
description: "Découvrez comment la Continuous Architecture définit l’architecture logicielle comme l’ensemble des décisions clés impactant le coût du changement, la qualité et la rapidité de livraison dans le temps."
draft: false
---

## Qu'est-ce que l'architecture ?

La définition du terme *architecture logicielle* fait l’objet de nombreux débats dans notre industrie depuis des décennies. Nous ne prétendons pas avoir trouvé la vérité grâce à notre initiative de Continuous Architecture. Nous allons simplement nous référer à certaines de nos sources d'inspiration pour définir notre socle.

Lorsqu’on parle d’« architecture », on fait généralement référence aux aspects les plus importants de la conception interne d’un système logiciel. Pour certains, l’architecture concerne l’organisation fondamentale d’un système ou la manière dont les composants de haut niveau sont interconnectés. Mais il est difficile de définir ce qui est « fondamental » et ce qui ne l’est pas. Pour d’autres, c’est l’ensemble des décisions de conception à prendre dès le début d’un projet — ou aujourd’hui, tout au long du cycle de vie du produit. Là encore, cette définition est incomplète, car elle impliquerait que chaque décision est une décision architecturale.

Grady Booch, IBM Fellow, a souligné très tôt qu’une architecture bonne et intentionnelle est cruciale, faute de quoi le système devient plus lent et plus coûteux à faire évoluer dans le temps :

> Toute architecture est une conception, mais toute conception n'est pas de l'architecture. L'architecture représente les décisions de conception significatives qui façonnent la forme et la fonction d’un système, où "significatif" se mesure par le coût du changement.  
Tout système logiciel complexe possède une architecture : certaines sont intentionnelles ; quelques-unes accidentelles ; la plupart émergentes. Toute architecture significative naît d’un processus vivant, vibrant, de délibération, de conception et de décision. — *Grady Booch*

Grady insiste sur l’importance des décisions en les reliant au **coût du changement**. Et c’est justement là qu’un changement important a eu lieu. Au début des années 2000, Martin Fowler et Ralph Johnson ont ajouté un point de vue intéressant, qui complète harmonieusement cette définition :

> L’architecture concerne les choses importantes. Peu importe lesquelles. À première vue, cela peut sembler banal, mais cela porte en réalité une grande richesse. Cela signifie que penser de manière architecturale, c’est d’abord **déterminer ce qui est important** (c’est-à-dire ce qui est architectural), puis concentrer ses efforts pour maintenir ces éléments en bon état.  
Pour qu’un développeur devienne architecte, il doit apprendre à reconnaître les éléments importants, ceux qui risquent de causer de sérieux problèmes s’ils ne sont pas maîtrisés. — *Martin Fowler & Ralph Johnson*

### Pour résumer :

**L’architecture, c’est l’art de prendre les décisions importantes sur des éléments difficiles et coûteux à modifier dans le futur.**

## Pourquoi l’architecture est-elle importante ?

Ce qui est compliqué avec l’architecture, c’est qu’elle est **peu visible** pour les utilisateurs et les clients à première vue. Pourtant, nous savons qu’une mauvaise architecture empêche les développeurs de bien comprendre ce qu’ils construisent, ce qui augmente les risques de ne pas répondre aux attentes des utilisateurs. À terme, cela rend également les changements plus complexes et plus lents.

En résumé, une mauvaise architecture aboutit à un produit :

* difficile à faire évoluer
* livré lentement
* contenant davantage de défauts
* et qui ne répond pas aux vrais besoins des utilisateurs

### Une bonne architecture permet donc de garantir :

* une **qualité interne élevée** du produit
* une **livraison rapide et régulière de valeur** aux utilisateurs

Enfin, gardez à l’esprit que **si vous ne travaillez pas l’architecture de votre produit avec l’équipe tout au long de son cycle de vie, une architecture émergera quand même**. Et la dernière chose que vous souhaitez, c’est de subir une architecture que vous n’avez pas choisie.
