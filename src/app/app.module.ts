import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventTestComponent } from './event-test/event-test.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloDirective } from './hello.directive';
import { DirectTestComponent } from './direct-test/direct-test.component';
import { EnclosePipe } from './enclose.pipe';
import { SpyonComponent } from './spyon/spyon.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { DummyComponent } from './dummy/dummy.component';
// import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTestComponent,
    ProductListComponent,
    HelloDirective,
    DirectTestComponent,
    EnclosePipe,
    SpyonComponent,
    InputOutputComponent,
    UserDetailComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    LifeCycleHookComponent,
    DummyComponent,
    // EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
