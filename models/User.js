const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    profileImgUrl: {
      type: Url,
      default: 1212122121,
    },
    joinDate: {
      type: Date,
    default: Date.now(),
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
