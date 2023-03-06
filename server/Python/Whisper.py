from flask import Flask,request,jsonify
import requests
import whisper
import os
from flask_cors import CORS
from io import BytesIO

# Set your Cloudinary credentials
# ==============================
from dotenv import load_dotenv
load_dotenv()
import cloudinary

# Log the configuration
cloudinary.config (
  cloud_name = os.getenv ('CLOUDINARY_NAME'),
  api_key = os.getenv('CLOUDINARY_API_KEY'),
  api_secret = os.getenv('CLOUDINARY_API_SECRET'),
  secure = True,
  )
# Import the Cloudinary libraries
# ==============================

import cloudinary.uploader
import cloudinary.api

# Import to format the JSON responses
# ==============================
import json

# Init app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/audio',methods =['POST'])
def parse():
    print ("reached here")
    url = request.json['body']
    print(url)
    audio = requests.get(url)
    with open('movie.mp3', 'wb') as f:
     f.write(audio.content)
     model = whisper.load_model("base")
     result = model.transcribe('./movie.mp3')
     print(result["text"])
     os.remove('./movie.mp3')
     return jsonify({'data':result["text"]})


    # return jsonify({'data':url})



@app.route('/',methods =['GET'])
def Home():
    return jsonify({'message':'Testing'})

#Run server
if __name__ == '__main__':
  app.run(debug=True)
