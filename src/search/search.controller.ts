import { Controller, Get, Logger, ParseIntPipe, Query } from '@nestjs/common';
import { QueryDto } from './dto/search-query.dto';
import { SearchResponseDto } from './dto/search-response.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  private logger = new Logger(SearchController.name);

  constructor(private searchService: SearchService) {}
  @Get('/')
  async getSearch(@Query() queryDto: QueryDto): Promise<SearchResponseDto> {
    this.logger.log('call getSearch()');
    let resultFromLent;
    let resultFromLentLog;
    if (queryDto.intraId) {
      [resultFromLent, resultFromLentLog] = await Promise.all([
        this.searchService.getLentByIntraId(queryDto.intraId),
        this.searchService.getLentLogByIntraId(queryDto.intraId),
      ]);
    } else if (queryDto.cabinetNum && queryDto.floor) {
      [resultFromLent, resultFromLentLog] = await Promise.all([
        this.searchService.getLentByCabinetNum(
          queryDto.cabinetNum,
          queryDto.floor,
        ),
        this.searchService.getLentLogByCabinetNum(
          queryDto.cabinetNum,
          queryDto.floor,
        ),
      ]);
    }
    const result = { resultFromLent, resultFromLentLog };
    return result;
  }
}
