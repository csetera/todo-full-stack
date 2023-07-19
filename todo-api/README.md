## Description

Basic [Nest](https://github.com/nestjs/nest) server implementation for To Do application.

## Installation

```bash
$ npm install
```

## Database Configuration

Database configuration relies on [dotenv](https://github.com/motdotla/dotenv).  The available
options include:

* DB_TYPE - Type of the underlying database.  Defaults to `sqlite` if not specified
* DB_DATABASE - The database to connect to.  Defaults to `:memory:` if not specified
* DB_HOST - The host on which the database is running.  No default.
* DB_PORT - The port on which the database is listening.  No default.
* DB_USERNAME - The username to use for the database connection.  No default.
* DB_PASSWORD - The password to use for the database connection.  No default.
* DB_SYNCHRONIZE - Whether to synchronize schema changes automatically.  Defaults to `true` IF DB_TYPE is `sqlite` and DB_DATABASE is `:memory:`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dependencies

* [Nest](https://github.com/nestjs/nest)
* [TypeORM](https://typeorm.io/)
* [node-sqlite3](https://github.com/TryGhost/node-sqlite3)
