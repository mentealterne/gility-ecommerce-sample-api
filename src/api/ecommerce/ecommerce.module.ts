import { Module } from '@nestjs/common';
import { EcommerceController } from './ecommerce.controller';
import { CsvService } from './services/csv.service';
import { UsersService } from './services/users.service';
import { OrdersService } from './services/orders.service';
import { ItemsService } from './services/items.service';
import * as path from 'path';
@Module({
  controllers: [EcommerceController],
  providers: [
    {
      provide: 'ITEMS_CSV_PATH',
      useValue: path.resolve(__dirname, '../../data/items.csv'),
    },
    {
      provide: 'ORDERS_CSV_PATH',
      useValue: path.resolve(__dirname, '../../data/orders.csv'),
    },
    {
      provide: 'USERS_CSV_PATH',
      useValue: path.resolve(__dirname, '../../data/users.csv'),
    },
    UsersService,
    OrdersService,
    ItemsService,
  ],
})
export class EcommerceModule {}
