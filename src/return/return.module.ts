import { Module } from '@nestjs/common';
import { RawqueryReturnRepository } from './repository/rawquery.return.repository';
import { IReturnRepository } from './repository/return.repository';
import { ReturnController } from './return.controller';
import { ReturnService } from './return.service';

const repo = {
  provide: IReturnRepository,
  useClass: RawqueryReturnRepository,
};

@Module({
  controllers: [ReturnController],
  providers: [ReturnService, repo],
})
export class ReturnModule {}
