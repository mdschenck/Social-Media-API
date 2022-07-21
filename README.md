# Social-Media-API

A social network API for a web application where users can share their thoughts, react to friends’ thoughts, and create a friend list., using Express.js for routing, a MongoDB database, and the Mongoose ODM.

# Description

This application uses a MongoDB as well as the MVC / Model View Controller design paradigm to create an API for a Social Media web application.  The application lets the user add User, add Thoughts, and then add Reactions to the Thoughts all utilizing the API routes and request parameters passed in the URL request string, along with JSON data in the request body for adding data with POST and PUT routes. The application also allows the user to add or remove friends from a user, delete a user, and delete a reaction from a thought. This will all be connected to the View component of the MVC when the front end is built.

## Table of Contents

- [Links](#links)
- [Screenshots](#screenshots)
- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)

# Links

[GitHub Repository](https://github.com/mdschenck/Social-Media-API)

[Walk Through Video](https://drive.google.com/file/d/144g-eI86gq_lK0NZ50NR9bFYJ2bRv5eH/view)


# Screenshots

Social Media API CLI interface - Seeding Database
![Screenshot  of Social Media API CLI interface:](./public/images/Social-Media-Api-SeedDB.JPG)

MongoDB Database Users Collection
![Screenshot  of Social Medai API Mongo DB Users Collection:](./public/images/Social-Media-Api-ThoughtsCollection.JPG)

MongoDB Database Thoughts Collection
![Screenshot  of Social Medai API Mongo DB Users Collection:](./public/images/Social-Media-Api-UsersCollection.JPG)

Screenshot of Output on Insomnia Demonstrating Get All Users Route:
![Screenshot  of Insomnia Output Get All Users Route:](./public/images/Social-Media-Api-Insomnia-Users.JPG)

Output on Insomnia Demonstrating Get All Thoughts Route:
![Screenshot  of Insomnia Output Get All Thoughts Route:](./public/images/Social-Media-Api-Insomnia-Thoughts.JPG)


# User Story

- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data


# Technologies Used

- Node.js
- Express.js
- NoSQL
- MongoDB
- Mongoose ORM

# Acceptance Criteria

The following acceptance criteria were met for the project:

- [x] GIVEN a social network API
- [x] WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
- [x] WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
- [x] WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
- [x] WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


# License

MIT License https://opensource.org/licenses/MIT
