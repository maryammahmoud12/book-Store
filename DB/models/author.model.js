import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { type } from "os";

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
  },

  birthDate: {
    type: Date,
  },

  books: {
    type: Schema.Types.ObjectId,
    ref: "book",
  },
});

authorSchema.plugin(mongoosePaginate);
const authorModel = new model("author", authorSchema);

export default authorModel;
