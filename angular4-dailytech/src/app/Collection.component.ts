import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: '<div class="pages"><hr><h2>Collection</h2><br /><a class="button" (click)="onBack()"><button>Back to Home</button></a><hr></div>'
})
export class AppCollection {
    constructor(private _router: Router) {}

    onBack(): void {
        this._router.navigate(['/']);
    }
}