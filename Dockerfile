FROM ubuntu:16.04 as ember
MAINTAINER Aad Versteden <madnificent@gmail.com>

# Install nodejs as per http://askubuntu.com/questions/672994/how-to-install-nodejs-4-on-ubuntu-15-04-64-bit-edition
RUN apt-get -y update; apt-get -y install wget python build-essential git libfontconfig curl
RUN wget -qO- https://deb.nodesource.com/setup_9.x > node_setup.sh
RUN bash node_setup.sh
RUN apt-get -y install nodejs
# Install bower
RUN npm install -g bower@1.7.9
RUN echo '{ "allow_root": true }' > /root/.bowerrc
# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn
# Install ember-cli
RUN npm install -g ember-cli@3.0.0

WORKDIR /app

COPY . /app
RUN npm install
RUN npm rebuild node-sass
RUN ember build

FROM nginx:1
RUN ln -s /usr/share/nginx/html /app
COPY --from=ember /app/dist /app
