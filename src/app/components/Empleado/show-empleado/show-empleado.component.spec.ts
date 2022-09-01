import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpleadoComponent } from './show-empleado.component';

describe('ShowEmpleadoComponent', () => {
  let component: ShowEmpleadoComponent;
  let fixture: ComponentFixture<ShowEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
