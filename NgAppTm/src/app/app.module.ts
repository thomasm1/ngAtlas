import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { PublicationComponent } from  './publication/publication.component';
import { PublicationListComponent } from './publication/publicationList.component';
// import { PublicationTitlePipe }  from './publication/publication.Title.pipe';
import { PublicationCountComponent } from './publication/PublicationCount.component';
import { SimpleComponent } from './utils/simple.component';


import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blogList.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
    declarations: [SimpleComponent, AppComponent, PublicationComponent, PublicationListComponent, PublicationCountComponent, BlogComponent, BlogListComponent ],    // , PublicationTitlePipe
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
