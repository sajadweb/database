# database
Docker all databases 
1. MySQL
2. MongoDB
3. Postgres
4. Redis
## Tooles
1. phpmyadmin
2. adminer
3. pgadmin
## Portes
 1. 5432
 2. 5050
 3. 3306
 4. 27017
 5. 6379
 6. 90
 7. 60
## networks
```docker
networks:
  sajadweb:
    external: true
```
## Init
```bash
_>npm run up
```
#### OR
```bash
_>docker-compose build && docker-compose up -d
```

## Remove
```bash
_>npm run down
```
#### OR
```bash
_> docker-compose down
```
## Start
```bash
_>npm run start
```
#### OR
```bash
_>docker-compose start
```
## Stop
```bash
_>npm run stop
```
#### OR
```bash
_>docker-compose stop
```

## Restart
```bash
_>npm run restart
```
#### OR
```bash
_>docker-compose restart
```

## Author
Sajjad Mohhamadi Nejad <sajadweb7@gmail.com>