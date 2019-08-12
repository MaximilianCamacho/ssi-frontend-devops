import { MaterialType } from './material-type.model';

export class Material {
  id: number;
  name: string;
  vidaUtil: number;
  matDescription: string;
  materialType: MaterialType;
  materialTypeId: number;
}

export class MaterialModel {
  id: number;
  name: string;
  vidaUtil: number;
  description: string;
  materialTypeId: number;
  matType: MaterialType;
  /*deleted = false;*/
}
