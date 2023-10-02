// App will crash if the route does not have a matching function in the controller file! eg: createContact, getAllContacts, getOneContact, updateContact,deleteContact

const ContactController = require('../controllers/contact.controller');
// imports the controller 

module.exports = (app) => {
    // app is needed in the parantheses because it matches in the server.js as the server object!
    app.post('/api/contact/create', ContactController.createContact);
    app.get('/api/contacts/get', ContactController.getAllContacts);
    app.get('/api/contact/get/:id', ContactController.getOneContact);
    app.patch('/api/contact/edit/:id', ContactController.updateContact);
    app.delete('/api/contact/delete/:id', ContactController.deleteContact); 
}
// route paths need names that are detailed so that the app is scalable. If there is more than one form to post or get then separate paths are needed!

// These routes match the Axios call! These routes are for the API they do not match with the path for components to follow. This is just for the backend! DO not use these to view frontend page!

// this function includes: HTTP verb get, request route, and what the api is to do when that route is hit.

// SO saying contact.Controller.index is like saying to the route look in the contact controller and find the value that goes along with the index.
// Now execute that value... making it a function.