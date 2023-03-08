import e from 'express';
import Employee from '../models/empModels.js'

export const createEmployee = async(req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getAll = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getEmployee = async(req, res) => {
    const {empID} = req.params;

    try {
        const employee = await Employee.findOne({empID});
    
        if (!employee) {
          return res.status(404).send('Employee does not exist');
        }
        return res.status(200).json(employee);
        
      } catch (error) {
        return res.status(500).send({message: error.message});
      }
}

export const updateEmployee = async(req, res) => {

    const {empID} = req.params;
    const {designation, empType, exp} = req.body;

    try {
        const employee = await Employee.findOneAndUpdate({empID}, {
            designation, 
            empType, 
            exp
        },
          { 
            new: true 
        })
        if (!employee) {
            return res.status(404).send('Employee does not exist');
          }
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

export const deleteEmployee = async(req, res) => {
    const {empID} = req.params;

    try {
        const employee = await Employee.findOneAndDelete({empID});
        if (!employee) {
            return res.status(404).send('Employee does not exist');
          }
        return res.status(200).send(`Employee with empID: ${empID} deleted successfully`);

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}