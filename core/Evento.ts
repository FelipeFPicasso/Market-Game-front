export default class Evento {
    id: number | null;
    name: string;
    price: string;
    status: string;
    constructor(id: number | null, name: string, price: string, status: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = status;
    }
}