import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  //selector: 'tm-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
  persons: Person[] = [
    {
      id: 1,
      name: 'Tom', 
      email: 'thomasm1.maestas@gmail.com',
      phone: 5055087707, 
      contactType: 'email',
      acquaintance: 'string',
      dateOfBirth: new Date('9/3/2020'), 
      isActive: true,
      photoPath: 'assets/images/a.png'
    },
    {
      id: 2,
      name: 'Thomas', 
      email: 'thomas@gmail.com',
      phone: 5055087707, 
      contactType: 'phone',
      acquaintance: 'string',
      dateOfBirth: new Date('9/3/1976'), 
      isActive: true,
      photoPath: 'assets/images/d.png'
    },
    {
      id: 3,
      name: 'Milton', 
      email: 'milton@gmail.com',
      phone: 5055087707, 
      contactType: 'email',
      acquaintance: 'string',
      dateOfBirth: new Date('9/3/2000'), 
      isActive: false,
      photoPath: 'assets/images/s.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
