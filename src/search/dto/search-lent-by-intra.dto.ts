/**
 * Intra id기준 검색한 Lent 정보를 나타내는 DTO입니다.
 */
export class LentByIntraDto {
  intra_id: string;

  auth: number;

  cabinet_id: number;

  cabinet_num: number;

  location: string;

  section: string;

  floor: number;

  activation: number;

  lent_id: number;

  lent_time: Date;

  expire_time: Date;
}
