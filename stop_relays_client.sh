#!/bin/bash

#Fist shut down the relays specified in the main docker compose file
docker-compose down -v

# If you have added more relays with their own docker compose file it is advisable to shut them down here as the below example

# Change directory to pyrelay
cd pyrelay-master

# Run docker-compose down with volume removal in py relay
docker-compose down -v

# If you have added more relays with their own docker compose file it is advisable to shut them down here


#time to stop the client 
#cd to the client 
cd ..
cd forumstr
npx kill-port 3000

# Exit with status code 0



