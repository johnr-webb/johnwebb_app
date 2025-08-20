#!/bin/bash

# Detect architecture to find correct path
if [[ $(uname -m) == 'arm64' ]]; then
  PSQL="/opt/homebrew/opt/postgresql@17/bin/psql"
else
  PSQL="/usr/local/opt/postgresql@17/bin/psql"
fi

# Use default user or ask
USER=${1:-postgres}
HOST="localhost"
PORT="5432"

echo "🔍 Checking PostgreSQL connection with user: $USER"

# Check if psql is accessible
if [ ! -f "$PSQL" ]; then
  echo "❌ psql not found at $PSQL. Is postgresql@17 installed?"
  exit 1
fi

# Try to connect and list databases
$PSQL -U $USER -h $HOST -p $PORT -c '\l'

if [ $? -ne 0 ]; then
  echo "⚠️ Failed to connect. Try a different user or check Postgres logs."
else
  echo "✅ Connection successful. Databases listed above."
fi