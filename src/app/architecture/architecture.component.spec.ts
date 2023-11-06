import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchitectureComponent } from './architecture.component';

describe('ArchitectureComponent', () => {
  let component: ArchitectureComponent;
  let fixture: ComponentFixture<ArchitectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchitectureComponent]
    });
    fixture = TestBed.createComponent(ArchitectureComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas aquí para probar la lógica de tu componente.
});
