import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CabinetModule } from './cabinet/cabinet.module';

@Module({
  imports: [CabinetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
