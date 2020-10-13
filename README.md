<p align="center"><img src="/global_assets/courseyard-banner.png" height="80" width="auto"></p>

## 💡 Introduction

A handpicked collection of best free learning resources on the Planet 🌎, uh you can also say on the Universe 😋.

![javascript](https://img.shields.io/badge/-javascript-yellow) ![react](https://img.shields.io/badge/-react-red) ![express](https://img.shields.io/badge/-express-green) ![postgresql](https://img.shields.io/badge/-postgresql-blue)

## 🤩 Features

- Get the best **free**, **handpicked** learning resources available on the internet.
- Get a bunch of cool courses available on different **languages**.
- Courses are provided with **tags** for easy manipulation of users.
- Easy and cool **description** provided for each course.

---

### Team Coffee!☕

We are a team of 3!

- [Karan](https://github.com/KaranSinghBisht) 😎
- [Saptarshi](https://github.com/saptarshibasu15) 😴
- [Milan](https://github.com/milan090) 🤠

##### Made with ♥ by Team Coffee

![love-badge](https://forthebadge.com/images/badges/built-with-love.svg)

### Setting Up the Database

1. Install postgresql
2. Create a database courseyard:
   `CREATE DATABASE courseyard;`

3. Create the table for storing courses:

```
CREATE TABLE course (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(250) NOT NULL,
  instructor VARCHAR(50),
  courseurl VARCHAR(200) NOT NULL,
  imageurl VARCHAR(200) NOT NULL,
  tags TEXT [] NOT NULL
);
```

4. Setup .env file in root directory and add in the following details
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=password
   DB_NAME=courseyard
