---
title: "Architecture Decision Records"
meta_title: "Architecture Decision Records – Make and Document Better Decisions"
description: "A structured approach to architectural decision-making: when to decide, who’s involved, how to document and share decisions across teams."
draft: false
---

## Decisions, you said decisions?

Taking decisions plays a big role in a life of an architect. Almost every day we take decisions. Instead of trying to define what a decision is and on what they should be taken, we prefer to refer to Martin Fowler who said "Architecture is about the important stuff. Whatever that is". So decisions have to be made for important topics ;) The rule of thumb here could be: a decision is needed when the cost of change / rework will be important.

## The last responsible moment

Our creed is to wait for the last responsible moment to take decisions. There are two main reasons for this approach:

* it will be easier to take decisions once you have more information than upfront
* the decision process will not be a bottleneck in the delivery process.

There are two main caveats with this approach. The first one is to determine when you think you have enough information to decide. The last thing we want is to have architects waiting indefinitively to have all the informations they think they need. Some times you need to make hypothesis instead of waiting the information. The second one is that it can generate some inconfort within your team. Indeed, quite often team members are waiting the approval (or blessing would be more appropriate) from "the archtiects" before proceeding.

## How much time should I spend on this decision?

Jason Yip in [Impact of a bad decision vs time spent deciding](https://jchyip.medium.com/impact-of-a-bad-decision-vs-time-spent-deciding-d9bdc241163) came up with an interesting perspective on the time we should spend to take decision. To determine it, he combined the time spent deciding with the impact of a bad decision. He ended up with 4 quarands:

* Reckless: High impact of a bad decision, low time spent deciding;
* Appropriate caution: High impact of a bad decision, high time spent deciding;
* Decisive: Low impact of a bad decision, low time spent deciding;
* Overly cautious: Low impact of a bad decision, high time spent deciding.

![image](./images/practices/misc/decision_time_spent.png)

You should try to position your decisions in these quadrants to make sure you're spending the appropriate time on them.

## Who contribute to this decision making process?

Should all decisions be made by architects? no we don't think so but architects are clearly leading this process. Once, we've said that, it's implicit that whoever in the team have something to say on this decision should be contributing to this process. We also want to make it clear that unless your team is completely autonomous on everything, external contributors can also be involved: it could be subject matter experts, other architects, CTOs ...

## The decision making process

Speaking of processes these days seems a bit awkward maybe. But we think we need a small dose of process here as it can really help to produce high quality decisions. Making decisions goes through 5 different steps:

* It starts with a trigger: why the hell should we make a decision? Is there something in the backlog of your product that requires the team to make a decision. It could be a business feature, a technical constraints, a problem coming from the run or an intentional change.
* You need to document your decision to be factual and accurate. What is the problem you're trying to solve? what are the different options you are considering? what are your criterias to decide? what are the consequences of this decision? At this stage, we do recommend to log this decision as an artefact in your product repository. Why? because we think this decision, which is a documentation asset, is attached to the product itself and as such should be managed and versionned along with the other assets like source code for instance. If your using `Git`, you can look at this https://github.com/joelparkerhenderson/architecture_decision_record/blob/master/adr_template_madr.md[repository] to get some inspiration.
* You need to build a consensus on that decision to avoid the ivory tower architect and top down decisions syndroms. A good way to achieve it is to make proof of concepts and making sure your ADR is updated with its results. If you don't have the time to execute a PoC, brainstorming sessions or workshops can also be used.
* Once you've reached a good maturity level, you can submit your ADR to either you team (through the weekly architecture ritual) or to your peers (through a peer review). The idea here is to get as much feedback as possible and ensure alignment on your decision.
* At this stage, you do normally have enough material and reached a consensus to approved the decision. The `pull - merge` request process from `{Git}` is a good way to support this step. Merging your architecture decision (which is a markdown file for instance) into your product repository is the formal validation.
* Do not forget to communicate your decision to your community (other product teams, infrastructure, security, enterprise architecture, stake holders ...). Too often we forget this last step and it can affect the efficiency and impact of your decision. If nobody knows about it, do you believe that it will be respected? Sometimes, it requires to create special documents to make the decision understandable by different audiences.

We provide a visual that illustrate this practice. You'll find it below:

![image](./images/practices/kit-architecture-decision-record.png)
