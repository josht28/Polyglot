<div align="center">
  <img src ='./client/src/pics/polyglot-logos/polyglot-logos_white.png' alt="Logo" width="200" height="200">

<p>
Polyglot is an educational app designed to help people who are learning a language, practise their conversational skills over text and voice on a daily basic with the aid of AI. With it's inbuilt ability to translate any conversations to your native language as well as giving you the ability to check all your grammatical mistakes, learning a new language is no longer a daunting task.
</p>
</div>

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
## Tech Stack

- React
- Redux
- Node.js
- Express
- MongoDB
- Python
- Flask
  <br/>
- API
  - OpenAI
  - Google Cloud
  - DeepL

## Features

- Text and voice conversations with AI in the target language of your choice.
- Translate conversations in your native language.
- Understand your gramatical mistakes in the target or native language.
<br/>
<br/>
<br/>
<img src ="./client/src/pics/Polyglot-Homepage.png" alt="Logo" width="800" height="500">
<br/>
<br/>
<br/>
<img src ="./client/src/pics/Polyglot-Dashboard.png" alt="Logo" width="800" height="500">

## Getting Started

### Prerequisites

- Node.js
- Pyhton 3.10
- pip
- ffmpeg [openai/Whisper](https://github.com/openai/whisper)
- npm
- MongoDB

### Installation

1. Clone the repository

```sh
git clone https://github.com/josht28/Polyglot.git
```

2. Install dependencies:

- Client : `cd client/`

```sh
npm install
```

- Express server : `cd server/express`

```sh
npm install
```

- Python server: `cd server/python`

```sh
pip3 install -r requirements.txt
```

3. setup env variables: - Express server : `cd server/express` & `touch .env`.
   Setup a google cloud account and create a service account key as a json and save it in "googleService.json"

   ````sh
    chatGPT_key=
    deepLAuthKey =
    CLOUDINARY_NAME =
    CLOUDINARY_API_KEY =
    CLOUDINARY_API_SECRET =
    GOOGLE_APPLICATION_CREDENTIALS ="googleService.json"
    CLOUDINARY_URL=cloudinary://CLOUDINARY_API_KEY:CLOUDINARY_API_SECRET@CLOUDINARY_NAME
    ```


    - Python : `cd server/express` & `touch .env`
    ```sh
    CLOUDINARY_NAME =
    CLOUDINARY_API_KEY =
    CLOUDINARY_API_SECRET =
    ```
   <br/>

   ````

4. Start the server:

- Python : cd server/python
  ```sh
  pip3 install pipenv
  pipenv shell
  python Whisper.py
  ```
- Express
  ```sh
  npm run start
  ```
- Client
  `sh
    npm run start
   `
  The app will be available on http://localhost:3000.

## Contributing

Polyglot is an open-source application and every contribution is welcome.

## License

Polyglot is licensed.
