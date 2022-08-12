import { Module } from '@nestjs/common';
import { ActivationController } from './activation.controller';

@Module({
  controllers: [ActivationController],
})
export class ActivationModule {}
