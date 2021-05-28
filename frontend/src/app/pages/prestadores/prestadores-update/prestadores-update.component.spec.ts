import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresUpdateComponent } from './prestadores-update.component';

describe('PrestadoresUpdateComponent', () => {
  let component: PrestadoresUpdateComponent;
  let fixture: ComponentFixture<PrestadoresUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadoresUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
