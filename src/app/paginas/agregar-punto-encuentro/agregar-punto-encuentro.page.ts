import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-punto-encuentro',
  templateUrl: './agregar-punto-encuentro.page.html',
  styleUrls: ['./agregar-punto-encuentro.page.scss'],
})
export class AgregarPuntoEncuentroPage implements OnInit {

  constructor(private router: Router) { }

  irAlMapa() {
    this.router.navigate(['/mapa']);
  }

  ngOnInit() {
  }

}
