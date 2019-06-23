import { Component } from '@angular/core';
import { IBlogs } from './blogs';
import { BlogService } from './blogs.service';  
import { ChildComponent } from './child.component';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [BlogService]
})

export class AppComponent  {   
  appStatusName: string = 'App-Status: ';
  appStatus: boolean = true;
  togBtn: string = 'Hide';
  newDate = new Date(2019, 3, 15);

  clicked() { 
    this.appStatus = (this.appStatus===true)? false:true; 
    this.togBtn= (this.appStatus===true)?'Hide':'Show';
  }
  newStatus: string = 'Good';


  appList: any[] = [
    {
    "ID":"1",
    "title":"One",
    "url":"//aws-sensor-temperature.s3.amazonaws.com/header-trans.png" 
  },
  {
    "ID":"2",
    "title":"Two",
    "url":"//s3.amazonaws.com/aws-sensor-temperature/header.png" 
  }
];

  iblogs: IBlogs[];
  constructor(private _iblogs: BlogService) {

  }

  ngOnInit() : void {
    this._iblogs.getblogs()
    .subscribe(iblogs => this.iblogs = iblogs);
  } 

}
