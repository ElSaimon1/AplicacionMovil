import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPerroPage } from './agregar-perro.page';

describe('AgregarPerroPage', () => {
  let component: AgregarPerroPage;
  let fixture: ComponentFixture<AgregarPerroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPerroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
