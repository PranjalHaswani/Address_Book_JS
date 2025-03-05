
const AddressBook = require('./service/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Pranjal", "Haswani", "Bhopal", "India", "Chhatisgarh", "100001", "9345678654", "pranjalhaswani00@gmail.com"
    );
    console.log(addressBook.addContact(contact1));
    const contact2 = new Contact(
        "Sunny","Haswani","Bhopal","India", "Chhatisgarh", "100001", "6234567801","sunnyhaswani00@gmail.com");
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}
try {
    const invalidContact = new Contact(
        "Pra", "Haswani", "abcd", "Indi", "Chhat", "100101", "6323458452", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
