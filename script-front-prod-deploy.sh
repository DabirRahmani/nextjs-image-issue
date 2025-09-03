#!/bin/bash

set -e

# Load saved image
docker load -i /home/setrebornsrv/frontend/frontend.tar

# Remove existing container
docker rm -f set-front || true

# Run new container
docker run --restart always -d --name set-front -p 3004:3000 set-front-prod