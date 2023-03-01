plan of action :
Back end : express server for routing and connecting with database
Routes:
1)/get-messages
2)/post-messages
3)/generate-messages
4)/delete messages
5)/translate
6)/checkgrammar



python for server for converting the audio to text

Front end : React :
components : App
user profile
chatrooms-dashboard -> chatrooms-header ,chatrooms-list -> chatroom
chat-display-container -> chat-display-header, chat-display-messages.
chat-display-footer

Dockerize this

docker run -d -p 80:80 docker/getting-started
You'll notice a few flags being used. Here's some more info on them:

-d - run the container in detached mode (in the background)
-p 80:80 - map port 80 of the host to port 80 in the container
docker/getting-started - the image to use

//for building a docker container image
docker build -t polyglot-front-end .