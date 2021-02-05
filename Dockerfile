FROM mongo
COPY ./config/mongo.conf /data/db
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]