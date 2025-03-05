
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

    console.log(addressBook.deleteContact("Sunny"));
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());

    console.log("Total Contacts:", addressBook.countContacts());

    const duplicateContact=new Contact("Rimi", "Haswani", "Bhopal", "India", "Chhatisgarh", "100001", "9345678654", "pranjalhaswani00@gmail.com");
    console.log(addressBook.addContact(duplicateContact));

    console.log("Contacts in India:");
    console.log(addressBook.searchByCityOrState("India"));

    console.log("Viewing Persons by City or State:");
    console.log(addressBook.viewPersonsByCityOrState());

    console.log("Count of Contacts by City and State:");
    console.log(addressBook.countByCityOrState());

    console.log("\nContacts Sorted Alphabetically:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by Name:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by City:");
    console.log(addressBook.sortContactsByCity().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by State:");
    console.log(addressBook.sortContactsByState().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by Zip:");
    console.log(addressBook.sortContactsByZip().map(contact => contact.toString()).join("\n"));

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
