---
title: "Architecture Kata"
meta_title: "Architecture Kata – S’entraîner à concevoir régulièrement"
description: "L’Architecture Kata est un rituel collaboratif permettant aux architectes de pratiquer leur métier, de renforcer leurs compétences en conception et de favoriser l’apprentissage collectif."
draft: false
---

## Peut-on aider les architectes à pratiquer plus souvent leur métier ?

À moins de pratiquer l’architecture tous les jours, nous passons souvent notre temps à faire des activités très différentes, comme illustré ci-dessous.

![image](./images/rituals/misc/architects_do.jpg)

(courtoisie de [Stefan Tilkov](https://www.innoq.com/en/staff/stefan-tilkov/))

Donc si vous vous reconnaissez dans cette situation, nous avons un rituel qui a été créé pour vous aider : il s’agit de l’architecture kata, et nous voulons remercier [Ted Neward](https://archkatas.herokuapp.com) qui l’a formalisé il y a plusieurs années.

## Pourquoi un rituel pour pratiquer l’architecture ?

Les deux citations suivantes parlent d’elles-mêmes :

> Comment obtient-on de bons designers ? Les bons designers designent, tout simplement. — Fred Brooks

> Alors comment espère-t-on obtenir de bons architectes, s’ils n’ont que quelques rares occasions de faire de l’architecture dans toute leur carrière ? — Ted Neward

Le nom kata est une analogie directe avec le mot japonais Kata (形, 型) qui signifie littéralement *« forme », en référence à une séquence détaillée de mouvements chorégraphiés en arts martiaux, pratiquée seul ou en groupe pour mémoriser et perfectionner les gestes.* — Wikipédia

L’idée d’un architecture kata est donc de répéter les « mouvements » d’architecture suffisamment souvent pour les mémoriser et les perfectionner avec le temps.

### Comment se déroule le rituel ?

Il n’y a que deux prérequis pour organiser un architecture kata : un sujet / problème sur lequel travailler et au moins 2 heures devant vous.

Un kata se déroule en 4 phases :

* Phase d’échauffement : le modérateur (qui joue le rôle de « client ») présente le sujet / problème sur lequel les groupes devront travailler. Il prend le temps de répondre aux questions de clarification afin que les participants découvrent bien le sujet. Ensuite, on constitue les groupes / équipes. En fonction du nombre de participants, on forme une ou plusieurs équipes de 5 personnes. Si vous avez plusieurs équipes, un avantage supplémentaire apparaît : en ayant plusieurs solutions proposées pour un même problème, vous pourriez découvrir des approches très différentes ;)
* Phase d’architecture : chaque équipe essaie d’esquisser une architecture répondant au problème donné. Les règles sont simples :
  * Vous pouvez poser toutes vos questions au modérateur concernant le sujet / problème.
  * Toute technologie est autorisée. En général, les clients se préoccupent peu de la technologie utilisée. Préparez-vous simplement à justifier vos choix pendant la phase de restitution.
  * Vous pouvez faire des hypothèses sur des technologies que vous ne maîtrisez pas, à condition de les expliciter clairement pendant la restitution.
  * Vous ne pouvez pas supposer que vous avez le pouvoir d’embaucher ou de licencier les membres de l’équipe. Vous devez considérer que l’équipe de développement est similaire à celle avec laquelle vous travaillez quotidiennement.
* Phase de restitution (ou revue par les pairs) : chaque équipe présente sa solution aux autres ou assiste à la présentation d’une autre équipe. Si vous présentez, vous devez expliquer votre proposition et répondre aux questions. Si vous écoutez, vous devez poser des questions — de préférence constructives. N’hésitez pas à remettre en cause certains choix, tant que cela reste respectueux. Le modérateur est là pour apaiser les débats trop passionnés. Gardez en tête que chacun peut faire des hypothèses sur une techno mal connue, à condition qu’elles soient déclarées. Et souvenez-vous : ce sera bientôt à vous de présenter !
* Phase de vote et célébration : une fois que toutes les équipes ont présenté leur solution, on passe au vote. Le modérateur fait un compte à rebours « 1-2-3 », et chacun donne son avis :
  * 👍 : L’équipe a bien compris le problème, répondu aux principales questions, proposé une techno crédible, et a une vision globale du système. Pas besoin d’un diagramme UML complet — juste de la confiance dans leur capacité à en produire un.
  * 👎 : L’équipe a manqué quelques points importants. Elle a oublié des questions clés, des aspects fondamentaux, ou n’a pas donné l’impression d’avoir bien saisi les enjeux.
  * 👎 : L’équipe est complètement passée à côté. Elle a fait des hypothèses irréalistes, posé peu ou pas de questions, et a raté sa présentation.

Mais ce n’est pas fini ! Une fois le vote terminé, il faut respecter un ancien proverbe klingon : *« La vengeance est un plat qui se mange froid »*. L’équipe sortante choisit la prochaine à monter sur scène, et on recommence la phase de restitution.

Le visuel ci-dessous résume comment un architecture kata est conduit :

![image](./images/rituals/architecture-kata.png)
