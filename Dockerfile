FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
EXPOSE 80
COPY ./javascript/environment_config.js /usr/share/nginx/html/javascript/environment_config.template.js
COPY ./scripts/entrypoint.sh ./scripts/entrypoint.sh
RUN chmod +x /scripts/entrypoint.sh
ENTRYPOINT ["/scripts/entrypoint.sh"]