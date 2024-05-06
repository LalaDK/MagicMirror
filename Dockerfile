FROM node:18.12.1-alpine
RUN apk add git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN ls -latr /usr/src/app/
#COPY ./package.json /usr/src/app/package.json
COPY ./.git /usr/src/app/.git/
#COPY ./fonts /usr/src/app/vendor/
#COPY ./fonts /usr/src/app/fonts/
#COPY ./js /usr/src/app/js/
#COPY ./modules /usr/src/app/modules/
#COPY ./serveronly /usr/src/app/serveronly/
RUN git submodule update --init --recursive
RUN cd /usr/src/app/modules/MMM-CalendarExt3 && npm install
RUN npm run install-mm
ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080
CMD ["npm", "run", "server"]