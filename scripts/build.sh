#!/usr/bin/env bash
set -euox pipefail

ln -sfF ../turtlecoin-docs turtlecoin-docs
bundle exec middleman build

echo "Build complete"
