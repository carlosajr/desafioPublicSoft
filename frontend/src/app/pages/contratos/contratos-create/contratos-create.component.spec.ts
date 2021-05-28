import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosCreateComponent } from './contratos-create.component';

describe('ContratosCreateComponent', () => {
  let component: ContratosCreateComponent;
  let fixture: ComponentFixture<ContratosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
