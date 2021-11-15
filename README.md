# database
Docker  Mssql(SQL SERVER)
## Doc
https://blog.logrocket.com/docker-sql-server/
## Portes
 1. 1433

## config
```bash
 $ docker exec -it sql-server-db /bin/bash
 $ /opt/mssql-tools/bin/sqlcmd -U sa -P super_duper_password
 $ select name from sys.Databases;
 $ go
 $ create database testdb;
 $ go

```
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
