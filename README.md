# ip-api

ip using data from https://ipwhois.io/ . It is developed with Typescript, NestJS, MySQL, typeORM it is using Docker.
cahing is done using cache-manager and TTL 60s.

## Step to be done before running app

- add ".env" file in main directory and configure it

```
MYSQL_ROOT_PASSWORD=randomrootpassword
MYSQL_DATABASE=ips
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USERNAME=root
MYSQL_PASSWORD=randomrootpassword
MYSQL_SYNCHRONIZE=true
PORT=3000
```


## to Build mysql Docker image:

```
- docker-compose up
```

## to run api

```
 - npm run start:dev
```

## to run unit tests

```

- npm run test:watch

```
