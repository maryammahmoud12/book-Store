import authorModel from "../../../DB/models/author.model.js";
import bookModel from "../../../DB/models/book.model.js";

// create a new author.
export const addAuthor = async (req, res, next) => {
  const { name, bio, birthDate, books } = req.body;

  const author = await authorModel.create({
    name,
    bio,
    birthDate,
    books,
  });
  return res.status(201).json({ msg: "done", author });
};

//  retrieve all authors

export const retrieveAuthor = async (req, res, next) => {
  const author = await authorModel.find();
  return res.status(201).json({ msg: "done", author });
};

// retrieve a single author by its ID.

export const singleAuthor = async (req, res, next) => {
  const { id } = req.params;
  const author = await authorModel.findById({ _id: id });
  return res.status(201).json({ msg: "done", author });
};

// update an author by its ID

export const updateAuthor = async (req, res, next) => {
  const { id, bio } = req.body;
  const author = await authorModel.findByIdAndUpdate(
    { _id: id },
    { bio },
    { new: true }
  );
  return res.status(201).json({ msg: "done", author });
};

// delete an author by its ID

export const deleteAuthor = async (req, res, next) => {
  const { id } = req.params;
  const author = await authorModel.findByIdAndDelete({ _id: id });
  return res.status(201).json({ msg: "done" });
};

// GET request to retrieve all authors with pagination and search
export const getAuthors = async (req, res, next) => {
  const { page = 1, limit = 10, name, bio } = req.query;
  const query = {};
  if (name) {
    query.name = new RegExp(name, "i");
  }
  if (bio) {
    query.bio = new RegExp(bio, "i");
  }
  const options = {
    page: Number(page),
    limit: Number(limit),
  };
  const author = await authorModel.paginate(query, options);
  return res.json(author);
};

// Add a relationship so that when retrieving an author, the response includes a list of books written by them

export const authorWithBook = async (req, res, next) => {
  const author = await authorModel.find({}).populate("books");
  return res.json({ msg: "done", author });
};
