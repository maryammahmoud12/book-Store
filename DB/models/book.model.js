import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

import { type } from "os";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

bookSchema.plugin(mongoosePaginate);

const bookModel = new model("book", bookSchema);

export default bookModel;
