import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appblogs }  from './blogs.component';
import { AppCollection }  from './Collection.component';
import { PageNotFoundComponent } from './NotFound.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  { path: 'Blogs', component: Appblogs },
  { path: 'Collection', component: AppCollection },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, Appblogs, AppCollection, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
