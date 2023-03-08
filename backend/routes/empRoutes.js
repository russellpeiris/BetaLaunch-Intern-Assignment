import { Router } from 'express';
import {
  createEmployee, deleteEmployee, getAll, getEmployee, updateEmployee,
} from '../controllers/empControllers.js';

const router = Router();

router.get('/', getAll);
router.post('/create', createEmployee);
router.get('/:id', getEmployee);
router.patch('/update/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
