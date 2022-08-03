import { Module } from "@nestjs/common";
import { CabinetController } from "./cabinet.controller";
import { CabinetService } from "./cabinet.service";
import { MemoryCabinetRepository } from "./repository/memory-cabinet-repository";
import { ICabinetRepository } from './repository/ICabinetRepository';

const repo = {
  provide: ICabinetRepository,
  useClass: MemoryCabinetRepository,
};

@Module({
  controllers: [CabinetController],
  providers: [CabinetService, repo],
})
export class CabinetModule {}