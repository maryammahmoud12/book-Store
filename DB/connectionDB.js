import mongoose from "mongoose";

const connectionDB = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/BookStore")
    .then(() => {
      console.log("data base connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectionDB;
