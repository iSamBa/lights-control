const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scene = new Schema({
  name: String,
  type: String,
});

export default mongoose.model("scene", scene);