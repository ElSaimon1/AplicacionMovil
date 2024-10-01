import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {
  nombre: string = ""
  LaContra: string = ""
  LaContra2: string = ""




  constructor(public alerta: AlertController,private router:Router, public toast:ToastController) { }

  async MensajeCamposVasios(x:string) {
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message: x,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  async RegistroValido() {
    const toast = await this.toast.create({
      message: 'Registro Exitoso',
      duration: 2000
    });
    toast.present();
  }
  Vacio(x: string) {
    return x.trim().length === 0;
  }

  NoVacio(x: string) {
    return x.trim().length !== 0;
  }

  Registarse() {

    if (this.Vacio(this.nombre) || this.Vacio(this.LaContra)|| this.Vacio(this.LaContra2)) {
      this.MensajeCamposVasios("Contraseña y/o usuario campo(s) vacio(s)")
    }

    if ((this.nombre!=="") && (this.LaContra ===this.LaContra2) && this.NoVacio(this.LaContra) && this.NoVacio(this.LaContra2)) {
      console.log("Registro Exitoso")
      this.RegistroValido()
      this.router.navigate(["/home"])
    }

    if  (this.LaContra !==this.LaContra2) {
      this.MensajeCamposVasios("Contraseña No Repetida")
    }

    if (this.Vacio(this.nombre)) {
      console.log("Escribe Usuario")
    }
    else {
      console.log("Nombre Usuario")
    }

    if (this.Vacio(this.LaContra)) {
      console.log("Escribe Contraseña")
    }
    else {
      console.log("Contrasena escrita")
    }
  
    if (this.Vacio(this.LaContra2)){
      console.log("Escribe Contraseña 2")
    }
    else{
      console.log("Contraseña 2 escrita")
    }

  }
  InicioSession() {
    this.router.navigate(["/login"])
  }
}
