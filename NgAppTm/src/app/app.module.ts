import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
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

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'publications', component: PublicationListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [SimpleComponent, AppComponent, PublicationComponent, PublicationListComponent, PublicationCountComponent, HomeComponent, BlogComponent, BlogListComponent, PageNotFoundComponent ],    // , PublicationTitlePipe
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
