import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: '<hr><h4>Blogs</h4><br /><a class="button" (click)="onBack()"><button>Back to Home</button></a><hr>'
})
export class Appblogs {
    constructor(private _router: Router) {}

    onBack(): void {
        this._router.navigate(['/']);
    }

}