# Communities of Practice: The Invisible Infrastructure of Continuous Architecture

### Why no organization can practice Continuous Architecture without cultivating its community

---

> *"A practice is the result of a negotiation of meaning among people engaged in a common enterprise. It does not exist in the individual — it exists between them."*
> — formulation inspired by Étienne Wenger, *Communities of Practice*, 1998

---

## Executive Summary — Continuous Architecture: From Decision to Impact

In most organizations, architectural decisions do not produce their intended effects:
they are documented but poorly understood, disseminated but rarely appropriated, defined but inconsistently applied.

This gap does not stem from tools, methods, or competence.
It stems from the absence of a structured space where these decisions can be discussed, understood, and collectively owned.

**Continuous Architecture is not about producing better decisions.
It is about creating the conditions for those decisions to have real impact.**

### A Key Conviction

**Continuous Architecture is not a method you apply.
It is a practice you cultivate collectively — and every living practice rests on a community capable of sustaining it over time.**

### What This Changes Concretely

* An architectural decision has value only if it is understood and used: if it does not circulate, it does not exist in practice
* Architecture lives not only in artifacts (standards, ADRs), but in the balance between **reification (documents)** and **participation (interactions, experiences, judgment)**
* The main problem is not the quality of decisions, but their **collective appropriation**

### The True Shift in Governance Model

* Continuous Architecture implies a shift in governance:
  **from centralized control to distributed influence**
* Alignment can no longer be achieved through prescription, but through **shared understanding and progressive convergence of local decisions**
* Architecture becomes a responsibility **that is collective and distributed**, beyond architects alone

### The Central Role of Community

* A living practice can only exist and develop within a **community of practice**
* This community is not limited to architects: it includes all actors who make structural decisions (tech leads, engineering managers, etc.)
* Its value depends not on size, but on its ability to produce **interactions that actually influence decisions**

### A Direct Lever on System Architecture

* By structuring interactions among actors, the community becomes a concrete lever to influence the shape of systems
* It enables exploitation of **inverse Conway logic**:
  **by modifying communication structures, you directly influence system architecture**
* It thus constitutes an **essential organizational infrastructure**, allowing alignment to be maintained without resorting to centralized control

### A Strategic Infrastructure to Maintain Over Time

* A community of practice is not a project, but a **living infrastructure**
* Its value rests on the quality of interactions it enables and the concrete effects those interactions produce
* At scale, it must adopt a federated structure, combining:

  * local relationships of trust (strong ties)
  * cross-cutting connections (weak ties)
* It must be **maintained, animated, and protected over time**, just like any critical infrastructure

### How to Read This Document

This document can be approached according to your objective:

* **Understand the real problem**: why architectural decisions do not produce their effects
* **Change perspective**: consider architecture as a collective practice, not just a set of artifacts
* **Expand scope**: move from a community of architects to a community of architecture
* **Understand the systemic lever**: role of interactions (Conway, networks) in system form
* **Scale up**: understand how a community functions, evolves, and sustains itself over time

### In Summary

**Continuous Architecture rarely fails due to lack of methods.
It fails when the organization does not create the social conditions enabling decisions to exist in practice.**

Building a community of practice in architecture is not a support mechanism.
It is an **architectural act in itself** — at the heart of an organization's capacity to evolve its information system coherently and sustainably.

---

## Preamble: The Problem Nobody Names

There exists a silent contradiction — and rarely named — at the heart of most organizations adopting Continuous Architecture. They invest in frameworks, repositories, modeling tools, architecture documentation platforms — often impeccable, rarely open. They appoint architects, define roles, draw boundaries of responsibility. They train their teams in principles of evolutionary architecture, ADRs — Architecture Decision Records — decoupling patterns and migration strategies.

Yet, a few years later, the observation is always the same: architectural decisions do not disseminate. Standards are known by those who wrote them, ignored by those who should apply them. Architects from different teams make contradictory decisions without even knowing it. The carefully constructed architecture repository gathers dust in a space nobody visits.

