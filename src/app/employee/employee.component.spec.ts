import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let autheService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthenticationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    autheService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("it should assert the value for 'h1' element to be value of component", () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  })

  it('Should return the value', () => {
    spyOn(autheService,'checkAuthentication').and.returnValues(true);
    let salSlip: string = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
    expect(autheService.checkAuthentication).toHaveBeenCalled();
  })
});
