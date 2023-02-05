FROM --platform=linux/amd64 node:18.14

COPY scripts/ /scripts
WORKDIR /app

EXPOSE 3000
CMD /scripts/init.sh
