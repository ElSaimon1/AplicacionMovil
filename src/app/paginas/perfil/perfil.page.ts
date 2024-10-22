import { Component, OnInit } from '@angular/core';
import { Mascota, UserI } from 'src/app/common/models/users.models';
import { FirestoreService } from 'src/app/common/services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users: UserI[] = [];

  perro: Mascota[] = [];

  constructor(private firestoreService: FirestoreService) { 
    this.loaduser();
    this.loadperro();
    
  }

  loaduser() {
    this.firestoreService.getCollectionChanges<UserI>('Usuario').subscribe( data => { 
      if (data) {
        this.users = data
      }
    })

  }

  loadperro() {
    this.firestoreService.getCollectionChanges<Mascota>('Mascota').subscribe( data => { 
      if (data) {
        this.perro = data
      }
    })

  }

  ngOnInit() {
  }

}
