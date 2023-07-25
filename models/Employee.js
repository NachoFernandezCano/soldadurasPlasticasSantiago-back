const { model, Schema, default: mongoose } = require('mongoose');

const EmployeeSchema = new Schema({
    nameEmployee: {
        type: String
    },
    lastName: {
        type: String
    },
    salary: {
        type: Number
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
}, {
    versionKey: false
})

const Employee = model('Employee', EmployeeSchema);

module.exports = Employee;