import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full Name is required'],
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [50, 'Name must not exceed 40 characters'],
  },
  initials: {
    type: String,
    required: [true, 'Name with intials are required'],
    minlength: [2, 'Must be at least 2 characters'],
    maxlength: [20, 'Must not exceed 20 characters'],
  },
  displayName: {
    type: String,
    required: [true, 'Display Name is required'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['Male', 'Female'],
  },
  dob: {
    type: Date,
    required: [true, 'Date of Birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
  },
  empType: {
    type: String,
    enum: ['Full Time', 'Part Time', 'Contract Basis', 'Other'],
    required: [true, 'Employee Type is required'],
  },
  joinedDate: {
    type: Date,
    required: [true, 'Joined Date is required'],
  },
  exp: {
    type: String,
    required: [true, 'Experience is required'],
  },
  salary: {
    type: Number,
    required: [true, 'Salary is required'],
  },
  note: {
    type: String,
  },
});

export default mongoose.model('Employee', employeeSchema);
