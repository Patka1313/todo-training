import { Url } from "url";

export interface EmployeeDTO {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imgUrl: string;
  readonly department: 'DepartmentDTO';
}
