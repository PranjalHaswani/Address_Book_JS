
const AddressBook = require('./service/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Pranjal", "Haswani", "Bhopal", "India", "In", "100001", "1345678654", "pranjalhaswani00@gmail.com"
    );
    console.log(addressBook.addContact(contact1));
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "Pra", "Haswani", "abcd", "Ind", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
