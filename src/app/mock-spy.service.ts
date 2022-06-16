import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockSpyService {

  constructor() { }

  getValue() {
    return 'get value';
  }
}
