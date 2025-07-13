---
title: "Technologie"
meta_title: "Vue Technologie – Concevoir des systèmes durables, évolutifs et adaptables"
description: "La vue Technologie du CAF propose des principes d’architecture pour relever les défis de la dette technique, de la complexité des SI hérités et de la transformation numérique continue."
draft: false
---

## Technologie

Dans son article fondateur *« Why Software Is Eating The World »*[^1], **Marc Andreessen** observe que les logiciels absorbent une grande partie de la chaîne de valeur des industries historiquement ancrées dans le monde physique. Par exemple, dans les voitures d’aujourd’hui, les logiciels contrôlent le moteur, les systèmes de sécurité, les fonctions de divertissement et même la conduite autonome. La conséquence directe de cette tendance est que nous faisons face à un **flux exponentiel de changements**, liés aux nouvelles ambitions business et à l’accélération du rythme d’évolution technologique.

Mais un autre problème se pose : sauf si vous travaillez dans une entreprise très récente, il est probable que votre système d'information soit le **résultat de plusieurs décennies d’évolutions**. Et ces évolutions ont souvent été désordonnées, contraintes par le temps et les coûts. Ajoutons à cela la **loi de Conway** : il est fort probable que votre SI reflète la structure de votre organisation — souvent en silos — avec des intégrations complexes. Nous observons chaque jour des systèmes d’information complexes, fortement couplés, coûteux à maintenir, difficiles à faire évoluer, et sujets aux pannes. Leur **résistance au changement est maximale**. Il devient de plus en plus difficile de déployer de nouvelles fonctionnalités au rythme attendu. Le coût de maintenance augmente, la dette technique aussi, tout comme le risque d’échec, avec un impact négatif sur la qualité de service.

La **combinaison de ces deux phénomènes** est particulièrement explosive. C’est pourquoi notre **Cadre de Continuous Architecture** propose de vous aider à relever ces défis massifs en s’appuyant sur quatre grands principes :

* Architecturer pour l’évolutivité et la modularité  
* Architecturer pour la scalabilité et la résilience  
* Architecturer pour la livraison continue et l’opérabilité  
* Couplage symbiotique entre machines et humains[^2]

Vous pouvez voir ces axes comme des **principes directeurs** que les architectes doivent garder à l’esprit. Ils sont conçus pour les aider à construire des systèmes capables de **s’adapter durablement aux besoins futurs**, même s’ils sont encore inconnus.

---

### Architecturer pour l’évolutivité et la modularité

