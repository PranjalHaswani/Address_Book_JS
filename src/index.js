
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
    console.log("All Contacts Before editing", addressBook.getAllContacts());

    console.log(addressBook.editContact("Sunny", { address: "Rewa", city: "London", phone: "6024764565" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());

} catch (error) {
    console.error("Error:", error.message);
}
try {
    const invalidContact = new Contact(
        "Pra", "Haswani", "abcd", "Indi", "Chhat", "100101", "6323458452", "sanjayhaswani012@gmail.com"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
