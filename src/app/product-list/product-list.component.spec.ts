import { DebugElement } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ProductService } from '../product.service';

import { ProductListComponent } from './product-list.component';

class MockAuthservice extends ProductService {
  public isAuthenticated() {
    return true;
  }
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductService]
    })
      .compileComponents();

    TestBed.overrideComponent(
      ProductListComponent,
      { set: { providers: [{ provide: ProductService, useClass: MockAuthservice }] } }
    )
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductService);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should test filter product list (done)', (done) => {
    component.searchText = 'egg';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.filterProductList();
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      //get the text from the first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    })
  })
  //auto detact response
  it('should test filter product list (async)', async () => {//use this always  
    component.searchText = 'egg';
    spyOn(productService, 'filterProductList').withArgs('egg').and.callThrough();
    component.filterProductList();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    })

  })

  // xit('should test filter product list (async)', async () => {
  //   component.searchText = 'egg';
  //   spyOn(productService, 'filterProductList').withArgs('egg').and.callThrough();
  //   component.filterProductList();
  //   fixture.whenStable().then(() => {
  //         fixture.detectChanges();
  //         const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
  //         expect(value).toContain(component.searchText);
  //   })
  // })

  it('should check the services', () => {
    expect(productService instanceof ProductService).toBeTruthy();
  })
  it('should inject  services using inject funcation and check its instance', inject([ProductService], (productService: ProductService) => {
    expect(productService).toBeTruthy();
    expect(productService instanceof ProductService).toBeTruthy();
  }))

  it('should test injected service injected using component ovverridng', () => {
    let overridenservice = fixture.debugElement.injector.get(productService);
    expect(overridenservice instanceof MockAuthservice).toBeTruthy();
  })
});
