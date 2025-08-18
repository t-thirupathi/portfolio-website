mkdir backend
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt


npm create vite@latest frontend  --template react
cd frontend
npm install
npm run dev

pip install google-cloud-aiplatform

