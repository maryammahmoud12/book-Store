import { Router } from "express";
import * as BC from "./book.controller.js";

const router = Router();

router.post("/", BC.addBook);
router.get("/", BC.retrieveBook);
router.get("/:id", BC.singleBook);
router.patch("/", BC.updateBook);
router.delete("/:id", BC.deleteBook);
router.get("/getBooks", BC.getBooks);

export default router;
