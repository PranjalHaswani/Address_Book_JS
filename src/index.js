
const AddressBook = require('./service/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Pranjal", "Haswani", "Bhopal", "India", "In", "10001", "1345678654", "pranjalhaswani00@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
