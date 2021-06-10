import { OrderStatus } from '../enums/order-status.enum';
import { OrderItem } from './order-item';
import { User } from './user';

export class Order {
  id: number;
  order_date: Date;
  shipmentDate: Date;
  comments: string;
  shippedTo: string;
  status: OrderStatus;
  user: User;
  order_items: OrderItem[];
  invoiceId: number;
}
