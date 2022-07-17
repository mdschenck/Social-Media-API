const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); 

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
    },
    username: {
      type: String,
    },
    reactions: [
      { 
        type: Schema.Types.ObjectID, 
        ref: "Reaction",
        required: true,
        max_length: 250,
      }
    ],

    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
