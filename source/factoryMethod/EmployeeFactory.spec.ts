import * as assert from "assert";
import { EmployeeFactory } from './EmployeeFactory';
import { EHourlyRate } from './enums/EHourlyRate';
import { EEmployeeType } from './enums/EEmployeeType';



describe('factory method', () => {
  it('should create different types of employees', () => {
    const employeeFactory = new EmployeeFactory();
    const fullTimeEmployee = employeeFactory.createEmployee(EEmployeeType.fullTime);
    const partTimeEmployee = employeeFactory.createEmployee(EEmployeeType.partTime);
    const temporaryEmployee = employeeFactory.createEmployee(EEmployeeType.temporary);
    const contractorEmployee = employeeFactory.createEmployee(EEmployeeType.contractor);

    assert.strictEqual(fullTimeEmployee.getHourlyRate(), EHourlyRate.fullTime);
    assert.strictEqual(partTimeEmployee.getHourlyRate(), EHourlyRate.partTime);
    assert.strictEqual(temporaryEmployee.getHourlyRate(), EHourlyRate.temporary);
    assert.strictEqual(contractorEmployee.getHourlyRate(), EHourlyRate.contractor);

  });
});