La **modularité** est essentielle : les monolithes freinent l’agilité. En isolant mieux les composants logiciels, on peut livrer certaines parties du système plus vite et de manière indépendante. La modularité améliore l’agilité mais aussi la **résilience**. Dans son étude [“Why Do Computers Stop and What Can Be Done About It?”](https://www.hpl.hp.com/techreports/tandem/TR-85.7.pdf), **Jim Gray** identifie deux leviers fondamentaux pour les systèmes tolérants aux pannes : **modularité** et **redondance**.

Avec la modularité, une panne n’affecte qu’un seul module (isolation). Avec la redondance (ou *process pairs*), on simule une réparation instantanée : si le MTTR (Mean Time To Repair) est zéro, la **disponibilité est maximale**.

L’**architecture évènementielle (EDA)** est aujourd’hui largement adoptée. Elle permet un couplage faible et une composition souple des composants logiciels, très utile face aux changements imprévus. De plus, le pattern **microservices** est de plus en plus utilisé pour implémenter des produits, car il facilite la redondance des déploiements et l’usage de plateformes auto-réparatrices comme Kubernetes, donnant l’illusion d’un MTTR nul.

Les intégrations se font de plus en plus via des **APIs**, qu’elles soient asynchrones (Kafka, par exemple) ou synchrones (REST), avec une préférence pour les APIs événementielles.

Ces architectures existent depuis longtemps, mais elles restent mal maîtrisées. Pour mieux les mettre en œuvre, nous recommandons d’utiliser la méthode [**Domain Driven Design**](https://fr.wikipedia.org/wiki/Domain-driven_design) (DDD), notamment :

* **Bounded Contexts** : pour découper verticalement, modéliser des domaines cohérents et sortir du monolithe  
* **Patterns stratégiques** : pour clarifier les échanges et les rigidités/flexibilités souhaitées entre domaines  
* **Ateliers Event Storming** : pour identifier les événements métier et modéliser le comportement du domaine

---

### Architecturer pour la scalabilité et la résilience

La **modularité** et la **redondance** sont des fondations, mais **ne suffisent pas à elles seules**. La résilience consiste à concevoir des systèmes capables de **se remettre de défaillances**, même majeures.

Aujourd’hui, nous devons concevoir des systèmes capables de **s’adapter élastiquement à la charge**. Cela implique de pouvoir **monter ou descendre en capacité à la demande**, tout en maintenant la **réactivité** et en optimisant les coûts. Cela n’est possible que si le système est **hautement observable**, pour détecter rapidement toute dégradation.

La **nature distribuée** des systèmes modernes accroît leur complexité. Nos solutions reposent sur de multiples logiciels, sur site ou dans le cloud, intégrant divers middlewares. Il faut alors **changer de posture** : considérer que les pannes ne sont **pas des hypothèses**, mais **des faits**. Les systèmes doivent être conçus pour **survivre aux pannes** et retrouver un état normal **automatiquement**.

Le [**Reactive Manifesto**](https://www.reactivemanifesto.org) résume bien cette vision :

> Ces changements ont lieu car les exigences applicatives ont radicalement évolué. Hier, une application importante utilisait quelques dizaines de serveurs, acceptait des temps de réponse en secondes, et tolérait des maintenances de plusieurs heures. Aujourd’hui, on attend une **disponibilité totale**, des **temps de réponse en millisecondes**, et on manipule des **pétaoctets de données**.  
> Nous avons besoin de systèmes **Réactifs**, **Résilients**, **Élastiques** et **Pilotés par les événements**. Nous les appelons **Systèmes Réactifs**.

---

### Architecturer pour la livraison continue et l’opérabilité

Le **rapport DevOps 2017** indique que la qualité de l’architecture est un facteur clé pour accélérer les pipelines CI/CD et améliorer la performance IT. Déjà en 2015, le rapport soulignait que les **équipes les plus performantes utilisent des architectures faiblement couplées**.

Comme nos solutions sont destinées à durer, nous avons la responsabilité de les **rendre déployables fréquemment**, facilement et sans interruption de service. C’est cela, **architecturer pour la livraison continue**.

Le but du **Continuous Delivery** est de réduire le délai entre un *commit* de code et sa mise en production. Pourquoi ? Parce qu’un code non déployé est **un stock**, avec des bugs inconnus, des risques de panne, voire une fonctionnalité inutile. **Plus le stock est grand, plus le risque est élevé** lors d’un gros déploiement. Et plus le risque est élevé, plus on ajoute de processus de validation. Ce qui ralentit… et augmente encore le stock. La seule issue :  
> **Si ça fait mal, faites-le plus souvent.**

Livrer souvent, en petits incréments, **réduit les risques** et permet un retour d’expérience rapide. Cela ouvre aussi la voie à un monde sans interruptions de service. Car non, il n’y a pas de « downtime planifié » pour un utilisateur final. Une indisponibilité est une indisponibilité, point.

Pour y parvenir, il faut :

* des **architectures modulaires**, pour limiter l’impact  
* des capacités techniques pour **automatiser les déploiements**, les **rollback**, et gérer des **feature toggles** (permettre le déploiement de fonctionnalités masquées jusqu’à leur activation contrôlée)

Mettre en œuvre des pipelines CI/CD efficaces ne relève pas que du mindset : cela nécessite aussi les **technologies suivantes** :

* **Cloud computing** avec des services IaaS / PaaS, pensés pour l’autonomie et l’automatisation  
* **Plateformes de conteneurs** : en attente  
* **API Manager** : pour sécuriser, surveiller et exposer les APIs  
* **Brokers événementiels** et plateformes de streaming  
* ... et bien d’autres encore

Toutes les équipes produit ne peuvent pas mettre en place seules ces fondations. Une approche **produit** des **plateformes technologiques** permet d’y parvenir. Ces plateformes sont des **produits**, développés et exploités par des équipes agiles pérennes, responsables du **plan-build-run** de ces capacités (développées en interne ou acquises).

Par capacités technologiques, on entend : bases de données, middleware d’intégration, infrastructure as code, conteneurs, monitoring… Ces équipes livrent régulièrement de nouvelles versions à l’organisation entière, avec des bénéfices clairs :

* Capacités à jour  
* Services en libre-service & automatisation  
* Flux continu de nouvelles fonctionnalités  
* ...

Tout cela aide les équipes produit à faire leur travail : livrer un flux continu de valeur à leurs utilisateurs finaux.

[^1]: Voir : https://www.wsj.com/articles/SB10001424053111903480904576512250915629460  
[^2]: Voir : *The Design of Future Things* par Don Norman — ISBN : 978-0-465-00228-3
