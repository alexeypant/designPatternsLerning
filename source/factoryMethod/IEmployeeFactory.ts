import { IEmployee } from './IEmployee';
import { EEmployeeType } from './EEmployeeType';

export interface IEmployeeFactory {
  createEmployee: (type: EEmployeeType) => IEmployee;
}