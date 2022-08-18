import { InactivatedCabinetDto } from '../dto/inactivated-cabinet.dto';

export abstract class IActivationRepository {
  /**
   * 사용불가 사물함 리스트를 가져옵니다.
   * @returns InactivateCabinetDto[]
   */
  abstract findInactivate(): Promise<InactivatedCabinetDto[]>;
}
