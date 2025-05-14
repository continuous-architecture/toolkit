---
title: "Continuous Architecture Manifesto"
meta_title: ""
description: "This is meta description"
draft: false
---


This Continuous Architecture manifesto aims to provide a clear set of beliefs and principles for our architecture operating model. It is not an attempt to compete with other famous existing manifestos (e.g. https://agilemanifesto.org[Agile Manifesto], https://www.reactivemanifesto.org[Reactive Manifesto]). It conveys a shift from a traditional waterfall approach with big designs up front to a continuous runway mindset.

## We architect long term products, not just project solutions

Consider your architecture activities as a runway following the life of your product (as it goes through different stages: from cradle to grave). Taking decisions, designing new features, reconsidering / reworking what you have done given the new context you're in. The  design need to be robust to future change. Doing so in a project approach is way more difficult not even considering the fact you'll be switching from one project to the other (each switch resulting in time loss at best case, lapse of memory more certainly)

## We architect our products with a holistic view

Behind this there are two different but complementary ideas. First, we look at the architecture from a fullstack perspective considering all the different layers our products are built on: infrastructure, network, middleware, application and urbanism. In the meantime, we also need to make sure our product fits well into our system. Here we focus on the integration strategy with other systems our products have to communicate with.

## We prove (validate) the architecture by implementing it, not by validating document

Powerpoint slides, archimate diagrams ... don't go to production. The code developed by your squad does. And guess what: the sooner, the better ;)

## Architects shared the responsibility of the end-product; including its operability.

When you're designing a solution, always keep in mind that the product you're shaping is likely to be deployed for real and as such it must be designed to be operated simply.

## Architecture is a team activity and shared understanding, not a document that is passed down from a team to another

An architecture document becomes obsolete as soon as it's written. Our intention here is not to recommend teams to not write documents. But we think that understanding the architecture, why and how decisions were made, the fullstack nature of your product is way more important than a document. The role of the architect is to transmit this his team ... and to write the just enough documents to communicate within and outside the team.

## Delay decisions until they are absolutely necessary

That's what we call "the last responsible moment". The idea is that the more you wait, the more you have feedback and you'll be in a position to take good decision. The tricky part of the architect job is to know when to make a decision: too early and you're almost blind; too late and the cost of rework could be high.

## Risk-driven prioritization: do customer-centric features with major architectural impact first

Let's take an example to illustrate this: you want to decompose your monolith and you have the choice between doing it on back office features or user facing ones. We do recommend to start with the user facing features. Why? yes the risk of implementing such changes on a critical part of your product is higher so the benefits for your users will be. In that case, moving to a micro services approach will enable the team to deliver faster, reduce the impact of a change, scale differently the different parts of your product...

![image](./images/manifesto/manifesto.jpg)