This observation is rarely attributed to its true cause. Tools, methods, sometimes individuals are blamed. Rarely do people question the social structure underlying architectural practice itself. For what is missing in most situations is not the quality of decisions or even the competence of actors, but the existence of a space in which these decisions can be discussed, appropriated, and transmitted. In other words, a community of practice in the precise sense that Étienne Wenger gives to the term.

We defend a simple thesis: Continuous Architecture is not a method you apply. It is a practice you cultivate collectively. And every practice, in the sense Étienne Wenger has defined it, can only live and develop within a community. Not as a mere support mechanism, but as the most robust mechanism identified to date for sustaining an architectural practice distributed at scale — especially in environments characterized by strong team autonomy and rapid system evolution.

---

## I. What Continuous Architecture Really Demands

To understand why a community of practice is necessary, we must first grasp what Continuous Architecture really asks of an organization — and why these demands exceed what an individual or centralized team can accomplish alone.

The Continuous Architecture Framework (CAF) poses a provocative equation: *ALIGNMENT + AUTONOMY > CONTROL*. Behind this formula lies a fundamental paradigm shift. Traditional architecture operated through control: a central authority — an architecture committee, a chief architect, an ivory tower — issued decisions that teams had to follow. This model is seductive in its clarity, but shows its limits in environments characterized by high variability, continuous evolution pressure, and distributed technical responsibilities. In these contexts, centralized mechanisms tend to introduce bottlenecks and decision delays, even if they remain relevant in highly critical systems or low-change-rate environments.

Continuous Architecture proposes something different: distribute architectural decision-making capacity, while maintaining sufficient alignment so that local decisions remain coherent with overall direction. It is a vision of remarkable elegance — and considerable practical difficulty. How can you maintain alignment without control? How can you ensure that dozens of architects spread across different teams, under different hierarchies, in different time zones, make decisions that converge rather than contradict?

The answer CAF carries is more demanding than it appears. It rests neither on control nor on artifacts, but on the existence of a truly shared practice. An architectural decision has value only through its effects. If it is not understood, it will be ignored. If ignored, it does not exist — regardless of its intrinsic quality. To put it simply: if a newly arrived developer cannot identify the decisions structuring their context, then those decisions have not produced real impact. They belong to the repository, not the practice. What matters, therefore, is not only the relevance of decisions, but their ability to circulate, be appropriated, and concretely guide action.

This is where the community of practice enters the scene. Not to mechanically disseminate decisions, like an organizational broadcast system, but to create the conditions in which architectural decisions are co-constructed, understood, and defended by those who carry them. The difference is simple. Applying a decision is conforming. Defending it is believing in it. Conformity yields under pressure. Commitment holds.

![image](./images/framework/cop_01.png)

---

## II. What a Practice Really Is — and Why Architecture Is One

The term "community of practice" has entered managerial vocabulary to the point of sometimes losing its meaning. It is used to describe working groups, guilds, expert circles — all useful things, but not necessarily corresponding to what Étienne Wenger theorized in his foundational 1998 work.

In the now most common formulation from Wenger-Trayner, a CoP articulates three dimensions: a **domain** — a field of competencies and knowledge the group recognizes as worth cultivating — ; a **community** — relationships of trust and mutual engagement among members — ; and a **practice** in the narrow sense — the tools, methods, stories, shared gestures constituting the common repertoire. In his 1998 work, Wenger particularly emphasizes mutual engagement, joint enterprise, and shared repertoire. Remove one of these three elements, and the CoP ceases to exist. A group without a defined domain is a social network. A domain without community is an academic discipline. A community without practice is a club.

Enterprise architecture, as CAF conceives it, is a practice in the full sense of the term. It has a domain — the structural decisions that determine how systems evolve over time. It has a repertoire — ADRs, patterns, principles, stories of past decisions and their consequences. And it requires a community — professionals who collectively negotiate the meaning of these decisions, who confront their experiences, who transmit their expertise to those who come after them.

