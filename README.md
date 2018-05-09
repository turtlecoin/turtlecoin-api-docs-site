[![Build Status](https://travis-ci.org/ar-x/turtlecoin-api-reference-site.svg?branch=turtle-master)](https://travis-ci.org/ar-x/turtlecoin-api-reference-site)

## Developing

1. Make sure you have [Ruby](https://www.ruby-lang.org/en) 2.3 or newer installed.
2. Run `gem install bundler` to install [bundler](http://bundler.io).
3. Run `bundle install` to install the dependencies of this project.
4. Run `bundle exec middleman server` to run start the development server at `http://127.0.0.1:4567`.
5. Changes should target the `turtle-master` branch, instead of `master`.


## About Slate 

This project is based on [Slate](https://github.com/lord/slate). Slate, in turn uses [Middleman](https://middlemanapp.com) for static site generation. Slate projects are forks of the Slate repo. All TurtleCoin specific changes should be made on the `turtle-master` branch, instead of `master`. This makes it cleaner and easier to fetch updates from Slate's `master` branch.


## Deployment

This project includes `turtlecoin/wiki` as a Git submodule. A commit to the `master` branch of `turtlecoin/wiki` sends a webhook to a AWS lamda function. The AWS lambda function then triggers a CI run on the `master` branch of this project. The CI run fetches the latest `turtlecoin/wiki` submodule, builds the site, and deploys it to Github pages. These steps can also be done manually.
