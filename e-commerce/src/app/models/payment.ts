import { PaymentMethods } from '../enums/payment-methods.enum';
import { User } from './user';

export class Payment {
    id: number;
    client: User;
    date: Date;
    amount: number;
    paymentMethod: PaymentMethods;
    invoiceId: number;
}