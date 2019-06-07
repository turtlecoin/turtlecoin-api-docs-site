#!/usr/bin/env bash
set -euox pipefail

ln -sfF ../turtlecoin-docs turtlecoin-docs
cd docs
bundle exec middleman build --verbose

echo "Build complete"
