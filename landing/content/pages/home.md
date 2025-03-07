---
# this is yml in md so it is indentation sensitive
layout: home
permalink: /
catchphrase:
  baseline: Build your agile operating model to develop and operate outstanding digital products
hero:
  image: assets/imgs/hero-cover.jpg
  title: Continuous Architecture
  baseline: |-
   Continuous Architecture offers guiding ideas, practices, rituals and methods. Unlike most existing enterprise architecture or agile at scale frameworks, Continuous Architecture:
  values: 
    - Starts from your problems instead of promoting generic organizational or architecture models
    - Operationalizes the shift from project to product
    - Leverages the power of modern software engineering practices
    - Is truly open
  call_to_action:
    text: Start your journey 
    url: /docs/start-your-journey/start-your-journey.html
timeline:
  events:
    - title: How France Travail re-invented its architecture practices
      time: "14th, March 2025 / 12 pm - 1pm"
      location: Webinar
      url: https://www.linkedin.com/events/commentfrancetravailr-inventese7297663805784743936/about/
    - title: How to navigate Complexity with Naval Group
      time: "28th, March 2025 / 1 pm - 2pm"
      location: Webinar
      url: https://www.linkedin.com/events/naviguerencomplexite7303037022653300738/about/
    - title: Continuous Architecture sharing day
      time: "20th, May 2025 / Full day"
      location: Location to be announced
      url: https://www.linkedin.com/company/continuous-architecture/      
    - title: SRE and Architecture
      time: "24th, June 2025 / Full day"
      location: Location to be announced
      url: https://www.linkedin.com/company/continuous-architecture/      
features:
  top:
    title: "Problem Discovery"
    text: |-
      *What are the major issues facing your enterprise?* Engineers and architects are proficient at solving problems, they are often less skilled at challenging the way problems are stated. Spending time solving the wrong problem wastes the enterprise's time and resources. Therefore, Continuous Architecture recommends to pay attention to the way problems are framed because it largely influences solutions. Reframing a problem can sometimes help you find radically different and more effective solutions. The discovery of a problem begins with an acute sense of observation that leads you to ask the right questions. Reframing also requires the open minded attitude that can help you think out of the box. 
    icon: assets/imgs/magnifier-icon.svg
    url: /docs/problem-discovery/problem-discovery.html
  left  :
    title: "Framework"
    text: |-
      The tools and kits we have created can be used in isolation or they can work together to help the enterprise change to be more successful. In a  **V**olatile, **U**ncertain, **C**omplex or **A**mbiguous world, it is important to bring structure while enabling business and operational agility. The Continuous Architecture Framework (CAF) combines intentional architecture and emergent design to help autonomous teams align around a common purpose and a set of shared Objectives and Key Results (OKRs) while preserving agile teams' autonomy. Team autonomy is a pre-requisite to speed because it reduces coordination activities that slow down teams. On the other hand, when autonomous teams are mis-aligned it increases the risk of delivering poor client and employee experience due to ineffective coordination.
      The CAF helps maintain a healthy balance between autonomy and alignment along the enterprise journey toward an agile @scale operating model. The equation we're proposing is **ALIGNMENT + AUTONOMY > CONTROL**.
    icon: assets/imgs/framework-icon.svg
    url: /docs/framework/framework.html
  right:
    - title: "Roles"
      text: |-
        What are the *roles* we propose in the Continuous Architecture operating model.
      icon: assets/imgs/roles-icon.svg
      url: /docs/roles/architects-roles.html
    - title: "Practices"
      text: |-
        Here is the *toolbox* we have created to help teams realizing their architecture activities. A set of tools and kits that can be used.
      icon: assets/imgs/practices-icon.svg
      url: /docs/practices/practices.html
    - title: "Rituals"
      text: |-
        Architecting is not only about tools, kits and practices. Equally important is the time we spend together working on the architecture around some key *rituals*. The objective is to foster collaboration in teams on architecture activities.
      icon: assets/imgs/rituals-icon.svg
      url: /docs/rituals/rituals.html
