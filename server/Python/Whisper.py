from flask import Flask,request,jsonify
import requests
import whisper
import os
from flask_cors import CORS

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
# Init app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/audio',methods =['POST'])
def parse():
  #fetching the cloudinary url of the audio
    url = request.json['body']
    print(url)
    audio = requests.get(url)
  # create an mp3 file from the response
    with open('movie.mp3', 'wb') as f:
     f.write(audio.content)
  # pass this mp3 file to the whisper model to transcribe the text from the speech
     model = whisper.load_model("base")
     result = model.transcribe('./movie.mp3')
  # delete the mp3 file from the directory
     os.remove('./movie.mp3')
     return jsonify({'data':result["text"]})

#Run server
if __name__ == '__main__':
  app.run(debug=True)
