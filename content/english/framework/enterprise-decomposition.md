---
title: "Enterprise Decomposition"
# meta title
meta_title: ""
# meta description
description: "This is meta description"
# save as draft
draft: false
---


## Enterprise Decomposition

An enterprise is a complex system of systems. Alongside with Herbert Simon, we argue hierarchy is one of the central structural schemes that the architect of complexity uses [^1]. By a hierarchic system, or hierarchy, Herbert Simon means a system that is composed of interrelated sub-systems, each of the latter being, in turn, hierarchic in structure until we reach some lowest level of elementary subsystem.

Simon observes that etymologically the word "hierarchy" has a narrower meaning in which a sub-system is subordinated by an authority relation to the system it belongs to. Alongside with Simon we will consider systems in which the relations among subsystems are more complex than in the formal organizational hierarchy.

Once we agree to model the enterprise as a system composed of sub-systems we have to designate them. In the Systems Engineering domain, using the sub-system terminology is not an issue. In the business world, it is. Each naming convention carries some baggage. For example, if we call sub-systems division, it gives an organizational chart connotation; if we call them Value Areas or Domains, it gives an IT modeling connotation.

We will settle for the Operating Unit as defined by Law Insider [^2] : for any fiscal year, Operating Unit shall mean a division, Company subsidiary, group, product line or product line grouping for which an income statement reflecting sales and operating income is produced.

The diagram below represents the decomposition of the enterprise into one or more Operating Units. Each Operating Unit can be decomposed recursively into one or more Operating Units. The generic meaning given to Operating Unit gives the flexibility to designate sub-systems using the enterprise's specific terminology. For example a retail bank is composed of a distribution network and a set of back-offices. The distribution network is organized into groups of branches by territory and large enterprises are managed into portfolios by industry sectors.

Operating Units sell products and/or services to external or internal clients and have an income statement and possibly a balance sheet.

![image](./images/framework/enterprise-decomposition.svg)

Beyond the choice of vocabulary lies more interesting questions:

* Which combination of criteria should be used to decompose the enterprise?
* What are the responsibilities of an Operating Unit?
* Which level of autonomy should an Operating Unit enjoy?
* How Operating Units coordinate and cooperate with each other?
* How to align the Operating Units that compose an enterprise?

The other views of the CAF provide inputs to help answer these questions (emergent design), for example:

* The Experience Objective view provides market segmentation assumptions which is a key decomposition criteria. For example, 
should a specific Operating Unit cater for the needs of the wealth segment? Should we setup a different Operating Unit to address the needs of the young clients segment? Is the Operating Unit in charge of the wealth segment free to create its own mortgage loan products, or should it reuse existing one?
* The Product view helps regroup products into product lines and determine the opportunity to create product platforms that are shared across more than one Operating Unit.
* The Operations view helps identify industrialized factories that take advantage of economies of scale and skills to provide cost effective services to market facing Operating units.
* The Technology view helps identify shared digital capabilities that can be offered to other Operating Units to help accelerate their digital journey.

In a reciprocal way, the Enterprise Decomposition view influences the evolution of other views (intentional architecture).

[^1]: The Architecture of Complexity by Herbert A. Simon, Proceedings of the American Philosophical Society, Vol. 106, No. 6. (Dec. 12, 1962), pp.467-482.
[^2]: See https://www.lawinsider.com/dictionary/operating-unit
