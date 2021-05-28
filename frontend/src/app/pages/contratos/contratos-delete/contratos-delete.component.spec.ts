import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosDeleteComponent } from './contratos-delete.component';

describe('ContratosDeleteComponent', () => {
  let component: ContratosDeleteComponent;
  let fixture: ComponentFixture<ContratosDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
