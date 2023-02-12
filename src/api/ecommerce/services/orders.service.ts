import { Inject, Injectable } from '@nestjs/common';
import { CsvService } from './csv.service';
import { Order } from '../interfaces/order.interface';
import { ItemsService } from './items.service';
import { UsersService } from './users.service';

@Injectable()
export class OrdersService extends CsvService<Order> {
  constructor(
    @Inject('ORDERS_CSV_PATH') protected readonly csvFilePath: string,
    private readonly usersService: UsersService,
    private readonly itemsService: ItemsService,
  ) {
    super(csvFilePath);
  }

  findAll(): Order[] {
    const orders = super.findAll();
    return orders.map((order) => {
      const user = this.usersService.findOne(order.user as unknown as number);
      const item = this.itemsService.findOne(order.item as unknown as number);
      return {
        ...order,
        user,
        item,
      };
    });
  }

  findOne(id: number): Order {
    const order = super.findOne(id);
    const user = this.usersService.findOne(order.user as unknown as number);
    const item = this.itemsService.findOne(order.item as unknown as number);
    return {
      ...order,
      user,
      item,
    };
  }
}
