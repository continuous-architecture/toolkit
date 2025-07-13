---
title: "Cadre de la Continuous Architecture"
meta_title: "Framework de Continuous Architecture (CAF) – Un modèle pour l’ère du produit"
description: "Découvrez le Framework de Continuous Architecture (CAF), une approche structurée en six vues pour adapter votre modèle opérationnel d’architecture aux pratiques agiles, DevOps et à la livraison continue."
draft: false
image: "images/framework/framework.png"
---

## Le besoin de Continuous Architecture

Nous développons aujourd’hui des logiciels de manière continue — adaptons donc notre modèle opérationnel d’architecture à cette réalité. Voilà le message principal de notre initiative autour de la Continuous Architecture.

Depuis une dizaine d’années, de nombreuses pratiques d’ingénierie logicielle ont été introduites, principalement pour livrer plus rapidement nos produits aux utilisateurs finaux. La rapidité est évidemment essentielle aujourd’hui, mais ce n’était pas le seul objectif de ces approches : elles visaient également à créer de meilleurs produits qui répondent véritablement aux besoins des utilisateurs. Si vous observez les entreprises ayant mis en œuvre des transformations comme l’agilité, le lean, le DevOps… vous remarquerez souvent qu’un domaine est resté à l’écart : l’architecture.

Le **Cadre de Continuous Architecture** (ou **CAF**, pour *Continuous Architecture Framework*) que nous proposons ici vise justement à adapter notre modèle opérationnel à ce monde du flux continu. Il s’organise autour de six vues interconnectées, comme illustré dans le schéma suivant.

## La structure du Cadre de Continuous Architecture

![image](./images/framework/ca-framework-v08.svg)

Pour en savoir plus sur chacune des vues du cadre :

* [Décomposition de l’entreprise](enterprise-decomposition)
* [Objectifs d’expérience](experience-objectives)
* [Opérations](operations)
* [Organisation](organization)
* [Produit](product)
* [Technologie](technology)

Les questions suivantes vous aident à naviguer entre ces différentes vues :

* Définir vos **Objectifs d’expérience** permet d’évaluer dans quelle mesure votre produit correspond au marché visé. Vous vous demandez ici quel est le "job to be done" et comment résoudre les problèmes des utilisateurs.
* Cela vous pousse à définir clairement votre **produit**, ses limites, ses caractéristiques, ainsi que la manière dont il sera géré tout au long de son cycle de vie, de l’idéation à son retrait.
* Quelles sont les **technologies** que vous pouvez mobiliser pour soutenir et renforcer vos produits et vos capacités ?
* Les **opérations** sont essentielles pour faire fonctionner votre produit à l’échelle et l’intégrer dans l’organisation.
* Une véritable **organisation agile**, capable de livrer vos produits en cohérence avec l’architecture du système d’information, est également fondamentale — sans quoi des frictions apparaîtront entre les équipes.
* Et lorsqu’on parle d’organisation, il devient souvent nécessaire de réfléchir à la **décomposition de l’entreprise**.

## Appliquer le CAF tout au long du cycle de vie produit

Bien que les perspectives du CAF soient liées entre elles, le schéma ci-dessus et les explications données ne doivent pas être interprétés comme un processus en cascade. Les activités du cadre s’exécutent de manière **continue** tout au long du cycle de vie du produit. Selon l’étape où vous vous trouvez, certains aspects mériteront plus d’attention que d’autres.

![image](./images/framework/from-idea-to-retirement.png)

Par exemple, si vous êtes en phase d’exploration pour un nouveau produit, vous devriez probablement concentrer vos efforts sur les **objectifs d’expérience** et le **produit** lui-même. Ce n’est sans doute pas encore le bon moment pour investir massivement dans les **technologies** ou les **opérations**. Mais dès que vous entrez en phase de croissance, ces deux dimensions deviennent cruciales si vous ne voulez pas mettre votre activité en péril.

Cela signifie que les aspects technologiques et opérationnels peuvent être traités en parallèle à l’échelle de l’entreprise ou des unités métiers, afin de fournir aux équipes produit les bons leviers au bon moment — et ainsi gagner un temps précieux.

Et que cela nous plaise ou non, la **décomposition de l’entreprise** influencera ce que vous faites, à travers une architecture intentionnelle qui reflète généralement la manière dont l’entreprise est organisée. Cela peut survenir à tout moment. C’est donc à nous d’utiliser le **Cadre de Continuous Architecture** pour accompagner cette décomposition, voire l’influencer, notamment grâce à la **manœuvre de Conway inversée**, qui consiste à concevoir une organisation pour qu’elle reflète l’architecture (et non l’inverse).

L’une des implications de la notion de *continu* ici est de trouver un **équilibre entre architecture intentionnelle et conception émergente**. Cela permet de mieux gérer l’incertitude et la complexité qui caractérisent le parcours numérique des entreprises.
