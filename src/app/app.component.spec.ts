import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unitTestKArmaJAsmin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unitTestKArmaJAsmin');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unitTestKArmaJAsmin app is running!');
  });

  fit('Testing the findeventindex using [findindex] and check it has been called', () => {
    let inArry = [3, 5, 6, 7, 8, 9];
    spyOn(app, 'findEventIndex').and.callThrough();
    expect(inArry.findIndex(app.findEventIndex)).toBe(2);
    expect(app.findEventIndex).toHaveBeenCalled();
  })

  fit('testing the filter value  using  [filter]and check it has been called', () => {
    let inArry = [6, 3, 5, 7, 8, 9];
    spyOn(app, 'filterValue').and.callThrough();
    expect(inArry.filter(app.filterValue)).toEqual([6, 7, 8, 9]);
    expect(app.filterValue).toHaveBeenCalled();
  })
});
