import { Employee } from './Employee';
import { EHourlyRate } from '../enums/EHourlyRate';

export class Contractor extends Employee{
  public hourlyRate: EHourlyRate;
  constructor(){
    super();
    this.hourlyRate = EHourlyRate.contractor;
  }

}