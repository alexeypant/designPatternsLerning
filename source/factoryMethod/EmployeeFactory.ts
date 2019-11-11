import { IEmployeeFactory } from './IEmployeeFactory';
import { FullTime } from './employees/FullTime';
import { PartTime } from './employees/PartTime';
import { Temporary } from './employees/Temporary';
import { Contractor } from './employees/Contractor';
import { EEmployeeType } from './enums/EEmployeeType';


const employeeMap = {
  [EEmployeeType.fullTime]: FullTime,
  [EEmployeeType.partTime]: PartTime,
  [EEmployeeType.temporary]: Temporary,
  [EEmployeeType.contractor]: Contractor,

};

export class EmployeeFactory implements IEmployeeFactory{
  createEmployee(type: EEmployeeType){
    const employee = new employeeMap[type]();
    employee.type = type;
    return employee;
  }
}