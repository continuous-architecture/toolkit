Thanks for your interest in contributing! We outline here how we expect contributions to happen.

WARNING: Note that contributions can only be made by individuals representing themselves, not by a company.

## Overall contribution workflow

1. Start by searching the [issue tracker](https://github.com/michelin/Continuous-Architecture-Toolkit/issues) to see if your contribution, be it a problem or a suggestion for an enhancement, was brought up before.
2. If nothing satisfying comes up, feel free to file a new issue. Provide as many details about your idea, problem, or suggestion as possible. Once a conversation with one or more maintainers has taken place, it should become clear when it is appropriate to suggest a change via a pull request.
3. Create a branch with an explicit name and add materials on a topic of your choice. Then submit a pull request outlining your changes so maintainers can review what you've added and work with you to polish it.

## Implement your fix or feature

### Adding / Modifying Continuous Architecture framework content

The [Continuous Architecture web site](https://continuous-architecture.org) is generated from the `landing/docs` folder where all pages are described using Asciidoc. Asciidoc is very similar to tradition markdown, here is a [reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/) you can use.

* `docs/case-studies`: contains one folder per case study we're publishing
* `docs/framework`: describes the Continuous Architecture framework
* `docs/glossary`: glossary pages of all the concepts we're using
* `docs/manifest`: describes the Continuous Architecture Manifesto
* `docs/practices`: one finds here all kits and practices we do use in Continuous Architecture. ADRs, team topologies, architecture runway ...
* `docs/rituals`: all the different rituals and ceremonies we do recommend. Architecture peer review, Kata, team autonomy readiness ...
* `docs/roles`: contains the roles we do promote like Product Architect, Fullstack Architect
* `docs/start-your-journey`: describes the possible strategies to deploy Continuous Architecture within your organization

Images are stored in subfolders of each of the above folders. You can reference them directly 

### Changing the look and feel

Again in the `landing` folder, you'll find all ressources (html template pages, CSS styles) to modify the look and feel of the Continuous Architecture web site.

* `_layouts`: contains all html templates in use 
* `_includes`: partial html templates embedded in layouts
* `_sass`: contains syntactically awesome Stylesheets
* `assets`: traditional web assets like css stylesheets, fonts, global images, javascript 
* `content/pages`: two mardown files (in YAML like syntax) that manage the content of the home and about us pages

## Test and run locally

You need to generate locally the Continuous Architecture web site to make sure your contribution is working and not generating regressions or side effects.

### On Mac OS

Before being able to generate locally the website, you need to install a couple of pre-requisites

* RUBY
* NodeJS & NPM: `brew install nvm`
* Then you need to setup your shell. Here is an example for ZSH. `vi ~/.zshrc`:

>export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

* Install the latest version of node: `nvm install --lts`
* change the directory: `cd landing`
* Install Postcss: `npm install postcss`
* Install Yarn then add Tailwind (UI widget library we're using), `brew install yarn` then `yarn add tailwindcss@^1`
* Install Gems needed by Jekyll with the following command `gem install bundler` then `bundle install`. It will read the Gemfile and load all needed dependencies.

Finally, run the below command to 

* either build `JEKYLL_ENV=production jekyll build`. It will generate the files in the dist directory
* or serve your website locally `JEKYLL_ENV=production jekyll serve`. It will allow you to view the generated website in your browser [127.0.0.1:4000](http://127.0.0.1:4000)

## Create a Pull Request

At this point, if your changes look good and tests are passing locally, you are ready to create a pull request.

## Merging a PR and shipping the web site (maintainers only)

A PR can only be merged into master by a maintainer if tests are successful. Upon merge, our release GitHub Actions will take over to generate static html files then copy them to a Amazon S3 bucket.