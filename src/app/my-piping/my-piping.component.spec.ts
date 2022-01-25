import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipingComponent } from './my-piping.component';

describe('MyPipingComponent', () => {
  let component: MyPipingComponent;
  let fixture: ComponentFixture<MyPipingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPipingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
