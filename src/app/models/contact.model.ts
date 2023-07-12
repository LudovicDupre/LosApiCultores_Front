export class Contact {
    id: number | undefined;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;

    constructor(firstName: string, lastName: string, email: string, phone: string, address: string, id?: number) {
        if (id) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.address = address;
        } else {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.address = address;
        }
    }

}