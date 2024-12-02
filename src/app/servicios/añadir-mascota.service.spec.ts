import { TestBed } from '@angular/core/testing';

import { AñadirMascotaService } from './añadir-mascota.service';

describe('AñadirMascotaService', () => {
  let service: AñadirMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AñadirMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
