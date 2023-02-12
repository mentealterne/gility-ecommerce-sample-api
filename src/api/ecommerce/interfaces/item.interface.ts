import CSVModel from './csvmodel.interface';

export default interface Item extends CSVModel {
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  available: boolean;
  leftInStock: number;
}
