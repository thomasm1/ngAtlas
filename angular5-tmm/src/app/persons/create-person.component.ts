import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tm-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  //contactType="email";
  //isActive=true
  constructor() { }

  ngOnInit() {
  }

  savePerson(personForm: NgForm): void {
    console.log(personForm.value);
  }
}
