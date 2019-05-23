import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']

})

export class EmployeeListComponent {
    employees: any[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor() {
        this.employees = [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' }, 
        ];
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
            { code: 'emp104', name: 'Dd', gender: 'Female', annualSalary: 85000.55, dateOfBirth: '3/05/1999' },
            { code: 'emp105', name: 'Ee', gender: 'Male', annualSalary: 85000, dateOfBirth: '3/06/1997' },
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}