import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-service.service';

//http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { postModel } from './post-modal';

describe('HttpServiceService', () => {
  let httpClient: HttpClient;
  let httpTstCtrl: HttpTestingController
  let dataService: HttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpServiceService]
    });
    dataService = TestBed.inject(HttpServiceService);
  });

  beforeEach(() => {
    dataService = TestBed.get(HttpServiceService);
    httpTstCtrl = TestBed.get(HttpTestingController);
  })

  afterEach(() => {
    httpTstCtrl.verify();
    //verifys no unmatch request is handled outstanding
  })

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should check http client', () => {
    //dumy data
    const testPost: postModel[] = [
      { id: 1, usertId: 1, title: 'Test Title 1', body: 'Sample body 1' },
      { id: 2, usertId: 2, title: 'Test Title 2', body: 'Sample body 2' },
    ];
    dataService.getPostList().subscribe(post => {
      expect(testPost).toBe(post, 'should check mock data');
    })
    const req = httpTstCtrl.expectOne(dataService.BASE_URL + 'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);
    // httpTstCtrl.verify();
  })

  it('It should add post and return the added post', () => {
    const newPost: postModel = {
      id: 101, usertId: 1, title: 'new post', body: 'sample post body'
    };
    dataService.addPost(newPost).subscribe(addedPost => {
      expect(addedPost).toBe(newPost);
    })

    const req = httpTstCtrl.expectOne(dataService.BASE_URL + 'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(newPost);
    //executed for setting dummy data,after addPost() executed,
  })

  it('should test 404 error', () => {
    const errorMsg = 'mock  404 error occured';
    dataService.getPostList().subscribe(
      (data) => {
        fail('failing with error 404');
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(404);
        expect(error.error).toEqual(errorMsg);
      }
    )
    const req = httpTstCtrl.expectOne(dataService.BASE_URL + 'posts');
    req.flush(errorMsg, { status: 404, statusText: 'not Found' });
  })
});
