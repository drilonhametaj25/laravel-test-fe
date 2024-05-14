FROM nginx:alpine
RUN rm /usr/share/nginx/html/index.html
COPY ./dist/be /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
