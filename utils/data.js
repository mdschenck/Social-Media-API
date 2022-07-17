const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const randomThoughts = [
  'Sample post 1',
  'Sample post 2',
  'Sample post 3',
  'Sample post 4',
  'Sample post 5',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu erat sed nisi cursus rhoncus a eget eros. Etiam sagittis urna sed ex pulvinar volutpat. In lacus ante, mollis sed dictum nec, volutpat a dui. Integer ut maximus sapien.",
  "Fusce feugiat velit vitae bibendum hendrerit. Vivamus ultricies vestibulum scelerisque. Fusce dapibus auctor erat, in volutpat velit mattis sit amet. Morbi ac nisl interdum diam dignissim convallis nec eu purus. Sed pretium justo vestibulum, sagittis diam vel, scelerisque metus.",
  "Ut nisl tellus, accumsan quis nisl non, semper convallis libero. Vestibulum at tellus nisl. Donec in ultricies nibh. Aenean lacinia ullamcorper magna, commodo interdum massa finibus luctus.", 
  "In vehicula diam vitae justo pulvinar convallis. Suspendisse convallis velit magna, ut pretium libero gravida quis. Vivamus venenatis suscipit viverra.",

];

const randomReactions = [
  'Random Reaction 1',
  'Wow that is incredible!',
  'Hey! Super Cool!',
  'I do not agree',
  'This is wholly untrue.',
  'Skittles is the greatest candy.',
  'Let me think about that.',
  'Hello world',
  'This is Foo.',
  'Random Reaction 2',
  'I agree completely!',
  'Keep me in the loop. ',
  'Excellent!',
  'Random Reaction 3',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random reactions that we can add to thoughts object.
const getRandomReaction = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionText: getRandomArrItem(randomReactions),
    });
  }
  return results;
};

// Function to generate random thoughts that we can add to the user object.
const getRandomThought = (int) => {
  const results = [];
  // for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(randomThoughts),
    });
  // }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomReaction , getRandomThought };
