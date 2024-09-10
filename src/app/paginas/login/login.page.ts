import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  nombre: string = ""
  LaContra: string = ""


  constructor(public alerta: AlertController,private router:Router, public toast:ToastController) { }

  async MensajeCamposVasios() {
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message: 'Contraseña y/o usuario campo(s) vacio(s)',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  async InicioValido() {
    const toast = await this.toast.create({
      message: 'Inicio Session',
      duration: 2000
    });
    toast.present();
  }
  Vacio(x: string) {
    return x.trim().length === 0;
  }
  ValidarCampo() {

    if (this.Vacio(this.nombre)) {
      console.log("Escribe Nombre")
    }
    else {
      console.log("Nombre escrito")
    }
    if (this.Vacio(this.LaContra)) {
      console.log("Escribe Contrasena")
    }
    else {
      console.log("Contrasena escrito")
    }
    if (this.Vacio(this.nombre) || (this.Vacio(this.LaContra))) {
      this.MensajeCamposVasios()
    }
    else {
      console.log("Inicio Session Exitoso")
      this.InicioValido()
      this.router.navigate(["/home"])
    }
  }
  Registarse() {
    this.router.navigate(["/registrarse"])
  }
}