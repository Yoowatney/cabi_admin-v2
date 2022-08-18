import { Controller, Get, Logger, ParseIntPipe, Query } from '@nestjs/common';
import { SearchResponseDto } from './dto/search-response.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  private logger = new Logger(SearchController.name);

  constructor(private searchService: SearchService) {}
  @Get('/')
  async getSearch(
    @Query('intraId') intraId: string,
    @Query('cabinetNum', ParseIntPipe) cabinetNum: number,
    @Query('floor', ParseIntPipe) floor: number,
  ): Promise<SearchResponseDto> {
    this.logger.log('call getSearch()');
    let resultFromLent;
    let resultFromLentLog;
    if (intraId) {
      [resultFromLent, resultFromLentLog] = await Promise.all([
        this.searchService.getLentByIntraId(intraId),
        this.searchService.getLentLogByIntraId(intraId),
      ]);
    } else if (cabinetNum && floor) {
      [resultFromLent, resultFromLentLog] = await Promise.all([
        this.searchService.getLentByCabinetNum(cabinetNum, floor),
        this.searchService.getLentLogByCabinetNum(cabinetNum, floor),
      ]);
    }
    const result = { resultFromLent, resultFromLentLog };
    return result;
  }
}
