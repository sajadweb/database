FROM redis:alpine
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]