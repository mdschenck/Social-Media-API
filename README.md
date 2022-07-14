# Social-Media-API

A social network API for a web application where users can share their thoughts, react to friends’ thoughts, and create a friend list., using Express.js for routing, a MongoDB database, and the Mongoose ODM.

# Description


## Table of Contents

- [Screenshots](#screenshots)
- [Links](#links)
- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)

# Screenshots

![Screenshot  of welcome screen:](./public/images/prioritizer-welcome-screenshot.JPG)

![Screenshot  of login screen:](./public/images/prioritizer-login-screenshot.JPG)

![Screenshot  of proposals screen:](./public/images/prioritizer-proposals-screenshot.JPG)


# Links

[GitHub Repository](https://github.com/mdschenck/Prioritizer)

[Walk Through Video](https://infinite-coast-94356.herokuapp.com/)

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
