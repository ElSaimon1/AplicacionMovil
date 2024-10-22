import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
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


  createDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }

  // createIdDoc() {
  //   return uuidv4();
  // }

}
