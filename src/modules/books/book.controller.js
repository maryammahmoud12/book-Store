import bookModel from "../../../DB/models/book.model.js";

// create a new book.
export const addBook = async (req, res, next) => {
  const { title, content, author, publishedDate } = req.body;

  const book = await bookModel.create({
    title,
    content,
    author,
    publishedDate,
  });
  return res.status(201).json({ msg: "done", book });
};

//  retrieve all books

export const retrieveBook = async (req, res, next) => {
  const book = await bookModel.find();
  return res.status(201).json({ msg: "done", book });
};

// retrieve a single book by its ID.

export const singleBook = async (req, res, next) => {
  const { id } = req.params;
  const book = await bookModel.findById({ _id: id });
  return res.status(201).json({ msg: "done", book });
};

// update a book by its ID

export const updateBook = async (req, res, next) => {
  const { id, title } = req.body;
  const book = await bookModel.findByIdAndUpdate(
    { _id: id },
    { title },
    { new: true }
  );
  return res.status(201).json({ msg: "done", book });
};

// delete a book by its ID

export const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  const book = await bookModel.findByIdAndDelete({ _id: id });
  return res.status(201).json({ msg: "done", book });
};

// GET request to retrieve all books with pagination and search
export const getBooks = async (req, res, next) => {
  const { page = 1, limit = 10, title, author } = req.query;
  const query = {};
  if (title) {
    query.title = new RegExp(title, "i");
  }
  if (author) {
    query.author = new RegExp(author, "i");
  }
  const options = {
    page: Number(page),
    limit: Number(limit),
  };
  const book = await bookModel.paginate(query, options);
  return res.json({ msg: "done ", book });
};
