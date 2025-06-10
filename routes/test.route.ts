import express from "express";
import { createTest, deletetest, getTests, updateTest } from "../controllers/test.controller";

const router = express.Router();

router.post('/', createTest);
router.get('/', getTests);
router.put('/:id', updateTest);
router.delete('/:id', deletetest);

export default router;