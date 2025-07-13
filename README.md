# CSCE 411 Project 2

This is the source code for CSCE 411 Project 2.

It contains a simple site for this project, as well as the script necessary to deploy it.

In order to deploy, you can create a docker container using `docker build -t my-nginx-container .` in the root directory. In order to run it, you can type `docker run -p [requested port]:80 my-nginx-container`, with requested port being the port on your device that you would like to host the container on.

Ensure that the port is open for inbound traffic.

Enjoy!

 - Vanessa