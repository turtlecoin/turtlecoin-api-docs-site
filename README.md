[![Build Status](https://travis-ci.org/ar-x/turtlecoin-api-reference-site.svg?branch=turtle-master)](https://travis-ci.org/ar-x/turtlecoin-api-reference-site)

## Developing

1. Make sure you have [Ruby](https://www.ruby-lang.org/en) 2.3 or newer installed.
2. Run `gem install bundler` to install [bundler](http://bundler.io).
3. Run `bundle install` to install the dependencies of this project.
4. Run `bundle exec middleman server` to run start the development server at `http://localhost:4567`.
5. Changes should target the `turtle-master` branch, instead of `master`.
6. Site specific styles are in `source/stylesheets/turtlecoin`.
7. Pulls content from the `turtlecoin/turtlecoin-wiki` repository.

### Developing with local turtlecoin-wiki content

Create a symlink called `turtlecoin-wiki-dev` in this project to the `turtlecoin-wiki` repo on your machine. Editing files in that repo would then show up on this app. For example: `ln -s ../turtlecoin-wiki turtlecoin-wiki-dev` to link to the `turtlecoin-wiki` folder located at the same level as the folder containing this repo. Once done, remove the link by running `unlink turtlecoin-wiki-dev`.


## About Slate 

This project is based on [Slate](https://github.com/lord/slate). Slate, in turn uses [Middleman](https://middlemanapp.com) for static site generation. Slate projects are forks of the Slate repo. All TurtleCoin specific changes should be made on the `turtle-master` branch, instead of `master`. This makes it cleaner and easier to fetch updates from Slate's `master` branch.


## Deployment

This project includes `turtlecoin/turtlecoin-wiki` as a Git submodule. A commit to the `master` branch of `turtlecoin/turtlecoin-wiki` sends a webhook to a AWS lamda function. The AWS lambda function then triggers a CI run on the `master` branch of this project. The CI run fetches the latest `turtlecoin/turtlecoin-wiki` submodule, builds the site, and deploys it to Github pages. These steps can also be done manually.
