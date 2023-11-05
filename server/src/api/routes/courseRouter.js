import express from "express";
import {
  getCourseDetailsController,
  getCourseListController,
} from "../controllers/courseController.js";
const router = express.Router();

router.get("/courses", getCourseListController);
router.post("/courses", getCourseListController);
router.get("/courses/:courseId", getCourseDetailsController);
export default router;
