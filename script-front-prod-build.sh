#!/bin/bash

set -e

# Build production image
docker build -t set-front-prod .

# Save image for deployment
mkdir ~/frontend || true
docker save -o ~/frontend/frontend.tar set-front-prod