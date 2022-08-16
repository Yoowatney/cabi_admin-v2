import { CabinetFloorDto } from '../dto/cabinet-floor.dto';
import { ICabinetRepository } from './ICabinetRepository';
import * as mariadb from 'mariadb';

export class RawqueryCabinetRepository implements ICabinetRepository {
  private pool;

  constructor() {
    this.pool = mariadb.createPool({
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: '42cabi_test',
      bigIntAsNumber: true,
    });
  }

  async findAll(): Promise<CabinetFloorDto[]> {
    const connection = await this.pool.getConnection();
    const content = `
      SELECT c.floor,
      COUNT(*) as total,
      COUNT(case when c.cabinet_id=l.lent_cabinet_id and l.expire_time>=DATE_FORMAT(NOW(), '%Y-%m-%d') then 1 end) as used,
      COUNT(case when l.expire_time<DATE_FORMAT(NOW(), '%Y-%m-%d') then 1 end) as overdue,
      COUNT(case when l.lent_cabinet_id is null and c.activation=1 then 1 end) as unused,
      COUNT(case when c.activation!=1 then 1 end) as disabled
      FROM cabinet c
      LEFT JOIN lent l
      ON c.cabinet_id=l.lent_cabinet_id
      group by floor;
    `;
    const result = await connection.query(content);
    return result;
  }
}
