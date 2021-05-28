import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresListComponent } from './prestadores-list.component';

describe('PrestadoresListComponent', () => {
  let component: PrestadoresListComponent;
  let fixture: ComponentFixture<PrestadoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