This last point is most often neglected. In the dominant conception of enterprise architecture, architectural knowledge is supposed to be codifiable: you write standards, document them, distribute them. This is a positivist conception of knowledge — knowledge is information that can be encoded, stored, and retrieved. Wenger contests precisely this assumption. He distinguishes two types of knowledge: codified knowledge, which he calls *reification*, and living knowledge, which he calls *participation*. These two forms are complementary and necessary. An ADR is a reification — it encodes a decision and its reasons. But an ADR without participation — without the conversations, debates, accounts of experiences surrounding it — is a dead document. The living practice of an experienced architect, their ability to sense when a decision is good or bad, their way of asking the right questions in an architecture review. You can document a decision. You cannot document judgment.

This is why no organization can practice Continuous Architecture with tools alone. It can document its architecture without an active community; it can even, locally, practice it. But as scale and distribution increase, the absence of a structured participation space makes this practice hard to sustain over time, and tends to fragment decision coherence.

![image](./images/framework/cop_02.png)

---

## III. The Question That Changes Everything: CoP of Architects or CoP of Architecture?

Before even thinking about governing a community of practice in architecture, we must answer a question that seems rhetorical but is profoundly strategic: is this a CoP *of architects* or a CoP *of architecture*?

A CoP of architects is defined by its members. You belong because you carry the title. You leave when the title changes. The boundary is clear, governance simple, identity obvious. But this clarity comes at a cost: it confines practice to a formal perimeter that does not match the reality of architectural work in modern organizations.

Architecture, in an organization practicing Continuous Architecture, does not happen only in architect meetings. It happens in every technical decision a tech lead makes, in every trade-off an engineering manager makes between technical debt and delivery speed, in every conversation a product manager has with their team about what the system should be able to do in two years. These actors are not architects. But they do architecture — every day.

A CoP of architecture, by contrast, is defined by its domain. It has a core of architects who are its guardians and engines. And it has a periphery of practice partners — tech leads, engineering managers, experienced product engineers — who orbit around this core, contribute to practice from their contexts, and serve as relays in their teams. This conception is more complex to govern. But it is incomparably more powerful in its effects.

Sociologist Mark Granovetter demonstrated in his foundational work on the strength of weak ties that information dissemination in an organization does not pass through central, highly connected nodes — it passes through bridges between distinct groups. A tech lead who has participated in CoP workshops, who understands the architectural reasoning underlying their team's decisions, who speaks the same language as the architect working alongside them — this profile is a bridge. And it is through these bridges that architectural culture truly disseminates in the organization and plays a determining role in cross-cutting diffusion of practices, complementing downward communication mechanisms that ensure strategic clarity but rarely local appropriation.

Choosing a CoP of architecture means choosing to invest in these bridges. It is a governance choice. And it is, in the vast majority of organizations, the right choice.

![image](./images/framework/cop_03.png)

---

## IV. Conway's Law Is Not a Constraint — It's a Lever

No reflection on architecture and communities can ignore Conway's Law — and its practical corollary. Formulated in 1967 by Melvin E. Conway, the observation is brutally luminous: organizations that design systems inevitably produce designs whose structure is a copy of their communication structure.

This law is a constraint, not a recommendation. It applies whether you like it or not. If your teams are siloed, your systems will be. If your architects don't talk to each other, their decisions will contradict. And the system will bear the mark. If your delivery organization and architecture organization function in parallel universes, your IS will have exactly that form: parallel universes poorly integrated.

More recent work has shown it is possible to exploit this relationship in what is called "inverse Conway maneuvering" — and this is where its strategic potential lies. If you can change how your teams communicate, you change the form of your systems. This idea consists of deliberately designing communication structures to produce the desired architecture, rather than suffering the correspondence between communication and architecture.

A community of practice in architecture is the most effective mechanism of this maneuver. By creating a space where architects from different teams regularly talk, confront their decisions, build common language and shared references — the CoP creates precisely the communication structure that creates the structural conditions in which architectural coherence can emerge — not through imposed alignment, but through progressive convergence of local decisions. This coherence remains contingent on other factors, notably clarity of global constraints and maturity of actors. It is less spectacular than an architecture committee issuing directives. It is infinitely more sustainable.

![image](./images/framework/cop_04.png)

---

## V. Networks and Their Laws: Beckstrom, Dunbar, and Irreducible Tension

