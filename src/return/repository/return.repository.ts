import { CabinetLentDto } from "../dto/cabinet-lent.dto";
import { CabinetDto } from "../dto/cabinet.dto";

export abstract class IReturnRepository {
  abstract getCabinet(cabinetIdx: number): Promise<CabinetDto>;

  abstract returnCabinet(cabinetIdx: number): Promise<boolean>;
}
