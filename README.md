# Polyglot

Polyglot is an educational app to help intermediate language learners to practise their target language having conversation over text and voice.

# Python server setup:

Install Python 3.8-3.10 and pip for package management
You can download and install (or update to) the latest release of Whisper with the following command: pip install -U openai-whisper
It also requires the command-line tool ffmpeg to be installed on your system, which is available from most package managers:
on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg

on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg

For more detailed information please follow the git repository of [openai/Whisper](https://github.com/openai/whisper)

To start the server:
Activate the virtual environment with the command: pipenv shell from the python folder and run the file whisper.py using the command: python Whisper.py . This will start the server and be listening on local host port 5000.

# Express server
Run npm i from the express folder and run nodemon. This will start the server on localhost:4000.

# React front end
Go in to the my-app section, run npm i and followed by npm start.This should open up the browser on localhost:3000.








