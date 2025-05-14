---
title: "Scoping 360"
meta_title: "Practices"
description: "this is meta description"
draft: false
---

## Scoping 360°

NOTE: The Scoping 360 toolkit is a major evolution of the internal Michelin Value Driven Design / Design Event practice (descibe in the free book [Agile with Guts - A pragmatic guide to value-driven development](https://www.infoq.com/minibooks/agile-guts/) developed around 2010. Evolution which is based-on and inspired by [OCTO 360° Agile Scoping methodology](https://blog.octo.com/le-cadrage-360-preparez-vos-projets-de-delivery-agile/).

The objective of the Scoping 360° toolkit is to best prepare an agile delivery team so that they can build the right product right and fast. It is practice describing activities to perform in order to align the delivery team on a vision, ready to develop a product integrated with its ecosystem, managing risks.  

Concretely it's a set of collaborative meetings, tailored based on the context, usually organized at the boudaries of MVPs/release of your product.

![image](./images/framework/from-idea-to-retirement.png)

## Scoping 360° guiding principles & goals

* **Time boxed**: To quickly converge towards tradeoff. The duration (usually between 2 to 6 weeks) of the scoping depends on the adaptation to the  context, but as soon as we agreed on the planning, the end-date is fixed.
* **Unit of time, unit of place**: To encourage cooperation, all the people, business and IS/IT, who have to deal with one of the themes addressed in the scoping participate at the same time and in the same (virtual) place to the workshops that deals with the theme. The journey is as important as the scoping deliverables, so all participants must experience the same journey.
* **Incremental & evolutive**: The goal is to be ready to start implementing the next release not all future releases of your product until the end of its life. As scoping 360° is an iterative approach, you will have opportunity to readjust when needed.
* **See the whole**: When we say 360°, we really mean it. The methodology is designed to go through all the different perspectives you need to get a complete and holistic view of your product.
* **Enjoy**: have fun and learn together.

![image](./images/practices/scoping360-workshops.png)

360° means that the scoping covers all themes that the agile team will have to deal for the delivery of the product:

* Product:  vision, value proposition, problems to solve, users research, storymap, roadmap,...
* Delivery organization: role & responsibilities, risks, team's skills, team delivery standard,....
* Technics: functional and technical architecture, devops, test strategy, development practices, ...

The different workshops are based on a mix of Lean, Agile, User research (UX, Design Thinking,...), software engineering and continuous architecture technics in order to:  

* understand the end-user problems to solve,  
* build the product vision,  
* figure the team organization,  
* manage the risks
* create the product framing,  
* define the architecture (including operability),  
* define the product design,
* plan your Minimum Viable Product.  

![image](./images/practices/misc/scoping360-goals.png)

## Architecture workshops in Scoping 360°

To outline the architecture of a product, we have defined a sequence of workshops as represented in the below figure. As for the whole scoping approach, we tried to cover all aspects of the architecture in a 360° overview manner. Behind each workshop, the objective is to collectively and progressively define the architecture of your products but also to produce the minimal set of architecture deliverables. Because yes we do believe architecture documents have to be produced.

![image](./images/practices/misc/scoping360-architecture.png)

1. It starts with a knowledge sharing session to allow workshop attendees to share as much as they want on the current IT solutions. If you are building a brand new product then this step is optional of course. But otherwise, try to gather information on user feedbacks, problems and statistics coming from the operations ...
2. Then we do recommend to start the architecture outlining process by applying the Domain Driven Design practices. Remember that the earlier phases of the scoping 360 helps you to discover the problem your product is helping to solve. So the problem space mentioned in DDD is already partially dealt with. But performing an event storming can be extremely useful to describe your business domain through its main business events. The ubiquitous language surfaces thanks to the event storming and bounded contexts can be identified. Each context is a solution for a problem identified in the business domain. Defining how bounded contexts related to each other and describing each contexts complete the approach.
3. Leveraging the DDD approach, you can start to outline your product architecture. One of the reason why we believe DDD is to be applied is that it promotes modularity through the identified bounded contexts. And with modularity comes the ability to evolve and the possibility to choose different stacks and solution for each bounded contexts. Keep in mind that each context may have a different set of constraints usually expressed with fitness functions. A fitness function is an architectural characteristic of your product you want to protect over time.
4. The next step is to choose the technology stack that will be used to develop the product made of the different bounded contexts you identified. For each context you need to define if you're going to develop it (because it's so core to your business model that supporting it with a **C**ommercial **O**ff **T**he **S**helf is not recommended) or simply rely on a market solutiion (SaaS or COTS), if appropriate the development language, where to host your context (including network description), middleware you can leverage ...  
5. Do not forget that architects are also responsible to design products that can be continuously tested, packaged and deployed. That's the purpose of the **C**ontinuous **I**ntegration & **C**ontinuous **D**elivery stack. And the decisions you're taking all along this architecture workshops sequence should be considered in the light of CI/CD requirements. Anything that prevent you to automate these integration and deployment pipelines should be re-considered.
6. We do recommend to finish the architecture definition by the operability check. We as architects have a responsibility to make sure the products we designed will be operable once deployed in production. This last step is a set of questions asked to the team to go through all operability aspects: did you consider logging & monitoring? how do you address resiliency, manage failures and recover from them?  ...). Putting this operability check at the end does not mean you need to wait the very last workshop to consider operability. We positioned it here as a last gate check.
