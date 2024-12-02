import { Injectable } from '@angular/core';
import {AngularFirestore} from'@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { getAuth } from "firebase/auth";
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  UID:string
  constructor(private firestore:AngularFirestore) { }
  GetUID(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      this.UID =user.uid
      return this.UID;
    }else{
      return "NO hay Usuario"
    }
  }
  ObtenerDatosUsuario(uid:string):Observable <any> {
    return this.firestore.collection('Usuario',ref => ref.where('uid','==',uid)).snapshotChanges().pipe(
      map(actions =>{
        return actions.map(action =>{
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return{id,data};
        })[0];
      })
    )

  }
}
