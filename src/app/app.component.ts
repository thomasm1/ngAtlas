import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                    <h2>Welcome to {{ title }}</h2>
                    <h3> Table by .. {{ getFullName() }} </h3>
                    <h3> {{ pageHeader }} </h3>
                   Name: <input [(ngModel)]='name'/>
<br />
You entered : {{name}}<br />
                    <my-employee></my-employee><br />
                    <list-employee></list-employee>

                   
                </div>`
})  
    /*
                     <img [src]='https://s3.amazonaws.com/tmm-nov/img/{{imagePath}}'/>
                    <button [disabled]='isDisabled'  style='color:red' [ngStyle]='addStyles()' on-click='onClick()'>Details 0</button>
                    <button [disabled]='isDisabled'  class="colorClass" [ngClass]='addClasses()' on-click='onClick()'>Details 1</button>
                    <button disabled='{{isDisabled}}  class="colorClass italicsClass boldClass" [class.boldClass]='applyBoldClass' on-click='onClick()'>Details 2</button>
                    <button bind-disabled='isDisabled'  class="colorClass" [class]='classesToApply' on-click='onClick()'>Details 3</button>
                    */
export class AppComponent {
    title = 'TMM Angular2 - ASP.NET';
    pageHeader: string = "Employee Details";
 //   isDisabled: boolean = true;
//    imagePath: string = 'nasa/Broom_Pickering_milne_APODw600.jpg';
    firstName: string = "Tom";
    lastName: string = "Maestas";

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    };
/*
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    addStyles() {           // 0
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-size.px': this.fontSize
        }
        return styles;
    }
    addClasses() {              // 1
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    };

    applyBoldClass: boolean = true;        // 2
    applyItalicsClass: boolean = true;        // 2
    classesToApply: string = 'italicsClass boldClass';      // 3
    */
    onClick(): void {
        console.log('Button clicked');
    }
}
