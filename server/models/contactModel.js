const mongoose = require('mongoose');
// bring in middleware to create model/collection
const {isEmail} = require('validator'); 
// instead of bringing in everything from npm validator package - just bring in {isEmail}, then use it to validate the email key in Student Model //this creates a built-in REGEX email pattern validation 


// const email = 'test@example.com';
// if (isEmail(email)) {
//     console.log('Valid email');
// } else {
//     console.log('Invalid email');
// }

const ContactFeedbackSchema = new mongoose.Schema({
    // anytime the word new is used it is referring to a class
    firstName: {
        type: String,
        required: [true, "What's your name?"],
        minLength: [2, "Longer name please!"],
        maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
        type: String,
        required: [true, "What's your name?"],
        minLength: [2, "Longer name please!"],
        maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
        type: String,
        minLength: [8, 'Longer email please'],
        unique: [true, 'Email already exists'],
        required: [true, 'Do you have an email?'],
        validate: [isEmail, "Please enter a valid email"]
    },
    learn: {
        type: String,
        required: [true, 'What do you want to learn about?'],
        minLength: [3, 'More info please!'],
        maxlength: [1000, " Cannot exceed 1000 characters"],
    }
}, {timestamps: true} )

// Middleware:
// used to check functions befor entering in the database
// Since there is no login and reg, I decided to skip  those validations for now


module.exports = mongoose.model('ContactFeedback', ContactFeedbackSchema)


