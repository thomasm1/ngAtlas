import { Component } from '@angular/core';

@Component ({ 
    selector: 'child-app',
    template: '<hr><div> {{ values }} </div><hr>'
})

export class ChildComponent {
    values = '';
    ngOnInit() {
        this.values = "I'm a child component !";
    }
}