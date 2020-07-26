import { Router } from "express";
import { ContactsController } from "../controllers/contacts";

export const contactsRouter: Router = Router();
// contactsRouter.get("/", ContactsController.search);
// contactsRouter.post("/", ContactsController.create);