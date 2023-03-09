# Polyglot

Polyglot is an educational app to help intermediate language learners to practise their target language having conversation over text and voice.

# Python server setup:

Install Python 3.8-3.10 and pip for package management


brew install ffmpeg

pip install pipenv

pip install flask

pip install requests

Inside the python folder:

pipenv shell 

pip install -U openai-whisper

pip install -U flask-cors

pip install python-dotenv

pip install cloudinary

To start the server:
Activate the virtual environment with the command: run the file whisper.py using the command: python Whisper.py . This will start the server and be listening on local host port 5000.


# Express server
Run npm i from the express folder and run nodemon. This will start the server on localhost:4000.

# React front end
Go in to the my-app section, run npm i and followed by npm start.This should open up the browser on localhost:3000.


# Needed apis:


Create google cloud account and follow this to create credentials for text to speech api.
https://cloud.google.com/iam/docs/keys-create-delete

Create google-service-account.json file in express folder with the credentials like this:
{
  "type": 
  "project_id": 
  "private_key_id": 
  "private_key": 
  "client_email": 
  "client_id": 
  "auth_uri": 
  "token_uri": 
  "auth_provider_x509_cert_url": 
  "client_x509_cert_url": 
}


Cloudinary
Set up cloudinary account and add the keys displayed on your dashboard to the .env in the express and python folders.

Deepl api
Set up deepl api account and add key to express folder .env.

# local variables

Python folder .env file:

CLOUDINARY_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=


Express folder .env file:

PYTHON_URL="http://127.0.0.1:5000/audio"

chatGPT_key=

deepLAuthKey=

CLOUDINARY_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET='./google-service-account.json'

GOOGLE_APPLICATION_CREDENTIALS= 

CLOUDINARY_URL=
