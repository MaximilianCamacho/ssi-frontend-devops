import { Material } from "./material.model";
import { Employee } from "./employee.model";

export class Assignment {
    id = 0;
    material: Material;
    employee: Employee;
    assignmentDate: Date;
    assignmentF: number;
    quantity = '';
    materialId = 0;
    employeeId = 0;
 }

