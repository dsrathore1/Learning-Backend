const mongoose = require('mongoose');

//* Defining Schema
const officeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    salary: { type: mongoose.Decimal128, required: true, validate: (v) => { (v) >= 3000.32 } },
    hobbies: { type: Array },    
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
});

//! Compiling Schema and creating collections
const officeModel = mongoose.model('employee', officeSchema);

//! Create Documents for the model
const createDoc = async (name, age, salary, hobbies, isActive, comments) => {
    try {
        //* Pre-define the values
        // const officeDoc = new officeModel({
        //     name: "Raman",
        //     age: 19,
        //     salary: 2243.89,
        //     hobbies: ['dancing', 'playing', 'singing'],
        //     isActive: true,
        //     comments: [{ value: "I am also learning mongodb" }],
        // });

        //* Taking input via function
        const officeDoc = new officeModel({
            name:name,
            age:age,
            salary:salary,
            hobbies:hobbies,
            isActive:isActive,
            comments:comments
        });

        //! Saving Document
        const result = await officeDoc.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const createMultiDoc = async () => {
    try {
        //* Create Multiple documents
        const rahulDoc = new officeModel({
            name: 'Rahul',
            age: 34,
            salary: 2323.53,
            hobbies: ['coding', 'writing'],
            isActive: false,
            comments: [{ value: "I love coding" }]
        });
        const kaluDoc = new officeModel({
            name: 'Kalu',
            age: 19,
            salary: 2323.53,
            hobbies: ['coding', 'writing'],
            isActive: false,
            comments: [{ value: "I love coding" }]
        });
        const jenishDoc = new officeModel({
            name: 'Jenish',
            age: 32,
            salary: 2323.53,
            hobbies: ['coding', 'writing'],
            isActive: false,
            comments: [{ value: "I love coding" }]
        });
        
        //!Save Many documents 
        const result = await officeModel.insertMany([rahulDoc, kaluDoc, jenishDoc]);
        console.log(result);

    } catch (error) {
        console.log(error)
    }
}

module.exports = createDoc, createMultiDoc