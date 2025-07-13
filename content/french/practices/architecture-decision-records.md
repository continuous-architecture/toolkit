---
title: "Architecture Decision Records"
meta_title: "Architecture Decision Records – Prendre et documenter les bonnes décisions"
description: "Une méthode structurée pour la prise de décision architecturale : savoir quand décider, impliquer les bonnes personnes, documenter et diffuser les décisions au sein des équipes."
draft: false
---

## Des décisions, vous avez dit décisions ?

Prendre des décisions joue un rôle essentiel dans la vie d’un architecte. Presque chaque jour, nous devons trancher.  
Plutôt que de chercher à définir ce qu’est une décision et sur quoi elle doit porter, nous préférons nous référer à Martin Fowler qui disait :  
**« L’architecture concerne les choses importantes. Quelles qu’elles soient. »**  
Une bonne règle serait donc : une décision doit être prise lorsqu’un **changement ou une reprise coûte cher**.

## Le dernier moment responsable

Notre conviction : **attendre le dernier moment responsable** pour prendre une décision. Deux raisons principales à cela :

* Il est plus facile de décider lorsqu’on dispose de davantage d’informations
* Le processus de décision ne doit pas devenir un goulot d’étranglement pour la livraison

Mais attention à deux pièges :

* Déterminer **à quel moment on a assez d’informations** pour décider. Nous ne voulons pas que les architectes attendent indéfiniment d’avoir toutes les infos — parfois, il faut avancer avec des hypothèses.
* Cette approche peut générer de l’**inconfort dans l’équipe**, car souvent, les membres attendent l’approbation (ou la bénédiction ?) des architectes pour avancer.

## Combien de temps consacrer à une décision ?

Jason Yip, dans son article [Impact of a bad decision vs time spent deciding](https://jchyip.medium.com/impact-of-a-bad-decision-vs-time-spent-deciding-d9bdc241163), propose une grille de lecture intéressante :  
Il croise **l’impact d’une mauvaise décision** avec le **temps passé à décider**, ce qui donne quatre quadrants :

* **Téméraire** : impact élevé, temps passé faible  
* **Prudence appropriée** : impact élevé, temps passé élevé  
* **Décisif** : impact faible, temps passé faible  
* **Trop prudent** : impact faible, temps passé élevé

![image](./images/practices/misc/decision_time_spent.png)

Positionnez vos décisions dans ces cadrans pour vous assurer que vous leur consacrez **le bon niveau d’attention**.

## Qui contribue au processus de décision ?

Toutes les décisions doivent-elles être prises par les architectes ? **Non**, mais ils doivent **piloter** ce processus.  
Cela implique que **toute personne ayant un avis pertinent** dans l’équipe doit pouvoir y contribuer.  
Et si votre équipe **n’est pas totalement autonome**, des contributeurs **externes** peuvent également intervenir : experts métier, architectes transverses, CTO...

## Le processus de prise de décision

On pourrait croire que parler de processus est démodé. Pourtant, **une dose de méthode peut réellement améliorer la qualité des décisions**.  
Voici un processus en **5 étapes** :

* **Le déclencheur** : pourquoi devons-nous prendre cette décision ? Une fonctionnalité métier, une contrainte technique, un problème de production, une intention d’architecture ?
* **La documentation** : formuler clairement le problème à résoudre, les options envisagées, les critères de choix, les conséquences...Nous recommandons de **documenter cela dans un artefact versionné avec votre produit**, par exemple dans le dépôt Git. Ce [modèle ADR](https://github.com/joelparkerhenderson/architecture_decision_record/blob/master/adr_template_madr.md) peut vous inspirer.
* **La recherche de consensus** : pour éviter les décisions descendantes, faites des PoC, des ateliers, des brainstormings. Et mettez à jour l’ADR avec les résultats.
* **La revue** : soumettez votre décision à l’équipe (rituel hebdo) ou à vos pairs pour revue. L’objectif est d’obtenir un maximum de retours et valider l’alignement.
* **La validation** : une fois la maturité atteinte, validez votre décision via une PR / MR. Fusionner le fichier Markdown ADR dans le dépôt constitue une **validation formelle**.
* **La communication** : informez les parties prenantes (équipes produit, infra, sécurité, architecture d’entreprise, etc.). Une décision ignorée est une décision inefficace. N’hésitez pas à créer une version adaptée selon les cibles.

Voici un visuel illustrant ce processus :

![image](./images/practices/kit-architecture-decision-record.png)
