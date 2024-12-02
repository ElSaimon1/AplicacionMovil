import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DatosUsuarioService } from './datos-usuario.service';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AñadirMascotaService {

  constructor(private firestore:AngularFirestore,private access:DatosUsuarioService, private storage:Storage) { 
    this.storage.create();
  }
  async Crear_mascota(nombre:string,edad:string,raza:string,sexo:string,ciudad:string,id_cliente:string){
      await this.firestore.collection('Mascota').add({
        nombre: nombre,
        edad: edad,
        raza: raza,
        sexo: sexo,
        ciudad: ciudad,
        id_cliente: id_cliente
      });
  }
  listarMascota():Observable <any>{
    return this.firestore.collection('Mascotas',ref => ref.where('id_cliente','==',this.access.GetUID())).valueChanges();
  }
  
}
