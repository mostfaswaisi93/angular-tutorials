import { OrderStatus } from '../enums/order-status.enum';
import { OrderItem } from './order-item';
import { User } from './user';

export class Order {
    id: number;
    orderDate: Date;
    shipmentDate: Date;
    comments: string;
    shippedTo: string;
    status: OrderStatus;
    user: User;
    orderItems: OrderItem[];
    invoiceId: number;
}
