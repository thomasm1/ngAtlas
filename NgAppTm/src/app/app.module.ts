import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


import { NavComponent } from './shared/navbar.component';
import { AppRoutingModule } from './shared/app.routing';

import { AppComponent } from './app.component';
import { PublicationComponent } from  './publication/publication.component';
import { PublicationListComponent } from './publication/publicationList.component';
// import { PublicationTitlePipe }  from './publication/publication.Title.pipe';
import { PublicationCountComponent } from './publication/PublicationCount.component';
import { SimpleComponent } from './utils/simple.component';
import { HomeComponent } from './home/home.component'; 
import { PageNotFoundComponent } from './home/pageNotFound.component';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blogList.component';


@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        AppRoutingModule, 
        RouterModule ], // .forRoot(appRoutes)
    declarations: [   
        NavComponent, 
        SimpleComponent, 
        AppComponent, 
        PublicationComponent, 
        PublicationListComponent, 
        PublicationCountComponent, 
     HomeComponent, 
        BlogComponent, 
        BlogListComponent, 
        PageNotFoundComponent ], // , PublicationTitlePipe
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
