import { Router } from "express";
import { PeopleController } from "../controllers/people/";

export const peopleRouter: Router = Router();
peopleRouter.get("/", PeopleController.getAll);
peopleRouter.post("/", PeopleController.create);