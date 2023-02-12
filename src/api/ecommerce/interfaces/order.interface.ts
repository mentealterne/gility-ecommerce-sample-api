import User from "./user.interface";
import Item from "./item.interface";
import CSVModel from "./csvmodel.interface";

export interface Order extends CSVModel {

  user: User;
  item: Item;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}


