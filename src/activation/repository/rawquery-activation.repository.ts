import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IActivationRepository } from './IActivationRepository';
import * as mariadb from 'mariadb';
import { InactivatedCabinetDto } from '../dto/inactivated-cabinet.dto';
import { BanCabinetDto } from '../dto/ban-cabinet.dto';

export class RawqueryActivationRepository implements IActivationRepository {
  private pool;

  constructor(@Inject(ConfigService) private configService: ConfigService) {
    this.pool = mariadb.createPool({
      host: configService.get<string>('database.host'),
      user: configService.get<string>('database.username'),
      password: configService.get<string>('database.password'),
      database: configService.get<string>('database.database'),
      bigIntAsNumber: true,
    });
  }

  async findInactivate(): Promise<InactivatedCabinetDto[]> {
    const connection = await this.pool.getConnection();
    const content = `
        SELECT c.floor, c.cabinet_num, d.note
        FROM cabinet c
        JOIN disable d
        ON d.disable_cabinet_id = c.cabinet_id AND d.status = 1
        WHERE c.activation=0;
    `;
    const result = await connection.query(content);
    return result;
  }

  async findBan(): Promise<BanCabinetDto[]> {
    const connection = await this.pool.getConnection();
    const content = `
      SELECT c.floor, c.section, c.cabinet_num
      FROM cabinet c
      WHERE c.activation=2;
    `;
    const result = await connection.query(content);
    return result;
  }
}
