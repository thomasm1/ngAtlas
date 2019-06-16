// import { QuoteTextComponent } from './components/quote-text/quote-text.component';

import { TestBed, async } from '@angular/core/testing';
// import { APP_BASE_HREF } form '@angular/common';
// import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';

describe('AppComponent', () => {
  // const routes: Routes = [
  //   { path: 'home', component: HomeComponent },
  //   { path: 'about', component: AboutComponent },
  //   { path: '', redirectTo: '/home', pathMatch: 'full'},

  // ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        // HomeComponent, 
        // AboutComponent, 
        // QuoteTextComponent
      ],
      imports: [
        // RouterModule.forRoot(routes)
      ],
      providers: [
        // { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular7-tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular7-tests');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Tests: angular7-tests');
  });
});
