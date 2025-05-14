---
title: "What is architecture"
meta_title: "Roles"
description: "this is meta description"
draft: false
---

## What is architecture ?

The definition of the software architecture term is subject to numerous debates in our industry for decades now. We won't pretend we found the truth through our Continuous Architecture initiative. We'll only refer to some of our inspirational sources to define our baseline.

When talking about “architecture”, people in the software industry refer in general to the most important aspects of the internal design of a software system. For some, "architecture" is about the fundamental organization of a system, or the way high level components are connected all together. But it's quite hard to define what is fundamental versus what's not. For others, it's the set of design decisions we have to make quite early in a project or nowadays in the product lifecycle. Once again, this definition falls short because it would mean every decisions is about architecture.

Grady Booch, IBM Fellow, stated early that a good and intentional architecture is important, otherwise your system becomes slower and more expensive to change in the future :

>All architecture is design, but not all design is architecture. Architecture represents the significant design decisions that shape the form and function of a system, where significant is measured by the cost of change.  Every software-intensive system has an architecture: some are intentional; a few are accidental; most are emergent. All meaningful architecture springs from a living, vibrant process of deliberation, design, and decision. -- Grady Booch

Grady insisted on the importance of decisions by linking them to the cost of change. It's precisely here that the important change happened. Early in the 2000's, Martin Fowler and Ralph Johnson added an interesting point of view that we think complete the definition of "architecture" harmoniously.

> Architecture is about the important stuff. Whatever that is. On first blush, that sounds trite, but I find it carries a lot of richness. It means that the heart of thinking architecturally about software is to decide what is important, (i.e. what is architectural), and then expend energy on keeping those architectural elements in good condition. For a developer to become an architect, they need to be able to recognize what elements are important, recognizing what elements are likely to result in serious problems should they not be controlled. -- Martin Fowler & Ralph Jonhson

So if we have to summarize this, we could say: Architecture is about making decisions on important stuff that will be hard and costly to change in the future.

## Why does architecture matter?

The tricky thing with architecture is that it's hard to perceive for customers & users at first sight. But we all know that a poor architecture is preventing developers to understand what they build and then increase the risk to not meet what users wants. At the end, it also makes it harder to change your solution over time. All in all, not only we may not deliver what the user needs but we'll do it more slowly with bigger increments containing more defects.

A good architecture is then an helper to ensure

* a high internal quality of your product
* fast & regular delivery of features (ie value) to end users

Kepp also in mind that if you don't work on your product architecture with the team all along its lifecycle, you can be sure an architecture will emerge anyway. And the last thing we want is to be subject to something you have not prepared.
