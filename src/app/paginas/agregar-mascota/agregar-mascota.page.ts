import { Component, OnInit } from '@angular/core';
import { AñadirMascotaService } from 'src/app/servicios/añadir-mascota.service';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.page.html',
  styleUrls: ['./agregar-mascota.page.scss'],
})
export class AgregarMascotaPage implements OnInit {

  constructor(private hacer: AñadirMascotaService,private access:DatosUsuarioService, private router: Router) { }
  nombre: string
  edad: string
  raza: string
  sexo: string
  ciudad: string
  id_cliente: string
  ngOnInit() {
  }
  agregarMascota(){
    this.id_cliente=this.access.GetUID();
    if (this.id_cliente !=="NO hay Usuario"){
      this.hacer.Crear_mascota(this.nombre,this.edad,this.raza,this.sexo,this.ciudad,this.id_cliente);
      console.log("se agrego mascota")
      this.refrescar()
      this.router.navigate(["/perfil"])
    }else{
      console.log("No hay usuario")
    }
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
  }
  
}
