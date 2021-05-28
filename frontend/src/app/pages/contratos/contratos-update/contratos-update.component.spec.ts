import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosUpdateComponent } from './contratos-update.component';

describe('ContratosUpdateComponent', () => {
  let component: ContratosUpdateComponent;
  let fixture: ComponentFixture<ContratosUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
