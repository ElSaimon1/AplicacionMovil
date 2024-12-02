import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPuntoEncuentroPage } from './agregar-punto-encuentro.page';

describe('AgregarPuntoEncuentroPage', () => {
  let component: AgregarPuntoEncuentroPage;
  let fixture: ComponentFixture<AgregarPuntoEncuentroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPuntoEncuentroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
