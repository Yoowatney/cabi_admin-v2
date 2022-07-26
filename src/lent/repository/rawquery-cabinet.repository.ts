import { LentInfoDto } from '../dto/lent-info.dto';
import { ILentRepository } from './ILentRepository';
import * as mariadb from 'mariadb';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class RawqueryLentRepository implements ILentRepository {
  private pool;

  constructor(@Inject(ConfigService) private configService: ConfigService) {
    this.pool = mariadb.createPool({
      host: this.configService.get<string>('database.host'),
      user: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      bigIntAsNumber: true,
    });
  }

  async getLentInfo(): Promise<LentInfoDto[]> {
    const connection = await this.pool.getConnection();
    const lentInfo = [];

    const content = `SELECT u.intra_id, l.*
    FROM user u
    RIGHT JOIN lent l
    ON l.lent_user_id=u.user_id
    `;

    const lockerRentalUser = await connection.query(content);

    for (let i = 0; i < lockerRentalUser.length; i += 1) {
      lentInfo.push({
        lent_id: lockerRentalUser[i].lent_id,
        lent_cabinet_id: lockerRentalUser[i].lent_cabinet_id,
        lent_user_id: lockerRentalUser[i].lent_user_id,
        lent_time: lockerRentalUser[i].lent_time,
        expire_time: lockerRentalUser[i].expire_time,
        extension: lockerRentalUser[i].extension,
        intra_id: lockerRentalUser[i].intra_id,
      });
    }
    return lentInfo;
  }
}
