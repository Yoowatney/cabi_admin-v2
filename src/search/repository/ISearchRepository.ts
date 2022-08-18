import { LentByCabiDto } from '../dto/search-lent-by-cabi.dto';
import { LentByIntraDto } from '../dto/search-lent-by-intra.dto';
import { LentLogDto } from '../dto/search-lentlog.dto';

export abstract class ISearchRepository {
  /**
   * intra_id 기준 lent 검색 정보를 가져옵니다.
   *
   * @returns LentByIntraDto[]
   */

  abstract getLentByIntraId(intraId: string): Promise<LentByIntraDto[]>;

  /**
   * intra_id 기준 lent_log 검색 정보를 가져옵니다.
   *
   * @returns LentLogDto[]
   */
  abstract getLentLogByIntraId(intraId: string): Promise<LentLogDto[]>;

  /**
   * cabinet_num 기준 lent 검색 정보를 가져옵니다.
   *
   * @returns LentByCabiDto[]
   */
  abstract getLentByCabinetNum(
    cabinetNum: number,
    floor: number,
  ): Promise<LentByCabiDto[]>;

  /**
   * cabinet_num 기준 lent_log 검색 정보를 가져옵니다.
   *
   * @returns LentLogDto[]
   */
  abstract getLentLogByCabinetNum(
    cabinetNum: number,
    floor: number,
  ): Promise<LentLogDto[]>;
}
