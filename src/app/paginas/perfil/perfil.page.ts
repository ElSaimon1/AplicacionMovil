import { Component, OnInit } from '@angular/core';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';
import { Storage } from '@ionic/storage-angular';
import { AñadirMascotaService } from 'src/app/servicios/añadir-mascota.service';
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
  mascota:string
  raza:string
  mascotas: any[] = [];

  constructor(private access: DatosUsuarioService, private storage:Storage, private hacer:AñadirMascotaService) {}

  async ngOnInit() {
    await this.storage.create();
    const mascotasDesdeStorage = await this.hacer.obtenerMascotasDesdeStorage();
    this.mascotas = mascotasDesdeStorage;
    console.log("la lista tiene: ",this.mascotas)
    const DUsuario = await this.storage.get("DatosUsuario");
    this.nombre = DUsuario.nombre;
    this.edad = DUsuario.edad;
    this.email = DUsuario.email;
    this.ciudad = DUsuario.ciudad;
    this.pais = DUsuario.pais;
  }
  async refrescar(){
    this.hacer.listarMascota().subscribe(
      async(mascotas) => {
        console.log('Mascotas obtenidas:', mascotas);
        await this.hacer.guardarMascotasEnStorage(mascotas);
      },
      (error) => {
        console.error('Error al listar las mascotas:', error);
      }
    )
    const mascotasDesdeStorage = await this.hacer.obtenerMascotasDesdeStorage();
    this.mascotas = mascotasDesdeStorage;
    console.log("la lista tiene: ",this.mascotas)
  }
}