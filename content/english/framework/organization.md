---
title: "Organizations"
meta_title: "Organization View – Aligning Team Structures with Target Architecture"
description: "The Organization view of the CAF uses Operating Units, Team Topologies, and the Inverse Conway Maneuver to design a structure aligned with value delivery and optimized for cognitive load."
draft: false
---

## Organization

The Organization view maps the hierarchical decomposition of the enterprise into an organizational model.The figure below describes the way the CAF suggests you model your organization.

![image](./images/framework/organization.svg)

We need to complete the structural decomposition of the enterprise into Operating units:

* Vertically by defining the teams that compose Operating Units
* Horizontally (organizational dimensions) by specifying how power is allocated, which skills people need, which management systems should be deployed, what are the news ways of working, the new Beliefs, Mindset and Behavior that should become the norm

The CAF proposes content that cover each of the organizational dimensions covered, for example it describes a set of of [practices](../practices) and [rituals](../rituals).

[Team topologies](https://teamtopologies.com) is very popular in our industry now and we think it makes complete sense in our architecture context. The figure below presents the CAF's generic team topologies model.

![image](./images/framework/team-topologies.svg)

As you can see, we emphasize only two of the four topologies. It does not mean that Complex sub-system or enablement teams are not relevant but for us, Stream aligned teams and platform teams are the topologies we think matter most. The first is directly aligned (as its name suggests) with the value stream and the product notion. While the second promotes the idea that platform teams can help to reduce cognitive loads on stream aligned teams by providing them self-service platforms. Providing easy to consume services like a Kubernetes cluster is indeed helping stream aligned teams to focus on the value creation.

When shaping the structure of an organization it is important to take into account:

* The [Conway Law](https://en.wikipedia.org/wiki/Conway%27s_law) that states that "Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.". So, it's more than likely you'll be subjected to this law as all of us are or were. Instead of suffer from it, you can try to apply the inverse Conway Maneuver that recommends evolving your team and organizational structure to promote your desired architecture. Simple if you think about it but quite powerful.
* The cognitive load on a team is not a new problem. But what's new is that we start to consider it to protect the team efficiency. Do not pay attention to it and you'll see your team efficiency (and then its capacity to deliver value) declined while your back log work in progress will go in the opposite direction. The Dunbar number is also often used when it comes to discuss on the cognitive load. It refers to some research done the Anthropologist Robin Dunbar defining the number of people one can have some kind of an ‘historical relationship’ and this number was around 150. But more interesting is that one can have a close relationship with a group of 5 people & share a level of deep trust with around 15 close relationship. Applied to the corporate world and how we deliver IT products, we estimate that an agile team should be made of 9 teammates, no more. It helps to keep the cognitive load under control by reducing the number of interactions team members have to deal with every day.
