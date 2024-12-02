import { Component, OnInit } from '@angular/core';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre:string
  edad:string
  email:string
  ciudad:string
  pais:string

  constructor(private access: DatosUsuarioService, private storage:Storage) {}

  async ngOnInit() {
    await this.storage.create();
    const DUsuario = await this.storage.get("DatosUsuario");
    this.nombre = DUsuario.nombre;
    this.edad = DUsuario.edad;
    this.email = DUsuario.email;
    this.ciudad = DUsuario.ciudad;
    this.pais = DUsuario.pais;
    
  }
}