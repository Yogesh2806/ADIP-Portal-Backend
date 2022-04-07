import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  guardian: String,
  contact: String,
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

