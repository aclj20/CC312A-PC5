#!/bin/bash
set -e

ROOT_PROJECT_DIR=$(dirname "$0")

cd "$ROOT_PROJECT_DIR/src"
docker compose -f docker-compose.dev.yaml down
