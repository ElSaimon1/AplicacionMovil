import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrinipalPage } from './menu-prinipal.page';

describe('MenuPrinipalPage', () => {
  let component: MenuPrinipalPage;
  let fixture: ComponentFixture<MenuPrinipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrinipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
