
const Contact = require('../model/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Duplicate Contact! Phone number or Email exists already.");
        }
        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }
}

module.exports = AddressBook;