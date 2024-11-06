import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaJuntaPage } from './mapa-junta.page';

describe('MapaJuntaPage', () => {
  let component: MapaJuntaPage;
  let fixture: ComponentFixture<MapaJuntaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaJuntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
