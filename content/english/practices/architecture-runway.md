---
title: "Architecture Runway"
meta_title: "Architecture Runway – Aligning Intentional and Emerging Design"
description: "Use the Architecture Runway to balance intentional architecture and emerging design, enabling agile teams to build scalable, future-proof solutions."
draft: false
---

This practice is designed around several believes

* The times when architects came down from their ivory tower to dictate teams what to do are over.
* People working on products on a day to day basis are well positioned to say something interesting on its architecture and design. This is what we call the emerging design.
* On the other hand, emergent design alone could be risky especially when developing large and complex systems. There is still room for architects to drive (Notice here we said drive, not imposed) the architecture of products. If they don't do it, an architecture will emerge from the ground and they'll undergo it. This set of intentions from architects is called the intentional architecture.
* The architecture of a product is a journey: we need to adapt its course depending on constraints and changes we get along the way.

Continuous Architecture toolkit leverages the architectural runway, a practice coming from the [SAFe and Scaled Agile Framework ®](https://www.scaledagileframework.com/) [^1],  to continuously design technical foundations needed to implement near-term features without excessive redesign and delay. It' a continuous practice enabling a meet in a middle approach where architects and team members meet to discuss and debate on the architecture and:

* organize the dialog zone between the intentional architecture (hard rules) and the emerging design (left open zone) as depicted on the below figure
* define the right balance between functional and technical stories in the product backlog.
* look for opportunity to invest on technical stories increasing ability to change

![image](./images/practices/misc/connect-the-dots.png)

This dialog zone is healthy because

* the teams can influence and correct the intentional architecture using feedback from field and feeds the future with new ideas.
* it gives many opportunities to architects to convince instead of impose, provides guidance for cross-team alignment and manage dependencies between products

## The runway practice in a nutshell

As many practices in the Continuous Architecture operating model, the runway is continuous. We recommend to follow it at least once a year and if possible 2 to 3 times to enable pivots before the cost of change becomes too high.

This practice has 5 distinct steps

* It starts with the collection of all intentional inputs. Here one finds the ambitions for your product, roadmaps (business, IS ...) and all rules & frameworks you do have in your organization (reference architecture, technical stacks allowed ...). Here, tools like the [Thoughtwords radar](https://www.thoughtworks.com/radar) are extremely useful to define and visualize it. Through it, your organization can tell you the Techniques, Tools, Platforms and Languages & Frameworks that you can use (or not) to deliver your product. For instance, in your company, Kafka is **the** technology to support event driven architecture. This tool is especially interesting because you can indicate for each item its maturity level (assess, try, adopt or hold).
* Then you need to analyse the backlog of your product to identify issues & user stories that are significant from an architecture perspective. Along with this analysis, we do recommend to also define a set of fitness functions for your product. As defined in [Building Evolutionary Architectures](http://www.thoughtworks.com/books/building-evolutionary-architectures), fitness functions provides an objective integrity assessment of some architectural characteristics you think must be preserves. From there, you can draft a list of technologies and techniques you should you be using, the architecture styles that fit your needs, the design patterns you could reuse to meet these challenges.
* At this stage, you have a clear view on the features you need to support, the constraints & guidance from your ecosystem and the architecture characteristics you need to protect. It's the right time to create the technology framework for your product. Again the tech radar can be useful here. You can specialize the one that is provided by your organization to put your specificities. Each new item that appears on the radar should normally be associated with an is an [architecture decision](./architecture-decision-records). Do not forget to formalize them. Continuous Architecture provides this [GitLab repository](http://google.fr) to help you create your own radar. It's inspired by the [Zalendo open source project](https://github.com/zalando/tech-radar). You can simply clone this repo and easily create your tech radar.
* If you combine your backlog analysis, the fitness functions and the radar, you can now identify all the enablers you need to add to your product backlog. We mainly find two types of enablers: technical studies or implementation user stories. If you're not sure of which technology to pick, a design to adopt ... it's recommended to create a technical spike to validate your thinking for real (through proof of concepts for instance). It's perfectly aligned with the "wait for the last responsible moment to make decisions".
And as we live in a constrained world, we do recommend to assign priorities to each enabler.
* The last step is to make sure the product backlog is consolidated and contains both features and enablers. But not only we need to consolidate, we also need to make sure enablers are being assigned in the right sprints & MVPs to create a comprehensive product roadmap. Often we see product owners or managers prioritize items in the backlog that have a high "customer / user value". We do understand that but enablers have to be prioritized as well as they support the delivery of features and protect the run of your product. Last but not least, you need to create a communication kit for your runway: it'll help you to explain and justify your approach to the architect communities or your different stake holders.

The below visual illustrate this practice.

![image](./images/practices/kit-architecture-runway.png)

The runway naming is very important here: it's not a one time exercise. It has to evolve along with your product. New features will be required, new constraints will rise, your product will enter a different phase ... you need to keep updating your runway to deal with these changes. The weekly architecture ceremonies as architecture workshops during the scoping 360° are good places to work on the architecture runway as it ensures there is some space for the dialog.

[^1]: SAFe and Scaled Agile Framework are registered trademarks of Scaled Agile, Inc.
