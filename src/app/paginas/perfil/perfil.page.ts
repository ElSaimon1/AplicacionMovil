import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/common/models/users.models';
import { FirestoreService } from 'src/app/common/services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users: UserI[] = [];

  perro: any[] = [];

  constructor(private firestoreService: FirestoreService) { 
    this.loaduser();
    
  }

  loaduser() {
    this.firestoreService.getCollectionChanges<UserI>('Usuario').subscribe( data => { 
      
      if (data) {
        this.users = data
      }
    })

  }

  loadperro() {

  }

  ngOnInit() {
  }

}
