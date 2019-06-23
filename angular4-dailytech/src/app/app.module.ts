import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  { ChildComponent } from './child.component';
import { MultiplierPipe } from './multiplier.pipe';
import { AppComponent }  from './app.component';
import { Appblogs }  from './blogs.component';
import { AppCollection }  from './Collection.component';
import { PageNotFoundComponent } from './NotFound.component';
import { FormsModule } from '@angular/forms';
import { FormBlogComponent } from './form-blog.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [  
  { path: 'Blogs', component: Appblogs },
  { path: 'Collection', component: AppCollection },
  { path: 'Form', component: FormBlogComponent },
  { path: '', redirectTo:'',  pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, FormBlogComponent, MultiplierPipe, ChildComponent, Appblogs, AppCollection, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
