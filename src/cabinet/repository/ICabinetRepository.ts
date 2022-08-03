import { CabinetFloorDto } from '../dto/cabinet-floor.dto';

export abstract class ICabinetRepository {
  abstract findAll(): Promise<CabinetFloorDto[]>;
}
