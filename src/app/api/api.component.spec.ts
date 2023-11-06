import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiComponent]
    });
    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas aquí para probar la lógica de tu componente.
});
