import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

// const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  private firestore: Firestore = inject(Firestore);

  constructor() { }


  getCollectionChanges<tipo>(path: string) {
    const itemCollection = collection(this.firestore, path)
    return collectionData(itemCollection) as Observable<tipo[]>;
  }


  createDocument(data: any, enlace: string) {
    const itemCollection = collection(this.firestore, enlace);
    return addDoc(itemCollection, data);
  }

  deleteDocument(enlace: string){
    const document = doc(this.firestore, enlace);
    return deleteDoc(document);
  }

  // createIdDoc() {
  //   return uuidv4();
  // }

}
