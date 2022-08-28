import { BanCabinetDto } from './ban-cabinet.dto';

/**
 * 영구정지 사물함 리스트를 반환해주는 DTO입니다.
 */
export class BanCabinetResponseDto {
  cabinetList: BanCabinetDto[];
}
