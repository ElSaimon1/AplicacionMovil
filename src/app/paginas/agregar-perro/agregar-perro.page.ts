import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/common/models/users.models';
import { FirestoreService } from 'src/app/common/services/firestore.service';

@Component({
  selector: 'app-agregar-perro',
  templateUrl: './agregar-perro.page.html',
  styleUrls: ['./agregar-perro.page.scss'],
})
export class AgregarPerroPage implements OnInit {

  agregarMascota: Mascota;
  cargando: boolean = false;
  perro: Mascota[] = [];

  constructor(private firestoreService: FirestoreService) {

    this.initMascota();
    this.loadperro();

  }

  initMascota() {
    this.agregarMascota = {
      nombre: null,
      edad: null,
      raza: null,
      ciudad: null,
      sexo: null,
      id: this.firestoreService.createIdDoc(),
    }
  }

  loadperro() {
    this.firestoreService.getCollectionChanges<Mascota>('Mascota').subscribe(data => {
      if (data) {
        this.perro = data
      }

    })
  }

  async save() {
    this.cargando = true;
    await this.firestoreService.createDocumentID(this.agregarMascota, 'Mascota', this.agregarMascota.id)
    this.cargando = false;
  }

  async delete(perro: Mascota) {
    this.cargando = true;
    await this.firestoreService.deleteDocumentID('Mascota', perro.id);
    this.cargando = false;
  }

  ngOnInit() {
  }

}
