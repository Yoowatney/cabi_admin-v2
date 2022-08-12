import { Controller, Get, Logger } from '@nestjs/common';

@Controller('search')
export class SearchController {
  private logger = new Logger(SearchController.name);

  @Get('/')
  async getSearch(): Promise<void> {
    this.logger.log('call getSearch()');
  }
}
