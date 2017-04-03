import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegistrerenComponent } from './my-registreren-component.component';

describe('MyRegistrerenComponent', () => {
  let component: MyRegistrerenComponent;
  let fixture: ComponentFixture<MyRegistrerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRegistrerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRegistrerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
