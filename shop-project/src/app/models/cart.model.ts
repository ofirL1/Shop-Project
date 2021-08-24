import { UserModel } from "./user.model";

export class CartModel {
    public _id: string;
    public customerId: UserModel;
    public createDate: Date;
}
