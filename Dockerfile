ARG IMAGE=nginx:1.21.1-alpine

FROM $IMAGE AS dev
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY ./nginx.dev.conf ./etc/nginx/nginx.conf
COPY ./modules/host/builds/development ./modules/host
COPY ./modules/map/builds/development ./modules/map
COPY ./modules/card/builds/development ./modules/card

FROM $IMAGE AS prod
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY ./nginx.conf ./etc/nginx/nginx.conf
COPY ./modules/host/builds/production ./modules/host
COPY ./modules/map/builds/production ./modules/map
COPY ./modules/card/builds/production ./modules/card
