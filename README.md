# database
Docker all databases 
1. MySQL
2. MongoDB
3. Postgres
4. Redis
5. ElasticSearch
## Tooles
1. phpmyadmin
2. adminer
3. pgadmin
4. kibana
## Portes
 1. 5432
 2. 5050
 3. 3306
 4. 27017
 5. 6379
 6. 90
 7. 60
 8. 5601
 9. 9200
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


To **set a password in MongoDB**, you need to create an **admin user** with a username and password inside the `admin` database.

Here’s a simple step-by-step guide:

---

## ✅ Step-by-Step: Set a MongoDB Password for Admin User
### 🟢 Step 1: got to shel

```bash
docker-compose exec mongodev shell
```
### 🟢 Step 1: Start the MongoDB shell

```bash
mongosh
```

### 🟢 Step 2: Switch to the `admin` database

```js
use admin
```

### 🟢 Step 3: Create the admin user

Replace `myAdminUser` and `myStrongPassword` with your desired username and password:

```js
db.createUser({
  user: "admin",
  pwd: "sajadweb1368",
  roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
});
```

You should see:

```bash
Successfully added user: { "user" : "myAdminUser", ... }
```

---

## 🔒 Step 4: Enable authentication in MongoDB config file

Edit the MongoDB config file:

```bash
sudo nano /etc/mongod.conf
```

Find the `security:` section (add it if it doesn’t exist), and enable authorization:

```yaml
security:
  authorization: enabled
```

Save and exit (Ctrl+O, Enter, Ctrl+X).

---

## 🔁 Step 5: Restart MongoDB

```bash
sudo systemctl restart mongod
```

---

## 🔐 Step 6: Log in with the password

From now on, you need to authenticate:

```bash
mongosh -u "admin" -p "sajadweb1368" --authenticationDatabase "admin"
```

---

## v2
```sh
openssl rand -base64 756 > mongo-keyfile
chmod 400 mongo-keyfile

docker-compose down -v   # برای حذف volumeها و دیتابیس قدیمی
./prepare-init.sh         # تولید فایل mongo-init.js از template
docker-compose up -d


```