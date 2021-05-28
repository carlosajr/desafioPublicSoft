import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresDeleteComponent } from './prestadores-delete.component';

describe('PrestadoresDeleteComponent', () => {
  let component: PrestadoresDeleteComponent;
  let fixture: ComponentFixture<PrestadoresDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadoresDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
