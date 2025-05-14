---
title: "Team Autonomy Readiness"
meta_title: "Rituals"
description: "this is meta description"
draft: false
---

## Team Autonomy Readiness

One of the key objective of Continuous Architecture operating model is to safely entrust product teams in taking architecture decisions to enable end-to-end ownership and continuous delivery. This means that we need to decentralize decision making on architecture while keeping the integrity of an information system which is usually compose of thousands of applications with complex interweaving flows of data between them.

To achieve this objective and as different delivery teams require varying levels of oversight to successfully conduct architecture activities, C.A. operating model proposes a formal approach to evaluate their level of readiness for autonomy in taking architecture decisions based on the context. This assessment is done on a regular basis, over a 12 to 18 months horizon, during the xref:team-readiness-ritual[Team readiness for autonomy ritual,800,800] with the autonomy readiness tool.

## The team autonomy readiness tool

The tool proposes 3 different levels of centralization/decentralization model for architecture decision making which are:

* *Level 1*: The delivery team is autonomous to make the architectural decisions necessary for the evolution of the products it manages. Product & Fullstack architects provide support on-demand.
* *Level 2*: Architectural decisions are taken under the guidance of Product and Fullstack architects in charge of the domain/product line to which the product belongs. They lead the collaboration between all actors, ensure the end to end integrity and consistency of the system at scale while developing delivery teams judgement (coaching & mentoring) to increase their autonomy.
* *Level 3*: Architectural decisions need to be taken centrally under governance of enterprise architecture. EA architects educate architects community and delivery teams on new architecture considerations to increase their autonomy.

The level of readiness is defined delivery team by delivery team based on the assessment around 2 dimensions.

* On *Y* axis: the delivery team maturity regarding:
  * knowledge and mastery of architecture guiderails (principles, blueprints & standards) of the organization it belongs to.
  * technical and functional skills assessment of the delivery team's members.
* on *X* axis: the level of architecture risks related to the product considering among other things:
  * the stage of the product in its life cycle
  * dependencies with other products and cross-team decisions needs
  * security/legal consideration for the company
  * level of investment
  * sourcing that engage the company

![image](./images/rituals/kit-autonomy-assesment.png)

💡 : Together, the team’s functional & technical maturity and the level of architecture risk determine its level of readiness to self-manage architectural decisions on products it manages.

As one of the responsibility or the architect role in C.A. operating model is to educate delivery teams in design and architecture considerations, the assessment ritual is the opportunity to evaluate C.A practices adopted (the A symbol on the poster) and identify areas to improve with the delivery team (T symbol in the poster). That's the purpose of the radar on the right. It's made to help the team assess itself again the 8 most important areas of Continuous Architecture:

* Empowerment of the team: product approach & architecture roles
* Rituals & practices
* The dialog zone formalized in architecture deliverables & architecture decision records
* One system properties: how you products comply to the evergreen principle

## The team autonomy readiness assessment ritual

Evaluation of teams autonomy readiness is done on a regular basis during this ritual facilitated by the Product architect and the Fullstack architect for the product or line of products they manage.

![image](./images/rituals/team-autonomy-readiness.png)

Attendees are usually the Delivery Manager, the Lead Architect, the EA Architect and optionally technical leaders and team leaders of delivery squads.

The main outcome of the meeting is obviously the assessment of teams formalized in the Team Autonomy readiness poster but the dialogue between the parties is equally important. The ritual is also the opportunity to update **Continuous Architecture progress & skill plans** for delivery teams and architects as needed.

![image](./images/rituals/misc/kit-generic-progress-plan.png)

To prepare such assessment, Product & Fullstack architects have to consider different inputs:

* Products roadmaps for the next 12 to 18 months
* Last link:./img/kit-generic-progress-plan.png[Continuous Architecture progress & skill plans] review if it was done before
* Global architecture asssements of their product portfolio (level of obsolecence & IT debt, alignment with architecture principles & blueprints, quality of service, quality of experience,...)

## Team autonomy readiness assessment outcome example

Here is an example of an assessment done on a domain composed of several delivery teams.

![image](./images/rituals/misc/team-autonomy-sample1.jpg)

Rounded rectangles materializes long lived teams. As you can see, on this domain, one team is considered autonomous when it comes to architecture because they do have the skills within the teams to do the architecture and the level of risk is considered acceptable. We have two teams that are maturing toward this autonomy thanks to architects being embedded into them. And we have one team that require to be steered as it is positioned on critical business process without the skills in the team to safely make those decisions. For each team, a set of post-its are defined: green ones represent latest achievements and red ones progress areas.
Through this tool you have a clear and simple overview of your domain based on your product teams.

![image](./images/rituals/misc/team-autonomy-sample2.jpg)

The radar is used to show for each of these teams where they are on the journey to adopt Continuous Architecture. It helps to visualize areas where teams consider they've reached their target and those where they are still progressing. But it also give the overall level of maturity of the domain and where progresses are being made
