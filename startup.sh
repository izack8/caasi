#!/bin/bash

echo "=== Azure App Service Startup ==="

# Check if Node.js is available and build if possible
if command -v npm &> /dev/null; then
    echo "Building React frontend..."
    cd /home/site/wwwroot/frontend
    npm install --production
    npm run build
    cd /home/site/wwwroot/backend
else
    echo "npm not available, looking for pre-built dist folder..."
fi

# Start FastAPI server
echo "Starting FastAPI server..."
python -m uvicorn main:app --host 0.0.0.0 --port 8000