# REST-Signup-Login

A simple RESTful API built using Node.js, MongoDB, Express, and JWT for user authentication and management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

A simple RESTful API built using Node.js, MongoDB, Express, and JWT for user authentication and management.

## Features

- User registration (signup)
- User authentication (login)
- User logout
- Password reset functionality

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB server running
- npm or yarn installed

## Installation

1. Clone the repository:

 ```bash
git clone https://github.com/MeetMulik/REST-Signup-Login.git
```
2. Install dependencies:
   
 ```bash
cd REST-Signup-Login
npm install
```
3. Set up environment variables:
Create a .env file in the root of your project and add the following:

```bash
PORT=
MONGO_URI=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

## Usage

1.To start the server, run the following command:
```bash
npm run dev
```
## API Endpoints

#### 1. Signup
- Method: POST
- Endpoint: `/signup`
- Description: Registers a new user.
- Request Body:
  ```json
  {
    "name": "",
    "username": "",
    "email": "",
    "password": ""
  }
- Response:
  ```json
  {
    "_id": "",
    "name": "",
    "username": "",
    "email": ""
  }

#### 2. Login

- Method: POST
- Endpoint: `/login`
- Description: Logs in an existing user.
- Request Body:
```json
{
  "username": "",
  "password": ""
}
```
- Response:
{
  "_id": "",
  "name": "",
  "username": "",
  "email": ""
}

### 3. Logout

- Method: POST
- Endpoint: `/logout`
- Description: Logs the user out.

### 4. Forget Password

- Method: POST
- Endpoint: `/forget-password`
- Description: Initiates the password reset process.
- Request Body:
  ```json
  {
    "email": ""
  }
- Response
(No specific response body; initiates the password reset process and sends an email with instructions)

### 5. Reset Password

- Method: POST
- Endpoint: `/reset-password`
- Description: Resets the user's password.
- Request Body:
  ```json
  {
    "password": ""
  }
- Response: (No specific response body; successful password reset)

