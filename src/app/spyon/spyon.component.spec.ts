import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockSpyService } from '../mock-spy.service';

import { SpyonComponent } from './spyon.component';

describe('SpyonComponent', () => {
  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;
  let mockServices: MockSpyService;

  let demofetchData: any;
  let demoList: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyonComponent],
      providers: [MockSpyService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockServices = TestBed.get(MockSpyService);
    //call multiple spy
    demofetchData = jasmine.createSpy('fetchData');
    demofetchData('Dummy data fetched');

    //call array
    demoList = jasmine.createSpyObj('demoList', ['add', 'remove', 'refresh']);
    demoList.add();
    demoList.remove(1);
    demoList.refresh();
  });

  it('[spyOn]-should check mocked spy methode is called', () => {
    let mockSpy = spyOn(mockServices, 'getValue');
    component.ngOnInit();
    expect(mockSpy).toHaveBeenCalled();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[spyOn]-should check methode spy method is called', () => {
    let mockSpy = spyOn(mockServices, 'getValue');
    component.ngOnInit();
    expect(mockSpy).toHaveBeenCalled();
  })

  it('[jasmine.createSPy]-should check demofetchData is created', () => {
    expect(demofetchData).toBeDefined();//created
  })

  it('[jasmine.createSPy]-should check demofetchData is called', () => {
    expect(demofetchData).toHaveBeenCalled();//call before ()
  });
  it('[jasmine.createSPy]-should check demofetchData is called once', () => {
    expect(demofetchData.calls.count()).toBe(1);
  });

  it('[jasmine.createSpyObj-should check all demoList methode are created', () => {
    expect(demoList.add).toBeDefined();
    expect(demoList.remove).toBeDefined();
    expect(demoList.refresh).toBeDefined();
  })
  it('[jasmine.createSpyObj-should check all demoList methode are called', () => {
    expect(demoList.add).toHaveBeenCalled();
    expect(demoList.remove).toHaveBeenCalled();
    expect(demoList.refresh).toHaveBeenCalled();
  })
  it('[jasmine.createSpyObj-should check all demoList methode are called once', () => {
    expect(demoList.add.calls.count()).toBe(1);
    expect(demoList.remove.calls.count()).toBe(1);
    expect(demoList.refresh.calls.count()).toBe(1);
  })

  it('[jasmine.createSpyObj]-tracks all the arguments of its calls', function () {
    expect(demoList.remove).toHaveBeenCalledWith(1);
  })
});
