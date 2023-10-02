const Contact = require('../models/contactModel');
// const contact: the contact model from contactSchema! the word Schema is not used here, but contact is the same as contactSchema from contact.model.js
// this imports contact.model file and it's logic to specified variable


module.exports = {
    // export an object with methods for CRUD that affects the contact collection/db
    
        // CRUD!
        // CREATE
        createContact: (req, res) => {
            console.log(req.body)
            Contact.create(req.body)
            // contact is the model or contact Schema
                .then(contact => res.json(contact))
                .catch(err => res.json(err));
        },
        // READ ALL
        // Mongoose method find()
        getAllContacts: (req, res) => {
            Contact.find({})
            // This is an empty object {} that is a query paramater to fetch all documents in the contact collection
                .then(allContacts => {
                    console.log(allContacts);
                    res.json(allContacts);
                })
                // allContacts must match from .then(allContacts
                // console.log(allContacts)
                // to res.json(allContacts)
                //  When the database query is successful, the method executes the then callback function. It receives an array of allContacts as a parameter. 
                // the console logs the allContacts array for debugging
                // the array is then sent as a JSON response
                .catch(err => {
                    console.log("getAllContacts Error!", err)
                    res.json(err)
                });
        },
        // READ ONE
        getOneContact: (req, res) => {
            Contact.findById(req.params.id)
                .then(oneContact => res.json(oneContact))
                .catch(err => res.json(err));
        },
        // UPDATE
        updateContact: (req, res) => {
            Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            // new: true will return the new document instead of the old one.
                .then(updatedContact => res.json(updatedContact))
                .catch(err => res.json(err));
        },
        // DELETE
        deleteContact: (req, res) => {
            console.log("req, params", req.params.id)
            Contact.findByIdAndDelete(req.params.id)
                .then(result => res.json(result))
                .catch(err => {console.log(err); res.json(err)});
        }
    }