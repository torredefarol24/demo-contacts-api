import { Router } from "express";
import { PeopleController } from "../controllers/people/";
import { ContactsController } from "../controllers/contacts";

export const peopleRouter: Router = Router();
peopleRouter.get("/", PeopleController.getAll);
peopleRouter.post("/", PeopleController.create);
peopleRouter.post("/:id/contacts", ContactsController.create);