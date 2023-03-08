import { Router } from "express";
import { createEmployee, deleteEmployee, getAll, getEmployee, updateEmployee } from "../controllers/empControllers.js";

const router = Router();

router.get('/', getAll);
router.post('/create', createEmployee);
router.get('/:empID', getEmployee);
router.patch('/update/:empID', updateEmployee);
router.delete('/:empID', deleteEmployee);

export default router;