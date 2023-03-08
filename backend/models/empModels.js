import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [40, 'Name must not exceed 40 characters']
    },
    empID: {
        type: Number,
        required: [true, 'ID is required'],
        unique: [true, 'ID already exists']
    },
    designation: {
        type: String,
        required: [true, 'Designation is required']
    },
    empType: {
        type: String,
        enum: ["Full Time", "Part Time", "Contract Basis", "Other"],
        required: [true, 'Employee Type is required']
    },
    exp: {
        type: String,
        required: [true, 'Experience is required']
    }
})

export default mongoose.model('Employee', employeeSchema);