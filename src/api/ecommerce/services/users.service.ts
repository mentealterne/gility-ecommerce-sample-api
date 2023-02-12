import { Inject, Injectable } from "@nestjs/common";
import { CsvService } from './csv.service';
import User from '../interfaces/user.interface';

@Injectable()
export class UsersService extends CsvService<User> {
  constructor(@Inject('USERS_CSV_PATH') protected readonly csvFilePath: string) {
    super(csvFilePath);
  }
}
