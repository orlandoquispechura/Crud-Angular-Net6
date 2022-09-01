import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFondoComponent } from './image-fondo.component';

describe('ImageFondoComponent', () => {
  let component: ImageFondoComponent;
  let fixture: ComponentFixture<ImageFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
