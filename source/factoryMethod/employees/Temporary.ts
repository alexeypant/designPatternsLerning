import { Employee } from './Employee';
import { EHourlyRate } from '../enums/EHourlyRate';

export class Temporary extends Employee{
  public hourlyRate: EHourlyRate;
  constructor(){
    super();
    this.hourlyRate = EHourlyRate.temporary;
  }
}