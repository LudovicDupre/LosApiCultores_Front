export class Category {
    id!: number;
    name: string;

    constructor(name: string, id?: number) {
        if (id) {
            this.name = name;
            this.id = id;
        } else {
            this.name = name;
        }
    }
}