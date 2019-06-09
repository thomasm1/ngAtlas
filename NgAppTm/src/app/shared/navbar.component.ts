import { Component } from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `<h4>Nav Bar</h4>
                <div class="top-bar">
                <!--       <div class="top-bar-title nav-menu"><a [routerLink]="['']">TMM</a></div>
                    <div>
                        <ul class="menu">
                            <li class="nav-menu"><a [routerLink]="['/cart']">Blogs</a></li>
                           <li class="nav-menu"><a [routerLink]="['/shop']">Shop</a></li>
                            <li class="nav-menu"><a [routerLink]="['/admin']">Admin Area</a></li>
                        </ul>
                    </div>
                    -->
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent {}