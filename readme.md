

![Continuous Architecture Logo](img/continuous-architecture-logo.png)

# Purpose

For Digital and Agile enterprises wanting to leverage the architecture
discipline to better steer their transformation journey while coping
with the exponential flow of changes, Continuous Architecture Toolkit
provides materials (posters, kits, roles description, rituals) to frame
the new way of doing architecture and accelerate the change management
among architects, delivery and operation teams.

# Gouvernance

We aim to make contributing to Continuous Architecture Toolkit a pleasant and enriching experience for all participants, and we welcome contributions of all kinds. Anyone can contribute to the project, regardless of their skills.

Check out our [Governance](governance/governance.md) for information on how to get involved.

# Building the Continuous Architecture website on your machine

The [Continuous Architecture landing page](https://continuous-architecture.org) is built with [Jekyll](https://jekyllrb.com), the content with [Asciidoctor](https://asciidoctor.org) and we embed some [Tailwind](https://tailwindcss.com/) UI components.

## MacOS

Before being able to generate locally the website, you need to install a couple of pre-requisites

* RUBY
* NodeJS & NPM: `brew install nvm`
* Then you need to setup your shell. Here is an example for ZSH. `vi ~/.zshrc`:

>export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

* Install the latest version of node: `nvm install --lts`
* Postcss is neded: `npm install postcss`
* To setup and setup Tailwind, `brew install yarn` then `yarn add tailwindcss@^1`
* To setup the Gems needed by Jekyll, execute `gem install bundler` then `bundle install`. It will read the Gemfile and load all needed dependencies

Finally, run the below command to 

* either build `JEKYLL_ENV=production jekyll build`. It will generate the files in the dist directory
* or serve your website locally `JEKYLL_ENV=production jekyll serve`. It will allow you to view the generated website in your browser [127.0.0.1:4000](http://127.0.0.1:4000)

# License

Continuous architecture materials are distributed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) apart from some illustrations which are distributed under [Ceative
Common Attribution ShareAlike 4.0 International License (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/).


# Maintainers

Continuous architecture toolkit was initially developed by [Thierry Fraudet](mailto:thierry.fraudet@michelin.com) & [Olivier Jauze](mailto:ojauze@gmail.com) from Michelin and by [Nicolas Chevalier](mailto:nch.nicolas.chevalier@gmail.com) from Gluendo to setup an agile architecture operating model and to support the Michelin digital journey.

They were quickly joined by a group of enthusiasts from DXC, Société Générale and others, sharing the same ideas about the evolution of architecture in the world of information system design and this project is now maintained by the following core group of people:

* [Frédéric Lé, youragileway.com](mailto:fle@youragileway.com)
* [Corentin Moussard, Graphic Designer](mailto:corentin.moussard@gmail.com)
* [Jerome Regnier, Société Générale](mailto:jerome.regnier@socgen.com)
* [Jérémie Grodziski,Adixe](mailto:jeremie@grodziski.com)
* [Romain Chapon,Michelin](mailto:romain.chapon@michelin.com)
* [Yoni Boukhobza,Société Générale](mailto:yoni.boukhobza@socgen.com)

note: sadly, Jean-Marc Bunouf passed away before the first MVP of our open source project. Even thought he couldn't make it to the end, Jean-Marc greatly contributed to our project and we're all very thankfull to him.
