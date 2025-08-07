# Todo CRUD API with Fastify

A simple REST API for managing todos, built with fastify and Node.js. Data is stored Locally in JSON file.


## Features

- Create, read , update and delete todos
- Unique 6-digit IDs for each todos
- Status tracking ['pending' , 'done']
- Organized code with repository , services and controller layer

## Tech Stack

- Node.js
- Fastify
- File System for storage

## Installation

1. Clone the repo

```bash
git clone https://github.com/yubshan/TODO-API-Fastify.git
cd TODO-API-Fastify
```

2. Install dependencies 

`npm install`


3. Run the app

`node start`

The server will run on http://localhost:5000

## API Endpoints

- POST /api/v1/todos - Create a new todo

- GET /api/v1/todos - Get all todos

- GET /api/v1/todos/:id - Get todo by ID
 
- PUT /api/v1/todos/:id - Update todo by ID

- DELETE /api/v1/todos/:id - Delete todo by ID

- DELETE /api/v1/todos - Delete all todos