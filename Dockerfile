FROM node:12-alpine

LABEL maintainer="Gary Kim <gary@garykim.dev"

RUN apk add --no-cache ca-certificates docker-cli

ADD . /app
WORKDIR /app
RUN npm ci && npm run build && npm ci --only=prod

ENTRYPOINT ["/app/docker-entrypoint.sh"]
