const mongoose = require('mongoose');

//! Defining schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 5, max: 25 },
    studing: { type: Boolean },
    join: { type: Date, default: Date.now }
});

//!Compiling Schema 
const studentModel = new mongoose.model('student', studentSchema);

//! Creating a Docs
// const createDoc = async () => {
//     try {
//         const studentDoc = new studentModel({
//             name: "Rajesh",
//             age: 4,
//             studing: false
//         });
//         const result = await studentDoc.save();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };

//! Retrieve Doc
async function getAllDoc() {
    const rs = await studentModel.find()
    // const rs = await studentModel.find({}, 'name age');
    //! Include the data
    // const rs = await studentModel.find().select('name age'); //* Include the data in the form string
    // const rs = await studentModel.find().select(['name', 'age']); //* Include the data in the form array
    // const rs = await studentModel.find().select({name:1, age:1}); //* Include the data in the form object

    //! Exclude the data
    // const rs = await studentModel.find().select('-name -age'); //* Exclude the data in the form string
    // const rs = await studentModel.find().select(['-name', '-age']); //* Exclude the data in the form array
    // const rs = await studentModel.find().select({name:0, age:0}); //* Exclude the data in the form object

    
    console.log(rs);
    //     rs.forEach((items)=> {
    //         console.log(items.name, items.age);
    //     });
};

module.exports = getAllDoc;