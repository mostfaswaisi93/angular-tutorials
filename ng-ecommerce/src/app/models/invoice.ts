import { Payment } from './payment';
import { User } from './user';

export class Invoice {
  id: number;
  invoice_total: number;
  invoice_date: Date;
  number: string;
  due_date: Date;
  payment_date: Date;
  client: User;
  payment: Payment;
}
