import { Component, OnInit } from '@angular/core';
import { Mascota, UserI } from 'src/app/common/models/users.models';
import { FirestoreService } from 'src/app/common/services/firestore.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users: UserI[] = [];
  cargando: boolean = false;

  perro: Mascota[] = [];
  // agregarMascota: Mascota;

  constructor(private firestoreService: FirestoreService, private storage : Storage) {
    
    this.loaduser();
    this.loadperro();
    // this.initMascota(); 

  }


  // initMascota(){
  //   this.agregarMascota = {
  //     nombre: null,
  //     edad: null,
  //     raza: null,
  //     ciudad: null,
  //     sexo: null,
  //     //id: this.firestoreService.createIdDoc(), 
  //   }
  // }

  loaduser() {
    this.firestoreService.getCollectionChanges<UserI>('Usuario').subscribe(data => {
      if (data) {
        this.users = data
      }
    })
  }

  loadperro() {
    this.firestoreService.getCollectionChanges<Mascota>('Mascota').subscribe(data => {
      console.log(data)
      if (data) {
        this.perro = data
      }

    })
  }

  // edit(perro: Mascota){
  //   console.log('edit ->', perro);
  //   this.agregarMascota = perro;
  // }

  async delete(perro: Mascota) {
    this.cargando = true;
    await this.firestoreService.deleteDocument('Mascota');
    this.cargando = false;
  }

  async ngOnInit() {
    const storage = await this.storage.create();
    this.perro = await this.storage.get("id");
  }

}
