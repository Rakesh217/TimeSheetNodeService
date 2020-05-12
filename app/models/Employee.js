const mongoose = require('mongoose')


const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    phone: String,
    primaryEmail: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    secondaryEmail: String,
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    address: String,
    jobCode: String,
    jobTitle: String,
    endClient: String,
    startDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    endDate: {
        type: Date,
        default: (new Date()).getTime()
    },
    vendorName: String,
    projectId: String,
    projectName: String,
    managerName: String,
    approverName: String,
    createdAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    updatedAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    loginAttempts: {
        type: Number,
        default: 0,
        select: false
    },
    blockExpires: {
        type: Date,
        default: Date.now,
        select: false
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Employee', EmployeeSchema)