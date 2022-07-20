const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomName, getRandomReaction , getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];



  // Loop 20 times -- add thoughts to the thoughts array
  for (let i = 0; i < 20; i++) {
   
    let reactions = [];
    // Get some random reaction objects using a helper function that we imported from ./data
    reactions = getRandomReaction(4);
    const thoughtText = getRandomThought();
    const userName = getRandomName();

    thoughts.push({
      thoughtText,
      userName,
      reactions,
    });
  }


  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add users to the collection and await the results
  await User.collection.insertOne({
    userName: "James Brown",
    thoughts: [],
    friends: [],
  });

  // Log out the seed data to indicate what should appear in the database

  // console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
}
);
