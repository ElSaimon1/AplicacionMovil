import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Init } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {

  constructor(private afAuth:AngularFireAuth,private router:Router,private firestore:AngularFirestore) { }
  login(email:string, password:string ){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  logout(){
    return this.afAuth.signOut().then(()=>{
      this.router.navigate((['/login']));
    })
  }
  async create_user(email:string,password:string,nombre:string,ciudad:string,edad:string,pais:string){
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email,password);
    const uid = userCredential.user?.uid;

    await this.firestore.doc(`Usuario/${uid}`).set({
      email:email,
      nombre:nombre,
      ciudad:ciudad,
      edad:edad,
      pais:pais,
      uid:uid
    });
    return userCredential;
    


  }
}
