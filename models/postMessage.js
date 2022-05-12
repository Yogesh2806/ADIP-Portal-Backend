import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  guardian: { type: String, required: true },
  contact: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  realtionStatus: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  speakEnglish: { type: String, required: true },
  lang: { type: String, required: true },
  moreThanOnename: { type: String, required: true },
  citizen: { type: String, required: true },
  govScheme: { type: String, required: true },
  govPosition: { type: String, required: true },
  photo: { type: String, required: true },
  address: { type: String, required: true },
  identity: { type: String, required: true },
  income: { type: String, required: true },
  disability: { type: String, required: true },
  bank: { type: String, required: true },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
