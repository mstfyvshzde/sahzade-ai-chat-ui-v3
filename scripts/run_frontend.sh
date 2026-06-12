#!/bin/bash

set -e

echo "Starting Sahzade AI Chat UI V3..."

cd "$(dirname "$0")/../frontend"

python3 -m http.server 5500 --bind 127.0.0.1
