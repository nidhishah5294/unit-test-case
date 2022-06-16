import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { User } from '../user';
import { UserDetailComponent } from '../user-detail/user-detail.component';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let userListComponent: InputOutputComponent;
  let UserListFixture: ComponentFixture<InputOutputComponent>;

  let userDetailComponent: UserDetailComponent;
  let userDetailFixture: ComponentFixture<UserDetailComponent>;

  let listDebug: DebugElement;
  let detailDebug: DebugElement;

  let user: User;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutputComponent, UserDetailComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    UserListFixture = TestBed.createComponent(InputOutputComponent);
    userListComponent = UserListFixture.componentInstance;

    listDebug = UserListFixture.debugElement;
    user = new User();
    user.name = 'Aanika';
    user.id = 1;
    user.age = 30;
    userListComponent.selectedUser = user;
    UserListFixture.detectChanges();

    userDetailFixture = TestBed.createComponent(UserDetailComponent);
    userDetailComponent = userDetailFixture.componentInstance;
    userDetailFixture.detectChanges();
    detailDebug = UserListFixture.debugElement;
  });

  it('should create', () => {
    expect(userListComponent).toBeTruthy();
  });

  it('[input] - should test the @imput changes', async(() => {
    //two binding feature use [ASync]
    let idDiv = listDebug.query(By.css('#userid')).nativeElement.innerText;
    expect(idDiv).toContain('1');
    //also two way binding (await kind of)
    UserListFixture.whenStable().then(() => {
      let inputEl = listDebug.query(By.css('#username')).nativeElement.value;
      expect(inputEl).toContain('Aanika');
    })
  }))

  it('[output] - should check output changes are working', () => {
    user.age = 100;
    let selectedUser: User;

    userDetailComponent.userid = user.id;
    userDetailComponent.username = user.name;
    userDetailComponent.age = user.age;

    userDetailComponent.saveUser();
    userDetailComponent.updateUser.subscribe(data => {
      selectedUser = data;
      expect(selectedUser.age).toBe(user.age);
    });


  })
});
