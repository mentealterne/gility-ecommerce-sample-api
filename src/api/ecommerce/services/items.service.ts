import { Inject, Injectable } from "@nestjs/common";
import { CsvService } from './csv.service';
import Item from '../interfaces/item.interface';

@Injectable()
export class ItemsService extends CsvService<Item> {
  constructor(
    @Inject('ITEMS_CSV_PATH') protected readonly csvFilePath: string,
  ) {
    super(csvFilePath);
  }
}