A community of practice in architecture is also a network — and like any network, it can be analyzed through certain network laws that illuminate its functioning.

The first is Beckstrom's law: a network's value does not principally depend on the number of connections it contains, but on the net value it creates for each member through the interactions it enables. In other words, a network is not valuable for its density, but for the concrete effects it produces — benefits minus costs — in its participants' actual activity. Applied to a community of practice in architecture, this law fundamentally changes perspective. A CoP has no intrinsic value simply by virtue of its size or density. It has value only if the interactions it structures actually improve architectural decisions, reduce error costs, accelerate collective learning, or strengthen alignment between teams. A discussion that prevents a bad decision, an experience report that prevents repeating an error, a connection that lets you solve a problem faster — that is what creates value. A network is not valuable for what it contains. It is valuable for what it enables.

This approach also introduces a critical requirement: not all interactions are beneficial. A poorly structured network can produce noise, confusion, or contradictory decisions, thus destroying value instead of creating it. The logic of collective intelligence does not rest on accumulating connections, but on the quality of exchanges a community enables — and on its ability to orient those exchanges toward concrete effects in the systems it influences.

The second is Dunbar's Law: a human being can maintain real trust relationships with approximately one hundred fifty people, distributed in concentric circles of five, fifteen, fifty, and one hundred fifty. Beyond these thresholds, relationships inevitably dilute — not from ill will, but from cognitive constraint. Beyond a certain threshold, relationship becomes abstraction.

These two laws reveal a tension every large organization must resolve. Beckstrom's law reminds us that a network's value depends on the richness of interactions it enables, which might incite expanding scope. Dunbar's law, meanwhile, underscores the cognitive limits constraining the depth of trust relationships. The challenge is not therefore opposing expansion and limitation, but organizing the network to preserve both interaction quality and diffusion capacity.

Resolving this tension is structural, not cultural. It passes through creating a federated architecture: groups of human size — geographic, thematic, or organizational sub-communities — within which real trust relationships can develop, connected by weak but strategic ties. This structure is not a compromise — it is the optimal form for a network seeking both relationship depth and collective value scope. It precisely exploits the complementarity between strong ties, which carry trust and tacit knowledge, and weak ties, which carry diffusion and innovation.

![image](./images/framework/cop_05.png)

---

## VI. The Architect's Journey: From Peripheral Participation to Legacy Transmission

One of Wenger's most fruitful contributions is the notion of *legitimate peripheral participation*. A novice does not enter a community of practice at the center — they enter at the periphery. They observe before contributing. They perform simple tasks before assuming complex ones. They learn norms, stories, ways of doing — not through an onboarding manual, but through gradual immersion in community life. This periphery is not a demeaning antechamber: it is a legitimate, necessary, and temporary position. It is not a weak position. It is a learning position.

For an architect, this journey unfolds over several phases that do not correspond to career ladder rungs, but to a trajectory of increasing engagement in practice.

There is first the acculturation phase, where the newly arrived architect discovers the community from its margin. They attend rituals without yet fully contributing. They read past decisions and their contexts. They seek to understand not just what the community decided, but why — and who played what role in those decisions. This is an absorption phase that should not be rushed.

Then comes the exploration phase, where the architect begins to contribute. They ask questions that sometimes disturb — and that is precisely their value. The perspective of the informed novice, someone who has learned enough to understand context but not yet integrated all implicit evidence, is one of a community's most precious resources, one that always risks enclosing itself in its own certainties. The best CoPs deliberately protect this questioning space.

Regular contribution phase marks entry into the community's heart. The architect co-writes standards, presents experience reports, participates in working groups. They begin informally mentoring those who come after — not because asked, but because shared practice naturally creates this transmission impulse.

Some architects, at this stage, access what might be called the champion role — an stage deserving particular development, as it is often misunderstood.

![image](./images/framework/cop_06.png)

---

## VII. The Real Role of Community Leaders

