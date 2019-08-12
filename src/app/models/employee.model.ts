import { EmployeeType } from './employee-type.model';

export class Employee {
  id: number;
  ci: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  phone: number;
  address: string;
  salary: any;
  employeeTypeId: number;
  employeeType: EmployeeType;
  capacities = [];
  deleted = false;
}


export const gender = ['MALE', 'FEMALE'];
