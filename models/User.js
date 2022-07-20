const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      // validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    profileImgUrl: {
      type: String,
      default: "https://picsum.photos/150/150/",
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
      friends:[
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
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

userSchema.virtual('friendCount').get(function(){return`${this.friends.length}`});

const User = model('user', userSchema);

module.exports = User;
