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
      username: String,
      reactions: [{ type: Schema.Types.ReactionID, ref: "text"}],
      required: true,
      max_length: 2750,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
