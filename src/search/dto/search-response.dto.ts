import { LentByIntraDto } from './search-lent-by-intra.dto';
import { LentLogDto } from './search-lentlog.dto';

/**
  캐비넷 검색 정보를 나타내는 DTO입니다.
 */
export class SearchResponseDto {
  resultFromLent: LentByIntraDto[];
  resultFromLentLog: LentLogDto[];
}
