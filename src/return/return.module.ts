import { Module } from '@nestjs/common';
import { ReturnController } from './return.controller';

@Module({
  controllers: [ReturnController],
})
export class ReturnModule {}
