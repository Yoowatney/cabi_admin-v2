import { LentInfoDto } from '../dto/lent-info.dto';

export abstract class ILentRepository {
  /**
   * 대여 사물함 정보 (lent id, cabinet id, user id, 빌린 시간, 만료 시간, 연장 여부, 인트라 아이디) 를 가져옵니다.
   *
   * @returns LentInfoDto[]
   */
  abstract findAll(): Promise<LentInfoDto[]>;
}
