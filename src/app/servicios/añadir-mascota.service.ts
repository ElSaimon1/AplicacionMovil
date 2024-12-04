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
      console.log(this.access.GetUID())
     return this.firestore.collection('Mascota',ref => ref.where('id_cliente','==',this.access.GetUID())).valueChanges();
  }
  async guardarMascotasEnStorage(mascotas: any) {
    await this.storage.set('mascotas', mascotas);
  }
  async obtenerMascotasDesdeStorage(): Promise<any> {
    return await this.storage.get('mascotas'); 
  }
}
