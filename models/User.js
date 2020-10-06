const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    githubId: String,
    username: String,
    login: String,
    avatar_url: String,
    html_url: String,
    displayName: String,
    company: String,
    blog: String,
    location: String,
    created_at: Date,
    // chats: [
    //   { type: Schema.Types.ObjectId, ref: "User" },
    // ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;