import { Component } from '@angular/core';

@Component({
    selector: 'my-publication',
    templateUrl: 'app/publication/publication.component.html',
    styleUrls: ['app/publication/publication.component.css']
})


export class PublicationComponent {
    columnSpan: number = 2;
    title: string = 'Title1'; 
    id: number = 40;
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}