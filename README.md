![image](https://user-images.githubusercontent.com/34389545/35821974-62e0e25c-0a70-11e8-87dd-2cfffeb6ed47.png)

[![Build Status](https://travis-ci.org/turtlecoin/turtlecoin-api-docs-site.svg?branch=turtle-master)](https://travis-ci.org/turtlecoin/turtlecoin-api-docs-site)

## Developing

### Setup

1. Make sure you have [Ruby](https://www.ruby-lang.org/en) 2.3 or newer installed.
2. Run `gem install bundler` to install [bundler](http://bundler.io).
3. Run `bundle install` to install the dependencies of this project.
4. Create a symlink called `turtlecoin-docs` to the `turtlecoin-docs` project. For example run `ln -s ../turtlecoin-docs turtlecoin-docs` to create a link to the `turtlecoin-docs` folder located at the same level as the folder containing this project.
5. Run `bundle exec middleman server` to start the development server at `http://localhost:4567`.

### Development notes

* Changes should target the `turtle-master` branch, instead of `master`.
* Site specific styles are in `source/stylesheets/turtlecoin`.
* Pulls content from the `turtlecoin-docs/docs/api` folder.

## About Slate 

This project is based on [Slate](https://github.com/lord/slate). Slate, in turn uses [Middleman](https://middlemanapp.com) for static site generation. Slate projects are forks of the Slate repo. All TurtleCoin specific changes should be made on the `turtle-master` branch, instead of `master`. This makes it cleaner and easier to fetch updates from Slate's `master` branch.


## Deployment

A commit to `turtlecoin-docs/master` auto builds this project via Travis CI, which deploys the latest content from there.


## Contributors

* [@ar-x](https://github.com/ar-x/)
* [@timmcleod](https://github.com/timmcleod/)
