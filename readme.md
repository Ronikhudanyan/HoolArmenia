# Express Auth Boilerplate

- create a node app
- .gitignore
- install and set up express
- stubbed out GET auth/login, GET auth/signup, POST auth/login, POST auth/signup
- configured auth controller
- set up ejs, express-ejs-layouts, verified that it's working
- set up the signup and login forms, tested post routes

---

## How to set up:

1. Fork & Clone

2. Intall dependencies

```
npm i
```

3. create a `config.json` with the following code:

```json
{
  "development": {
    "database": "<insert DB name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "<insert DB name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "<insert DB name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

**Note:** if your DB requires a username and password, you'll need to include these fields as well.

4. Create the DB

```
Sequelize db:create <insert db attrebutes and name>
```

5. Migrate the `user` model to your DB

```
Sequelize DB:migrate
```

6. Add a `SESSION_SECRET` enviroment varibable in a `.env` file (can be any string)
