
const Contact = require('../model/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        const isDuplicate = this.contacts.filter(c => 
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        ).length > 0;

        if (isDuplicate) {
            throw new Error("Duplicate Contact! A person with the same name already exists.");
        }
        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }
    findContactByName(name) {
        return this.contacts.find(c => c.firstName.toLowerCase() === name.toLowerCase());
    }

    editContact(name, updatedDetails) {
        let contact = this.findContactByName(name);
        if (!contact) {
            throw new Error("Contact not found!");
        }

        Object.keys(updatedDetails).forEach(key => {
            if (updatedDetails[key]) {
                contact[key] = updatedDetails[key];
            }
        });

        return "Contact updated successfully!";
    } 
    deleteContact(name) {
        const index = this.contacts.findIndex(c => c.firstName.toLowerCase() === name.toLowerCase());
        if (index === -1) {
            throw new Error("Contact not found!");
        }
        this.contacts.splice(index, 1);
        return "Contact deleted successfully!";
    }
    countContacts() {
        return this.contacts.reduce((count) => count + 1, 0);
    }
    searchByCityOrState(location) {
        return this.contacts.filter(c => 
            c.city.toLowerCase() === location.toLowerCase() || 
            c.state.toLowerCase() === location.toLowerCase()
        );
    }

    viewPersonsByCityOrState() {
        return this.contacts.reduce((result, contact) => {
            if (!result[contact.city]) {
                result[contact.city] = [];
            }
            if (!result[contact.state]) {
                result[contact.state] = [];
            }
            result[contact.city].push(contact.firstName + " " + contact.lastName);
            result[contact.state].push(contact.firstName + " " + contact.lastName);
            return result;
        }, {});
    }

    countByCityOrState() {
        return this.contacts.reduce((countMap, contact) => {
            countMap.city[contact.city] = (countMap.city[contact.city] || 0) + 1;
            countMap.state[contact.state] = (countMap.state[contact.state] || 0) + 1;
            return countMap;
        }, { city: {}, state: {} });
    }
    sortContactsByName() {
        return this.contacts.sort((a, b) => {
            let nameA = a.firstName.toLowerCase();
            let nameB = b.firstName.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }
    sortContactsByName() {
        return this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
    sortContactsByCity() {
        return this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }
    sortContactsByState() {
        return this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }
    sortContactsByZip() {
        return this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    }
}

module.exports = AddressBook;