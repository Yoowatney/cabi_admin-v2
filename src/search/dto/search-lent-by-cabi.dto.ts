/**
 * cabinet num 기준 검색한 lent 정보를 나타내는 DTO입니다.
 */
export class LentByCabiDto {
  intra_id: string;

  cabinet_id: number;

  cabinet_num: string;

  location: string;

  section: string;

  floor: number;

  activation: string;

  lent_id: string;

  lent_time: Date;

  expire_time: Date;
}
