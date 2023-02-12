import CSVModel from "./csvmodel.interface";

export default interface User extends CSVModel {

  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
