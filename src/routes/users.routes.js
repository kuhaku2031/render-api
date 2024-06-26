import { Router } from "express";
import { getAllUsers, getPing } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getAllUsers);

router.get("/ping", getPing);

export default router;
