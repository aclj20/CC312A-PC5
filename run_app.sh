#!/bin/bash
set -e

ROOT_PROJECT_DIR=$(dirname "$0")

# cambiamos al directorio src
cd "$ROOT_PROJECT_DIR/src"
docker compose -f docker-compose.base.yaml -f docker-compose.dev.yaml up -d

echo "http://localhost:8002" 