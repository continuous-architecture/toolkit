---
title: "Modularity"
meta_title: "Modularity – Product and Software Architecture"
description: "Modularity refers to an architecture in which each component fulfills a clear function and interacts through well-defined interfaces. It enables independent design and changes, making systems more adaptable and maintainable, whether in physical products or software."
draft: false
---

## Product Context

A *Modular Architecture* has the following two properties [^1]

* Chunks implement one or a few functional elements in their entirety
* The interactions between chunks are well defined and are generally fundamental to the  primary functions of the product

The most modular architecture is one in which each functional element of the product  is implemented by exactly one physical chunk and in which there are a few well-defined  interactions between the chunks.

Such a modular architecture allows a design change to be  made to one chunk without requiring a change to other chunks for the product to function  correctly. The chunks may also be designed quite independently of one another.  

The opposite of a modular architecture is an *Integral Architecture*.

## Software Context

According to Parnas, Clement and Weiss [^2] the primary goal of the decomposition into modules is reduction of overall software cost by allowing
modules to be designed and revised independently. Specific goals of the module decomposition are:

* (a) each module’s structure should be simple enough that it can be understood fully;
* (b) it should be possible to change the implementation of one module without knowledge of the implementation
of other modules and without affecting the behavior of other modules;
* (c) the ease of making a change in the design should bear a reasonable relationship to the likelihood of
the change being needed; it should be possible to make likely changes without changing any
module interfaces; less likely changes may involve interface changes, but only for modules that are
small and not widely used. Only very unlikely changes should require changes in the interfaces of
widely used modules;
* (d) it should be possible to make a major software change as a set of independent changes to individual
modules, i.e., except for interface changes, programmers changing the individual modules should
not need to communicate.

If the interfaces of the modules are not revised, it should be possible to run and test any combination of old and new module versions.

[^1]: "Product Design and Development" by Ulrich, Karl T, Eppinger, Steven D and Yang, Maria  C., McGraw-Hill Higher Education. 7th Edition, ISBN 978-1-260-04365-5
[^2]: The Modular Structure of Complex Systems by D. L. Parnas, University of Victoria; P. C. Clements and D. M. Weiss, U.S. Naval Research Laboratory
