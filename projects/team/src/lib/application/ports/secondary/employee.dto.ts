import { Url } from "url";
import { DepartmentDTO } from "./department.dto";

export interface EmployeeDTO {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imgUrl: string;
  readonly department: DepartmentDTO;
  readonly order?: number;
}
