import { IEmployee } from '../IEmployee';
import { EEmployeeType } from '../enums/EEmployeeType';

export class Employee implements IEmployee {
  public hourlyRate: string;
  public type: EEmployeeType;

  constructor(){
  }

  getHourlyRate(){
    return this.hourlyRate;
  }
}