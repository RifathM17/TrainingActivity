class Contact {
    constructor(id, name, phone) {
        this.id = id
        this.name = name
        this.phone = phone
    }
}
class PhoneBook {
    constructor() {
        this.contacts = []
    }
    addContact(contact) {
        this.contacts.push(contact)
        console.log(this.contacts);
    }
    deleteContact(id) {
        let foundIndex = undefined
        for (let i = 0; i < contacts.length; i++) {
            if (this.contacts[i] == contact) {
                foundIndex = i;
                break;
            }
            if (foundIndex != undefined) {
                this.contacts.splice(foundIndex, 1);
                alert('Task Deleted!!')
                console.log(this.contacts);
            }
        }

        updateContact(contact){
            foundIndex = this.contacts.findIndex(con => con.id == contact.id)
            contact = this.contacts[foundIndex]
            console.log(this.contacts);
        }
        getAllContacts(){
            return this.contacts
        }
        getContactById(id){
            return this.contacts.find(con => con.id == id)
        }
    }
}
const con1 = new Contact(1, 'Rifath', '6753378')
const phone = new PhoneBook()
phone.addContact('Rifath')
phone.addContact('Alex')
phone.deleteContact('2')
phone.updateContact('Rifath')
phone.getAllContacts()
