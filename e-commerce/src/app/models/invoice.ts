import { Payment } from './payment';
import { User } from './user';

export class Invoice {
    id: number;
    invoiceTotal: number;
    invoiceDate: Date;
    number: string;
    dueDate: Date;
    paymentDate: Date;
    client: User;
    payment: Payment;
}
