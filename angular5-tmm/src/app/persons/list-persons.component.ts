import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonService } from './person.service';

@Component({
  // selector: 'tm-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
  persons: Person[];
  
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this.persons = this._personService.getPersons();
  }

}
