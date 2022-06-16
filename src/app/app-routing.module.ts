import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectTestComponent } from './direct-test/direct-test.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventTestComponent } from './event-test/event-test.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SpyonComponent } from './spyon/spyon.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [

  { component: EmployeeComponent, path: 'employee' },
  { component: EventTestComponent, path: 'event-test' },
  { component: ProductListComponent, path: 'product-list' },
  { component: DirectTestComponent, path: 'directive' },
  { component: SpyonComponent, path: 'spyOn' },
  { component: InputOutputComponent, path: 'input' },
  { component: ReactiveFormComponent, path: 'login' },
  { component: TemplateDrivenFormComponent, path: 'email-forgot' },
  { component: LifeCycleHookComponent, path: 'hook' },
  { pathMatch: 'full', path: '**', redirectTo: 'directive' }//put in last line,bcz it is sequential execution

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
