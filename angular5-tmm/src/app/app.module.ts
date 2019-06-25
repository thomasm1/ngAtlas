import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ListPersonsComponent } from './persons/list-persons.component';
import { CreatePersonComponent } from './persons/create-person.component';
import { PersonService } from './persons/person.service';
import { DisplayPersonComponent } from './persons/display-person.component';
import { CreatePersonCanDeactivateGuardService } from './persons/create-person-can-deactivate-guard.service';
import { PersonDetailsComponent } from './persons/person-details.component';

const tmRoutes: Routes = [
  { path: 'list', component: ListPersonsComponent},

  { path: 'create', 
  component: CreatePersonComponent,
  canDeactivate: [CreatePersonCanDeactivateGuardService]},

  { path: 'persons/:id', 
  component: PersonDetailsComponent},
  
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent, 
    ListPersonsComponent,
    CreatePersonComponent,
    DisplayPersonComponent,
    PersonDetailsComponent
  ],
  imports: [ 
    BrowserModule, 
    FormsModule,  
    HttpClientModule,
    RouterModule.forRoot(tmRoutes)
  ],
  providers: [PersonService, CreatePersonCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
