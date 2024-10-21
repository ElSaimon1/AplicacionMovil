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

  constructor(private firestoreService: FirestoreService ) { 
    
    
  }

  initMascota(){
    this.agregarMascota = {
      nombre: null,
      edad: null,
      raza: null,
      id: this.firestoreService.createIdDoc(), 
    }
  }

  async save() {
    this.cargando = true;
    await this.firestoreService.createDocumentID(this.agregarMascota, 'Mascota', this.agregarMascota.id)
    this.cargando = false;
  }

  ngOnInit() {
  }

}
