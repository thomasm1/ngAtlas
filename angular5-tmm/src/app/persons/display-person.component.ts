import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'tm-display-person',
  templateUrl: './display-person.component.html',
  styleUrls: ['./display-person.component.css']
})
export class DisplayPersonComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
