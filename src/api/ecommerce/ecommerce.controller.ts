import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ItemsService } from './services/items.service';
import { OrdersService } from './services/orders.service';

type DataType = 'users' | 'items' | 'orders';
@Controller('ecommerce')
export class EcommerceController {
  constructor(
    private readonly userService: UsersService,
    private readonly itemsService: ItemsService,
    private readonly ordersService: OrdersService,
  ) {}

  @Get('/list/:type')
  list(@Param('type') type: DataType) {
    switch (type) {
      case 'users':
        return this.userService.findAll();
      case 'items':
        return this.itemsService.findAll();
      case 'orders':
        return this.ordersService.findAll();
      default:
        return 'Invalid type';
    }
  }
  @Get(':type/:id')
  getOne(@Param('type') type: DataType, @Param('id') id: number) {
    switch (type) {
      case 'users':
        return this.userService.findOne(id);
      case 'items':
        return this.itemsService.findOne(id);
      case 'orders':
        return this.ordersService.findOne(id);
      default:
        return 'Invalid type';
    }
  }
}
