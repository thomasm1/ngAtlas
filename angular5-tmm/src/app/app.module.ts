import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ListPersonsComponent } from './persons/list-persons.component';
import { CreatePersonComponent } from './persons/create-person.component';
import { PersonService } from './persons/person.service';

const tmRoutes: Routes = [
  { path: 'list', component: ListPersonsComponent},
  { path: 'create', component: CreatePersonComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent, 
    ListPersonsComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,  
    RouterModule.forRoot(tmRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
