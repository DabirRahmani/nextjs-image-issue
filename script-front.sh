#!/bin/bash

set -e

# Build Docker image
docker build -t set-front .

# Remove existing container
docker rm -f set-front || true

# Run new container
docker run --restart always -d --name set-front -p 3004:3000 set-front