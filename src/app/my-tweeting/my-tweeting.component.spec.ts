import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTweetingComponent } from './my-tweeting.component';

describe('MyTweetingComponent', () => {
  let component: MyTweetingComponent;
  let fixture: ComponentFixture<MyTweetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTweetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTweetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
