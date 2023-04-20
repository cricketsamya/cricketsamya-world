---
template: blog-post
title: Building a Backend with TypeORM and PostgreSQL
publishedDate: 2023-04-20T16:50:28.345Z
description: Building a Backend with TypeORM and PostgreSQL
img: ../../static/images/nature-g49d2d45f2_1920.jpg
caption: "Photo credit: [**Pixabay**](https://pixabay.com/)"
imgAlt: Mountain
tags:
    - java
    - typescript
    - javascript
    - node
    - typeorm
    - jpa
    - postgresql
    - postgres
---
## TypeORM and PostgreSQL

When it comes to building a scalable and maintainable backend, developers have a variety of tools and frameworks to choose from. Two popular options are TypeORM and PostgreSQL. TypeORM is an Object-Relational Mapping (ORM) library that provides a convenient way to interact with databases, while PostgreSQL is a powerful relational database that can handle large amounts of data and complex queries. In this blog post, we will explore how to build a backend using TypeORM and PostgreSQL.

## Setting up the Project

The first step is to create a new TypeScript project. We can use the Node Package Manager (npm) to create a new project with the following command:

```shell
npm init -y
```

Next, we need to install the necessary dependencies. We will need the following packages:

- `typeorm`: This is the TypeORM library.
- `pg`: This is the PostgreSQL client for Node.js.
- `reflect-metadata`: This is a dependency required by TypeORM.

We can install these packages using the following command:

```shell
npm install typeorm pg reflect-metadata
```

Once the dependencies are installed, we can create a new TypeScript file called `index.ts` and add the following code:

```typescript
import { createConnection } from 'typeorm';

async function main() {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mypassword',
    database: 'mydb',
    entities: [],
    synchronize: true,
  });

  console.log('Connected to database');
}

main().catch((err) => {
  console.error(err);
});

```

This code imports the necessary packages and sets up a connection to the PostgreSQL database using TypeORM's `createConnection` function. We have specified the database connection details, including the host, port, username, password, and database name. We have also set `synchronize` to `true`, which tells TypeORM to automatically create database tables based on the defined entities.

## Running the Project

We can now run the project using the following command:

```shell
npx ts-node index.ts
```

This will connect to the database and log a message to the console if the connection is successful.

## Defining Entities

Entities are classes that represent database tables in TypeORM. We can define an entity for a user with the following code:

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

This code defines a `User` entity with `id`, `name`, and `email` columns. The `@Entity` decorator marks the class as an entity, and the `@Column` decorator marks each property as a column. The `@PrimaryGeneratedColumn` decorator marks the `id` property as the primary key.

We need to add the User entity to the `entities` array in the `createConnection` options:

```typescript
const connection = await createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mypassword',
  database: 'mydb',
  entities: [User],
  synchronize: true,
});
```

### Inserting Data 
We can now use TypeORM to insert data into the database. We can modify the `createConnection` callback to insert a new user into the database:

```typescript
createConnection().then(async (connection) => {
  console.log('Connected to database');

  const userRepository = connection.getRepository(User);

  const user = new User();
  user.name = 'John Doe';
  user.email = 'johndoe@example.com';

  await userRepository.save(user);

  console.log('User saved:', user);
}).catch((error) => {
  console.log('Error connecting to database:', error);
});

```

This code creates a new `User` object and sets its properties. It then uses the `save` method of the `UserRepository` to insert the new user into the database. Finally, it logs a message to the console to indicate that the user was saved.

### Querying Data

We can also use TypeORM to query data from the database. We can modify the `createConnection` callback to retrieve all users from the database

```typescript
createConnection().then(async (connection) => {
  console.log('Connected to database');

  const userRepository = connection.getRepository(User);

  const users = await userRepository.find();

  console.log('Users:', users);
}).catch((error) => {
  console.log('Error connecting to database:', error);
});
```

This code uses the `find` method of the `UserRepository` to retrieve all users from the database. Finally, it logs a message to the console to indicate the retrieved.

### Conclusion

After working with TypeORM and PostgreSQL, it can be concluded that they are a great combination for building modern web applications. TypeORM provides a simple and intuitive API for working with databases, and its built-in support for migrations and query builders simplifies the development process. Additionally, TypeORM's support for TypeScript makes it easy to build type-safe and maintainable database code.

PostgreSQL, on the other hand, is a robust and performant database that provides developers with advanced features and scalability options. Its support for advanced data types and indexing options makes it ideal for working with complex data structures and querying large datasets.

Overall, combining TypeORM and PostgreSQL provides developers with a reliable and efficient stack for building modern web applications that require a high degree of data persistence and querying capabilities.

## References

- [Typescript](https://www.typescriptlang.org)
- [Typeorm](https://typeorm.io)
- [Typeorm and Postgres](https://www.thisdot.co/blog/connecting-to-postgresql-using-typeorm)



