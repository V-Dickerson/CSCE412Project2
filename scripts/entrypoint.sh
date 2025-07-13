#!/bin/sh

# this is used to get environment variables from docker compose to be usable by javascript
envsubst < /usr/share/nginx/html/javascript/environment_config.template.js > /usr/share/nginx/html/javascript/environment_config.js
exec nginx -g 'daemon off;'