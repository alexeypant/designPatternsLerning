import { Employee } from './Employee';
import { EHourlyRate } from '../enums/EHourlyRate';

export class FullTime extends Employee{
  public hourlyRate: EHourlyRate;
  constructor(){
    super();
    this.hourlyRate = EHourlyRate.fullTime;
  }
}