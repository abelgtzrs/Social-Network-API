# Social Network API

## Description
The Social Network API is a back-end application built using Express.js, MongoDB, and Mongoose. It provides a fully functional RESTful API for a social networking platform, allowing users to create profiles, post thoughts, add reactions, and manage friend relationships. This project demonstrates mastery of NoSQL database operations, schema design, and routing with Express.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough](#walkthrough)
- [Screenshot](#screenshot)
- [License](#license)
- [Contributors and Questions](#contributors-and-questions)

## Installation
1. Clone the repository to your machine:
   ```bash
   git clone https://github.com/abelgtzrs/Social-Network-API.git
   ```

2. Navigate into the project directory:
   ```bash
   cd social-network-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Ensure you have MongoDB installed and running locally or set up a MongoDB Atlas URI in your environment variables.

5. Start the server:
   ```bash
   npm start
   ```

## Usage
Once the server is running, use Insomnia to interact with the following routes:

### User Routes
- `GET /api/users` – Get all users
- `GET /api/users/:userId` – Get a user by ID
- `POST /api/users` – Create a new user
- `PUT /api/users/:userId` – Update a user
- `DELETE /api/users/:userId` – Delete a user and their thoughts
- `POST /api/users/:userId/friends/:friendId` – Add a friend
- `DELETE /api/users/:userId/friends/:friendId` – Remove a friend

### Thought Routes
- `GET /api/thoughts` – Get all thoughts
- `GET /api/thoughts/:thoughtId` – Get a thought by ID
- `POST /api/thoughts` – Create a thought and associate it with a user
- `PUT /api/thoughts/:thoughtId` – Update a thought
- `DELETE /api/thoughts/:thoughtId` – Delete a thought

### Reaction Routes
- `POST /api/thoughts/:thoughtId/reactions` – Add a reaction
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` – Remove a reaction

## Features
- RESTful API for a social network platform
- Full CRUD operations for users and thoughts
- Embedded subdocuments for reactions
- Self-referencing relationships for friends
- Mongoose virtuals for friend and reaction counts
- Custom timestamp formatting using getters
- Modular code architecture for scalability and maintainability

## Walkthrough
A full walkthrough video demonstrating all functionality can be found here:  
**[Walkthrough Video Link](https://www.youtube.com/watch?v=aaJlmcUgj1Y)**

The video includes:
- Starting the server
- Testing all GET, POST, PUT, DELETE routes for users, thoughts, reactions, and friends using Insomnia
- Verifying database interactions via MongoDB

## Screenshot
![Screenshot 2025-04-21 170632](https://github.com/user-attachments/assets/bafcc135-4529-42e9-8deb-b008adc58f4b)


## License
This project is licensed under the MIT License.

## Contributors and Questions
Developed by Abel Gutierrez.  
For inquiries, suggestions, or contributions, please contact:  
**Email:** abelgtzrs@gmail.com.com  
**GitHub:** [abelgtzrd](https://github.com/abelgtzrs/)