case_studies:
  - company: Michelin
    logo: assets/imgs/logo-michelin.jpg
    title: Order to cash domain
    detailed_title: How we leverage Continuous Architecture and Domain Driven Design approaches to switch to an Event Driven Architecture
    content: |-
      Several years ago, we revisited our information system supporting order to cash processes from order capture to transportation optimization up to logistic delivery. We used to have a legacy monolith hosted on a mainframe supporting most of these processes. We decided to adopt a best of breed approach: several solutions were implemented to support the different part of these end to end processes. 
      As soon as you have several systems contributing, you need a central component to ensure the overall execution and in our case it was a central orchestrator through Business Process Management tool. After several years, we saw different issues rising with this approach especially around the orchestrator.
      So, we decided to re-think our architecture around the concept of events and their choregraphy as we wanted to get rid of this orchestrator. And we'll explain how we did it. The approach we took, look at it as a recipe we tried but keep in mind we don't pretend to be a three star restaurant ;) 
    url: /docs/case-studies/order-to-cash/orderToCashCaseStudy.html
  - company: Michelin
    logo: assets/imgs/logo-michelin.jpg
    title: Re-architecting our curing solution
    detailed_title: How Continuous Architecture helped us to re-architect monolith legacies on our plants with an Event driven micro-services solution
    content: |-
      In the tyre industry, we do make tyres by cooking or curing a raw tyre, so-called green tyre which is an assembly of rubber and metallic layers. This process takes place in plants in the curing shop where press lines composed of press machines are steered in parallel by an Information System.
      Here we'll share with you how we leverage the Continuous Architecture operating model in the creation of a new delivery team and how Domain Driven Design and Continuous Architecture are tightly related.
      You'll see how to explore a domain with an Event Storming, how to decompose your domain into bounded contexts, how to define the coupling between bounded contexts with a context map, how to describe your contexts and the end to end dynamic.
    url: /docs/case-studies/curing-domain/curing.html
  - company: Retail Bank
    logo: assets/imgs/logo-bank.svg
    title: Innovative lending product
    detailed_title: How Continuous Architecture leverages the Jobs-To-Be-Done approach to help innovate products and services
    content: |-
      We used the Jobs-To-Be-Done approach to understand what treasurers seek to accomplish. A job is a goal or an objective independent of the products or services a bank offers. Bank clients, in this example treasurers, purchase your products or services as a mean to an end which is to help them better do their jobs. For example, treasurers forecast the cash flows that result from their operations to estimate working capital requirements. If a bank can predict small businesses’ minimum sales with high accuracy, it can invent a differentiated lending product. We illustrate this outside-in approach helped the bank innovate.
    url: /docs/case-studies/banking-case-study/banking-case-study.html
  - company: Michelin
    logo: assets/imgs/logo-michelin.jpg
    title: Architecture for flow
    detailed_title: How Continuous Architecture leverages Domain Driven Design and team topologies to achieve the architecture for flow state
    content: |-
      A data platform team operating in the Connected Mobility field was facing delivery issues slowing them down up to a point it took ages to deliver a simple evolution or feature. This case study will show how this monolith data platform was broken up in smaller pieces and how we adapted the organization to the architecture (and not the other way around).
    url: /docs/case-studies/architecture-for-flow/ultim.html    
references:
  - name: Continuous Architecture
    image: assets/imgs/references/ca-book-cover.jpg
    content: |-
      When we decided to start this Continuous Architecture journey, we discovered that the term have been already coined by Murat Erder and Pierre Pureur. Back in 2015, they published their fist book [Continuous Architecture: Sustainable Architecture in an Agile and Cloud-Centric World](https://www.amazon.fr/Continuous-Architecture-Sustainable-Agile-Cloud-Centric/dp/0128032847) and they are working on a second one [Continuous Architecture in Practice](https://continuousarchitecture.com). We can say that Murat and Pierre through their work were a source of inspiration for us. We got in touch with them to make sure it was ok to reuse the Continuous Architecture term and they agreed. We're very grateful to them and the least we could do is to reference their work. If you have a chance to have a look at it, you'll see that we share many things: spirit, ideas, philosophy & experiences. 
  - name: Open Agile Architecture<sup>TM</sup>
    image: assets/imgs/references/open-group-aaf.jpg
    content: |-
      Several Continuous Architecture's maintainers contributed to the development of the Open Agile Architecture<sup>TM</sup> Standard. Though the Continuous Architecture Toolkit and Framework was developed independently, we believe the two bodies of knowledge share many common principles and are therefore consistent and complementary.
  - name: SAFe and Scaled Agile Framework
    image: assets/imgs/references/safe.jpg
    content: |-
      Continuous Architecture toolkit leverages the architectural runway, a practice coming from the [SAFe and Scaled Agile Framework](https://www.scaledagileframework.com/) ® 
      SAFe and Scaled Agile Framework are registered trademarks of Scaled Agile, Inc.
  - name: DDD-crew
    image: assets/imgs/references/ddd-crew.png
    content: |-
      [Domain-Design Design Crew](https://github.com/ddd-crew) is an open source project aiming to help adopt the famous Eric Evans' DDD approach. DDD-crew is really an inspirational source for us and we hope we can contribute back. 
value_proposition:
  image:
  title:
  text: |-
    lorem ipsum
  call_to_action:
    text:
    url: 
---
