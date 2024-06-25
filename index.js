import express from "express";
import connectionDB from "./DB/connectionDB.js";
import bookRouter from "./src/modules/books/book.routes.js";
import authorRouter from "./src/modules/authors/author.routes.js";
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

connectionDB();

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.use("*", (req, res) => res.send("page not found!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
