import { Injectable } from '@nestjs/common';
import CSVModel from '../interfaces/csvmodel.interface';
import { parse } from 'papaparse';
import * as fs from 'fs';
@Injectable()
export class CsvService<T extends CSVModel> {
  protected data: T[] = [];
  constructor(protected readonly csvFilePath: string) {
    this.csvFilePath = csvFilePath;
    (async () => {
      await this.load();
    })();
  }
  async load(): Promise<void> {
    const csvData = await parse(fs.readFileSync(this.csvFilePath, 'utf8'), {
      header: true,
    });
    this.data = csvData.data;
  }

  findAll(): T[] {
    return this.data;
  }

  findOne(id: number): T {
    return this.data.find((item) => item.id === id);
  }
}
