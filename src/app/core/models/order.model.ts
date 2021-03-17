
export class OrderModel {
    id: string;
    items: OrderItem[];
}

export class OrderItem {
    id: string;
    name: string;
    price: number;
    count: number;
}