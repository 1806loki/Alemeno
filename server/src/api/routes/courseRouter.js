import express from "express";
import { getCourseListController } from "../controllers/courseListController.js";
const router = express.Router();

router.get("/course", getCourseListController);
router.post("/course", getCourseListController);

export default router;
