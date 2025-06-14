# MySQL CRUD API with Node.js

A simple API demonstrating CRUD operations with MySQL and Node.js/Express. This project was built to learn the fundamentals MySQL and how it can be implemented with Node.js.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete test records
- **Database Integration:** MySQL connection with connection pooling
- **RESTful API:** Standard HTTP methods (POST, GET, PUT, DELETE)
- **Error Handling:** Proper error responses for invalid requests

## Technologies Used

- **Node.js:** JavaScript runtime
- **Express:** Web application framework
- **MySQL:** Database management system
- **dotenv:** Environment variable management
- **TypeScript:** Typed JavaScript superset

## Installation

To set up this API locally, follow these steps:

1. **Clone the Repository**
    
    ```shell
    git clone https://github.com/jei3m/node-mysql.git
    cd node-mysql
    ```
    
2. **Install Dependencies**
    
    ```shell
    npm install
    ```
    
3. **Set Up Environment Variables**
    
    Create a `.env` file in the root directory and add your MySQL credentials:
    
    ```dotenv
    PORT=5000
    CONNECTION_LIMIT=10
    HOST=localhost
    USER=your_user
    PASSWORD=your_password
    DATABASE=your_db
    ```
    
4. **Start the Development Server**
    
    ```shell
    npm start
    ```
    
5. **Test the API**
    
    The API will be available at `http://localhost:5000/api/tests`

## Usage

### API Endpoints

- **POST /api/tests** - Create a new test
  ```json
  {
    "name": "Test name",
    "description": "Test description"
  }
  ```

- **GET /api/tests** - Retrieve all tests
  ```json
  {
      "success": true,
      "data": [
          {
              "id": 1,
              "name": "Test 1",
              "description": "description",
              "created_at": "2025-06-10T15:30:25.000Z"
          },
          {
              "id": 2,
              "name": "Test 2",
              "description": "description",
              "created_at": "2025-06-10T15:30:27.000Z"
          },
          {
              "id": 3,
              "name": "Test 3",
              "description": "description",
              "created_at": "2025-06-10T15:30:28.000Z"
          },
          {
              "id": 4,
              "name": "Test 4",
              "description": "description",
              "created_at": "2025-06-10T15:30:29.000Z"
          },
          {
              "id": 5,
              "name": "Test 5",
              "description": "description",
              "created_at": "2025-06-10T15:30:30.000Z"
          }
      ]
  }
  ```

- **PUT /api/tests/:id** - Update a test by ID
  ``` json
  {
      "name": "Edit",
      "description": "description"
  }
  ```

- **DELETE /api/tests/:id** - Delete a test by ID
  ``` json
    {
        "success": true,
        "message": "Test deleted succesfully"
    }
  ```

## Special Mention:
This Commit and README is made possible with [GitWrite](https://github.com/jei3m/git-write).