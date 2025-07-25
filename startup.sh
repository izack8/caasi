echo "Starting backend server!!!!!"

cd backend
uvicorn main:app --host 0.0.0.0 --port 8000