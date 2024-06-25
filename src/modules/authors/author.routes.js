import { Router } from "express";
import * as AC from "./author.controller.js";

const router = Router();

router.post("/", AC.addAuthor);
router.get("/", AC.retrieveAuthor);
router.get("/:id", AC.singleAuthor);
router.patch("/", AC.updateAuthor);
router.delete("/:id", AC.deleteAuthor);
router.get("/getAuthors", AC.getAuthors);
router.get("/authorWithBook", AC.authorWithBook);

export default router;
