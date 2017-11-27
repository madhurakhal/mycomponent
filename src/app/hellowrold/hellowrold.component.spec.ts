import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowroldComponent } from './hellowrold.component';

describe('HellowroldComponent', () => {
  let component: HellowroldComponent;
  let fixture: ComponentFixture<HellowroldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellowroldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellowroldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