A CoP champion is not a designated expert. They are not the best architect in the room, nor the longest-tenured, nor the one management chose for visibility. Wenger is explicit on this: a healthy CoP tends to produce its own leadership figures through emergence. In practice, especially in initial phases, this emergence is often supported — even initiated — by explicit designations, whose legitimacy then builds through peer interaction. A champion named without peer legitimacy will be ignored, circumvented, or at best tolerated — barely better.

The signals of champion emergence are externally observable, but do not reduce to technical competence. A real champion answers peers' questions before being asked. They generate discussions that continue after the meeting ends. They know when a local problem reveals a larger systemic tension, and know how to name it without provoking defensiveness. A champion does not control the community. They make it possible.

The champion's role in a CoP is first a role of *stewardship* — guardianship of practice. They maintain ritual rhythm when enthusiasm wanes. They welcome novices and orient them. They signal tensions before they become conflicts. They represent the community in instances where practice is at stake — before managers, enterprise architecture team, executives making decisions affecting the CoP.

This role is demanding, and must be recognized proportionally to that demand. Not only through titles — which hold value only in formal hierarchy, not peer legitimacy — but through concrete resources: explicitly allocated time for animation, budget for training and travel, access to strategic architectural decisions, visibility in events bringing the community together. Recognition must be real, multidimensional, and proportionate to contribution.

And the role must be temporary. A champion who settles indefinitely becomes, progressively, a boundary guardian — someone protecting their territory rather than nourishing the community. Rotation is hygiene, not ingratitude. The outgoing champion does not lose their place in the CoP: they become what might be called a Heritage Guardian, bearer of collective memory and mentor to their successor. This is the noblest form of contribution — that which consists in making oneself replaceable.

![image](./images/framework/cop_07.png)

---

## VIII. The Enterprise Architecture Team: Gardeners, Not Directors

In any organization possessing an Enterprise Architecture team, the question of relationship between that team and the CoP is delicate. It is a source of frequent confusions, and sometimes real tensions.

The most common confusion consists in making EA the CoP's director. EA produces standards, the thinking goes, and CoP disseminates them. EA decides, and CoP implements. This conception transforms CoP into an executive arm — and tends to weaken the voluntary participation dynamics constituting the heart of communities of practice, drawing them progressively toward formal coordination structures. Architects cease identifying as members of shared practice, and begin experiencing it as a downward communication channel. They disengage. Participation declines. Rituals become meetings. Some organizations manage to maintain a hybrid balance, but it remains fragile and strongly dependent on management intervention mode.

The right relationship is different in nature. EA is to an architect garden what a gardener is to their garden: it creates conditions where growth is possible, but does not make plants grow. It provides soil — reference standards, framework, strategic vision. It provides water — resources, allocated time, event budgets. It provides light — institutional legitimacy, visibility to leadership, protection when CoP is fragile. But growth — living practice, bottom-up innovation, peer transmission — belongs to the community. And it cannot be decreed.

This relationship requires particular discipline from EA: not confusing its formal authority with the practice legitimacy only the community can confer. A standard issued by EA and co-constructed in CoP has radically different adoption force from a standard issued by EA and merely communicated to CoP. Co-construction is slower. It is incomparably more effective.

EA's role in CoP is also that of final arbiter. When divergent practices emerge between different groups — and they always will, because local contexts create local adaptations — someone must have the authority and legitimacy to decide. This function belongs to EA. But it must exercise it sparingly, transparently, and with constant concern not to extinguish the experimentation that is CoP vitality's engine.

![image](./images/framework/cop_08.png)

---

## IX. Rituals: What Keeps a CoP Going Over Time

Communities of practice that last all share one thing: rituals. Not meetings, not processes — rituals, in the anthropological sense: recurring moments, deliberately constructed, that create conditions for belonging and renewal.

The distinction between a meeting and a ritual is subtle but decisive. A meeting has an agenda, decisions to make, expected deliverables. A ritual has rhythm, recognizable form, and an effect on participants that exceeds explicit session content. You leave a meeting with actions. You leave a ritual with strengthened sense of belonging — or weakened, if the ritual misfires.

