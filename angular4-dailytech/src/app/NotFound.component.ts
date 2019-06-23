import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: '<hr><div><h2 style="color:red">Oops...404, page not found</h2></div><a class="button" (click)="onBack()"><button>Back to Home</button></a><hr>'
})

export class PageNotFoundComponent {
    constructor(private _router: Router) {}

    onBack(): void {
        this._router.navigate(['/']);
    }
    
}