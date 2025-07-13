# CSCE 411 Project 2

This is the source code for CSCE 411 Project 2.

It contains a simple site for this project, as well as the script necessary to deploy it.

In order to deploy, you can create a docker container using `docker build -t my-nginx-container .` in the root directory. In order to run it, you can type `docker run -p [requested port]:80 my-nginx-container`, with requested port being the port on your device that you would like to host the container on.

In order to deploy according to the multi-container instructions provided by Dr. Lightfoot, there are 2 possible approaches:

## Identical Containers 

To run the configuration to create 5 identical containers, run `docker compose -f docker-compose-default.yml up --build`.

This approach creates them using the same configurations, not taking advantage of the ability to dynamically set unique environment variables as is used
for the other file. However, for all intents and purposes, it is the same, they're just created with the same configurations.


## Unique Containers
To run the configuration to create 5 unique containers, run `docker compose -f docker-compose.yml up --build`.

This will create each of them with environment variables specifying their site name and their port number, displayed on index.js.


Ensure that the port is open for inbound traffic.

Enjoy!

 - Vanessa