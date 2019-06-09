import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

  import { HomeComponent } from '../home/home.component';
  import { PageNotFoundComponent }  from '../home/pageNotFound.component';
  import { PublicationComponent } from  '../publication/publication.component';
  import { PublicationListComponent } from '../publication/publicationList.component';
 // import { BlogDetailComponent } from '../blogDetail/blog-detail.component';
 // import { ShopComponent }  from '../shop/shop.component';
 // import { ProductDetailComponent } from '../productDetail/product-detail.component';
// import { CartComponent } from '../cart/cart.component';

@NgModule({
    imports: [
        RouterModule.forRoot([ 
         //   { path: 'home', component: HomeComponent },
           { path: 'publications', component: PublicationComponent },
           { path: 'publications', component: PublicationListComponent },
          //  { path: '',  pathMatch: 'full' , component: HomeComponent },
       
            // { path: 'cart', component: CartComponent },
         //  { path: 'product/:id', component: ProductDetailComponent },
            // { path: 'shop', component: ShopComponent },
            // { path: 'post/:id', component: BlogDetailComponent },
           { path: '' , component: HomeComponent},  //  
             { path: '**', component: PageNotFoundComponent },
      //    { path: '**' , component: ErrorComponent }
        ])    
    ],
    exports: [
        RouterModule
    ],
    declarations: [
 // BlogDetailComponent,
        // ProductDetailComponent
    ]
})
export class AppRoutingModule {}

