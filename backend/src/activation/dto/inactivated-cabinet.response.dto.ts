import { InactivatedCabinetDto } from './inactivated-cabinet.dto';

/**
 * 사용불가 사물함 리스트를 반환해주는 DTO입니다.
 */
export class InactivatedCabinetResponseDto {
  cabinetList: InactivatedCabinetDto[];
}
