# database
Docker all databases 
1.Redis
## Portes
 1.27017
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
Sajjad Mohhamadi Nejad <sajadweb7@gmail.com , daram3118@gmail.com>
