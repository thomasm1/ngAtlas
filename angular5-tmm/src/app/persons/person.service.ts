import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable()
export class PersonService {
  private listPersons: Person[] = [
    {
      id: 1,
      name: 'Tom', 
      email: 'thomasm1.maestas@gmail.com',
      phone: 5055087707, 
      contactType: 'email',
      acquaintance: 'Tech Work',
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
      acquaintance: 'Pre College',
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
      acquaintance: 'College',
      dateOfBirth: new Date('9/3/2000'), 
      isActive: false,
      photoPath: 'assets/images/s.png'
    }
  ];

  getPersons(): Person[] {
    return this.listPersons;
  }
  save(person: Person) {
    this.listPersons.push(person);
  }
  constructor() { }

}
