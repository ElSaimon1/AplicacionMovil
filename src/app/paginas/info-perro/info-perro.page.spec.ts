import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPerroPage } from './info-perro.page';

describe('InfoPerroPage', () => {
  let component: InfoPerroPage;
  let fixture: ComponentFixture<InfoPerroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPerroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
