# GoStack — Node.js Fundamentals Challenge

A study project developed during the **Rocketseat GoStack** program to practice a more structured Node.js backend using TypeScript, repositories, services and automated tests.

> **Study project:** this repository follows the GoStack learning path and is preserved as part of my technical learning history.

## What the project does

The application models financial transactions and was created to practice backend organization beyond a single-file API.

The source structure includes:

- Transaction model
- Repository layer
- Service layer
- HTTP routes
- Automated tests

## Tech stack

- Node.js
- TypeScript
- Express
- Jest
- Supertest
- UUID
- ESLint
- Prettier
- ts-node-dev

## Concepts practiced

- TypeScript in backend applications
- Separation of responsibilities
- Repository pattern
- Service layer
- Domain-oriented transaction modeling
- Express routing
- Dependency organization
- Automated tests
- Code quality tooling with ESLint and Prettier

## Project structure

```text
src/
├── models/
├── repositories/
├── routes/
├── services/
├── __tests__/
├── app.ts
└── server.ts
```

This structure represents a progression from the earlier GoStack Node.js concepts challenge toward a more maintainable backend design.

## Running the project

Install dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn dev:server
```

Build the TypeScript project:

```bash
yarn build
```

Run the tests:

```bash
yarn test
```

Modern Node.js environments may require compatibility adjustments because the project preserves its original dependency versions.

## Project context

Created in 2020 during Rocketseat's GoStack program as a backend fundamentals exercise. The repository is kept close to its original implementation to document my study of TypeScript, application layering, repository/service patterns and automated testing in Node.js.

---

**William Figueiredo**  
Software Engineering → AI Engineering