Wenger, McDermott and Snyder identify in *Cultivating Communities of Practice* (2002) a fundamental tension in animating CoPs: tension between familiarity and novelty. A community needs familiarity to build trust and belonging — recurring formats, people you see again, common references. But it also needs novelty to stay alive and avoid sclerosis — unexpected topics, outside perspectives, questions that disturb established certainties.

Rituals that last resolve this tension. A monthly assembly always having exactly the same format will become administrative obligation. An assembly never having the same format will lose regularity benefits. The solution is fixed structure with variable content: the time is predictable, participants know roughly what will happen, but the content — presentation, experience report, debated question — is always new.

There is a golden rule in animating these rituals, verified in all living communities I have observed or animated: a ritual cannot consist only of successes. Shared vulnerability — honest account of what did not work, the decision that proved bad in hindsight, the project that failed despite careful architecture — is far stronger cement than success stories. Success stories create admiration. Shared vulnerability creates trust.

![image](./images/framework/cop_09.png)

---

## X. What Makes a Community Live — or Die

Every community of practice goes through cycles. There are founding moments, where energy is abundant and cohesion easy because everything is to build. There are maturity phases, where practice is rich but routine risk is real. There are crisis moments — major organizational change, loss of a central champion, restructuring redistributing architects to new contexts. And there are, sometimes, decline.

CoPs rarely die from dramatic events. They die from slow dehydration: participation gradually declining, rituals becoming formalities, champions exhausting themselves without successors, artifacts no longer updated. And often, nobody makes the explicit decision to end the CoP — it simply fades, leaving behind an empty wiki and a calendar invite nobody accepts.

Organizations maintaining their CoPs alive long-term understand something essential: a community of practice is not a project. A project has a beginning, end, deliverables, and allocated budget. A community of practice is infrastructure — like technical infrastructure or HR infrastructure. You do not "finish" infrastructure. You maintain it, adapt it, invest in it continuously.

This particularly means actively managing two threats mature CoPs systematically face.

The first is **core closure**. Founding CoP members have natural legitimacy, built through founding trials. Over time, they can — unconsciously — form an informal elite defining who truly belongs to the community and who is on its margins. This closure kills innovation and discourages newcomers. The answer is structural: deliberately constructed welcome rituals, formalized sponsorship roles, and governance explicitly valuing recent members' contributions.

The second is **management absorption**. When a CoP proves its value, management naturally tempts making it a tool — piloting it, directing it, using its resources for objectives not emanating from the community itself. This absorption destroys what makes CoP valuable: its voluntary character, its safe space, its ability to address topics formal hierarchy cannot. CoP does not belong to management. It is valuable to management precisely because it is independent.

![image](./images/framework/cop_10.png)

---

## Conclusion: Community as an Architectural Act

There is something deeply coherent in the idea that Continuous Architecture cannot be practiced without a community of practice. CAF asks architecture to renounce centralized control to embrace distribution and continuous evolution. It asks architects to work with teams rather than for them. It asks the organization to trust collective intelligence rather than individual authority.

All these requirements are exactly what communities of practice theory has formulated for thirty years for learning organizations. There is no coincidence in this convergence — there is common recognition of a deep reality about how complex knowledge builds and sustains itself in human organizations.

Building a community of practice in architecture is itself an architectural act. It is deliberately designing a structure that will produce the communication, alignment, and learning effects the organization needs for its systems to evolve coherently. It is applying to human organization the same principles CAF applies to technical systems: favor continuous evolution over fixed stability, distribute decision rather than centralize it, invest in relationships rather than rules.

And it is, ultimately, recognizing that the most important architectural infrastructure is neither a repository, nor a modeling tool, nor a governance committee. It is the trust among the people doing architecture together.
Systems evolve as the conversations that produce them do.

![image](./images/framework/cop_conclusion.png)

---

*This essay draws on the work of Étienne Wenger (Communities of Practice: Learning, Meaning, and Identity, 1998 ; Cultivating Communities of Practice, with R. McDermott and W.M. Snyder, 2002), the Continuous Architecture Framework (continuous-architecture.org), Mark Granovetter's work on the strength of weak ties (The Strength of Weak Ties, 1973), and several structuring laws of technical organizations and networks.*
