import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: '<hr><h4>Collection</h4><br /><a class="button" (click)="onBack()"><button>Back to Home</button></a><hr>'
})
export class AppCollection {
    constructor(private _router: Router) {}

    onBack(): void {
        this._router.navigate(['/']);
    }
=======

@Component ({
    selector: 'my-app',
    template: 'Collection'
})
export class AppCollection {
    
>>>>>>> 496332d5481317da8a80ec83e43fefa54127bf43
}