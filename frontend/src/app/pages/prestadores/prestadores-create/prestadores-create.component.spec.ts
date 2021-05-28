import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresCreateComponent } from './prestadores-create.component';

describe('PrestadoresCreateComponent', () => {
  let component: PrestadoresCreateComponent;
  let fixture: ComponentFixture<PrestadoresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadoresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
