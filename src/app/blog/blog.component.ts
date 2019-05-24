import { Component } from '@angular/core';

@Component({
    selector: 'my-blog',
    templateUrl: 'app/blog/blog.component.html' 
})

export class BlogComponent {
    columnSpan: number = 2;
    title: string = 'Z--z';
    id: string = '1001';
    
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}