import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'publication-count',
    templateUrl: 'app//publication/publicationCount.component.html',
    styleUrls: ['app/publication/publicationCount.component.css']
})
export class PublicationCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();


  // @HTMLOutputElement()
  // countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number; 

    @Input()
    male: number; 

    @Input()
    female: number; 

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}
