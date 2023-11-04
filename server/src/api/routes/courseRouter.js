import express from "express";
import {
  getCourseDetailsController,
  getCourseListController,
} from "../controllers/courseController.js";
const router = express.Router();

router.get("/course", getCourseListController);
router.post("/course", getCourseListController);
router.get("/course/:id", getCourseDetailsController);
export default router;
