import { Category } from "./category.model";

export class Contact {
    id: number | undefined;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    category: Category;

    constructor(firstName: string, lastName: string, email: string, phone: string, address: string,  category: Category,id?: number ) {
        if (id) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.category = category;
        } else {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.category = category;

        }
    }

}