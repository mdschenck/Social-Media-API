const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); //**WAS ASSIGNMENT??? **

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
      text: String,
      username: String,
      // reactions: [{ type: Schema.Types.ReactionID, ref: "text"}],
      required: true,
      max_length: 250,
    },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
