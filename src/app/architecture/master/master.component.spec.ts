import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterComponent } from './master.component';

describe('MasterComponent', () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterComponent]
    });
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas aquí para probar la lógica de tu componente.
});
