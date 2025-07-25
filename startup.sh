#!/bin/bash

echo "=== Azure App Service Startup ==="

# Build frontend
echo "Building React frontend..."
cd /home/site/wwwroot/frontend
npm install --production
npm run build

# Start FastAPI server
echo "Starting FastAPI server..."
cd /home/site/wwwroot/backend
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:8000