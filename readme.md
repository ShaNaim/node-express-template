# Node.js Express Template

## Overview

This project is a template for building a Node.js application using **Express** with **ES Modules**. It includes a well-structured setup for organizing code, handling configuration, logging, and provides guidelines for implementing common features such as request logging, middleware, and module resolution.

The project also includes integration with popular tools like **ESLint**, **Prettier**, **Module Alias**, and **Husky** for linting, code formatting, and pre-commit hooks.

## Table of Contents

1.  [Project Setup](#project-setup)
2.  [Folder Structure](#folder-structure)
3.  [Configuration](#configuration)
    - [Package.json](#packagejson)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
    - [Module Aliases](#module-aliases)
4.  [Running the Project](#running-the-project)
5.  [Middleware](#middleware)
6.  [Logging](#logging)
7.  [Development Workflow](#development-workflow)
    - [Linting](#linting)
    - [Pre-commit Hooks](#pre-commit-hooks)
8.  [Testing](#testing)
9.  [Best Practices](#best-practices)
10. [Future Enhancements](#future-enhancements)
11. [License](#license)

## Project Setup

To set up this project on your local machine, follow these steps:

1.  **Clone the Repository:**

```bash
   git clone https://github.com/ShaNaim/node-express-template.git
```

2.  **Install Dependencies:**

Navigate to the project folder and run:

```bash
   npm  install
```

3.  **Run the Development Server:**

To start the application in development mode using nodemon, run:

```bash
   npm run dev
```

This will start the server at [http://localhost:3000](http://localhost:3000).

## Folder Structure

Here is a high-level overview of the folder structure used in this project:

```bash
project-root/
│
├── src/
│   ├── config/                  # Configuration files for environment variables, app settings
│   ├── middleware/              # Custom middleware (e.g., logging, authentication)
│   ├── modules/                 # Application business logic and services
│   ├── utils/                   # Utility functions and helper modules
│   └── index.js                 # Entry point for the application
│
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── jsconfig.json                # JavaScript configuration for path aliasing
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation (this file)
```

## Configuration

### Package.json

This file contains project metadata, dependencies, scripts, and configuration for various tools like ESLint, Prettier, Husky, and Module Alias. Here is a summary of some important sections:

- Dependencies: Lists the core libraries like express, pino (logging), module-alias, and others.
- Scripts: Defines tasks such as dev (start the server with nodemon), lint, format, etc.
- Module Aliases: Custom paths are defined to simplify imports in the project.

### ESLint

This project uses ESLint to maintain code quality. The `.eslintrc.json` file contains configuration settings for the rules, plugins, and parser options.

Key rules include:

- `no-unused-vars`: Warns about unused variables.
- `unused-imports/no-unused-imports`: Flags unused imports in the code.
- `camelcase`: Enforces camelCase naming conventions.
- `semi`: Ensures semicolons are used at the end of statements.

### Prettier

Prettier is configured to automatically format the code. The `.prettierrc` file includes configuration for code style rules such as:

- Single Quotes: Ensures the use of single quotes for strings.
- Tab Width: Defines the number of spaces for indentation.
- Trailing Commas: Controls when trailing commas are used.

### Module Aliases

Module aliases are configured in `package.json` under `_moduleAliases`. This allows for cleaner and shorter imports without relative paths.

Example alias configuration:

```json
"_moduleAliases": {
  "@util": "./src/utils",
  "@config": "./src/config",
  "@modules": "./src/modules",
  "@middleware": "./src/middleware"
}
```

## Running the Project

To run the application in development mode, use the following command:

```bash
   npm run dev
```

This will use nodemon to automatically restart the server when files are modified.

The app runs on [http://localhost:3000](http://localhost:3000) by default.

## Middleware

Middleware is defined in the `src/middleware` directory. Custom middleware can be added to handle tasks such as logging, authentication, and error handling.

Example of custom logger middleware:

```javascript
// src/middleware/logger.middleware.js
export default function loggerMiddleware(req, res, next) {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
}
```

This middleware can be used in `src/index.js` like this:

```javascript
import loggerMiddleware from '@middleware/logger.middleware';
app.use(loggerMiddleware);
```

## Logging

The project uses Pino for logging. Pino is a fast and low-overhead logger suitable for production environments.

Example setup in `src/utils/logger.js`:

```javascript
import pino from 'pino';

const logger = pino({
  level: 'info',
  prettyPrint: { colorize: true },
});

export default logger;
```

This logger can be used throughout the project to log messages.

## Development Workflow

### Linting

Linting is handled by ESLint. To lint the entire project, run:

```bash
   npm run lint
```

To automatically fix linting issues, use:

```bash
   npm run lint:fix
```

### Pre-commit Hooks

This project uses Husky and lint-staged to run linting and formatting before commits. When you try to commit changes, the pre-commit hook will automatically run ESLint and Prettier.

Make sure to install the required packages:

```bash copy
npm install husky lint-staged --save-dev
```

## Testing

Testing has not yet been implemented in this template, but it's recommended to integrate a testing framework like Jest or Mocha.

## Best Practices

- Use ESLint and Prettier to maintain code quality and consistency.
- Keep your middleware functions clean and modular. Each middleware should handle only one responsibility.
- Always use async/await for asynchronous operations, especially in Express route handlers.
- Follow the DRY (Don't Repeat Yourself) principle. Reuse functions and modules wherever possible.
- Use Module Aliases to simplify imports and avoid long relative paths.

## Future Enhancements

- Testing: Integrate a testing framework like Jest or Mocha for unit and integration tests.
- Authentication: Implement user authentication (JWT or OAuth).
- Database Integration: Integrate a database (e.g., MongoDB, PostgreSQL) for persistent storage.
- Error Handling: Improve global error handling using custom error middleware.

## License

### MIT License

Copyright (c) 2025 ShaNaim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
