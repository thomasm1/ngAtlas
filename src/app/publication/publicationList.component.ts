import { Component, OnInit } from '@angular/core';
import { IPublication } from './publication';
import { PublicationService } from './publication.service';

@Component({
    selector: 'list-publication',
    templateUrl: 'app/publication/publicationList.component.html',
    styleUrls: ['app/publication/publicationList.component.css'],
    providers: [PublicationService]
})

export class PublicationListComponent implements OnInit {
    publications: IPublication[];
    selectedPublicationCountRadioButton: string = 'All';
 
    constructor(private _publicationService: PublicationService) {  
     //   this.publications = this._publicationService.getPublications();
    }

    ngOnInit() {
        this.publications = this._publicationService.getPublications();
    }
      /*
    constructor() {
      this.publications =
            [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' }, 
        ];
    }*/

    getTotalPublicationsCount(): number {
        return this.publications.length;
    }

    getTotalMalePublicationsCount(): number {
        return this.publications.filter(e => e.gender === "Male").length;
    }
    getTotalFemalePublicationsCount(): number {
        return this.publications.filter(e => e.gender === "Female").length;
    }

    onPublicationCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedPublicationCountRadioButton = selectedRadioButtonValue;
    }
    computeMonthlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
    getPublications(): void {
        this.publications = [
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000, dateOfBirth: '3/04/1977' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
            { code: 'emp104', name: 'Dd', gender: 'Female', annualSalary: 85000.55, dateOfBirth: '3/05/1999' },
            { code: 'emp105', name: 'Ee', gender: 'Male', annualSalary: 85000, dateOfBirth: '3/06/1997' },
        ];
    }

    trackByEmpCode(index: number, publication: any): string {
        return publication.code;
    }
}