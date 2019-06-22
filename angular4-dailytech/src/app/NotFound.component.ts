import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: '<h4></h4><br /> '
})

export class PageNotFoundComponent {
    constructor(private _router: Router) {}

    onBack(): void {
        this._router.navigate(['/']);
    }
    
}