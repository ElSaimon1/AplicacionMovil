import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service'
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {
  nombre: string = ""
  edad: string = ""
  ciudad: string = ""
  pais: string = ""
  correo: string = ""
  laContra: string = ""
  laContra2: string = ""
  mensaje: string



  constructor(public alerta: AlertController, private router: Router, public toast: ToastController,private access:FirebaseLoginService) { }

  async MensajeCamposVasios() {
    const alert = await this.alerta.create({
      header: 'Error de Registro',
      message: this.mensaje,
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
  VacioN(x: string) {
    return x.length === 0;
  }
  InicioSession() {
    this.router.navigate(["/login"])
  }
  ValidarCorreo(correo: string) {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(correo);
  }
  ValidarCampos() {
    this.mensaje = ""
    if ((this.Vacio(this.nombre)) || (this.VacioN(this.edad)) || (this.Vacio(this.ciudad)) || (this.Vacio(this.pais))
      || (this.Vacio(this.correo)) || (this.Vacio(this.laContra)) || (this.Vacio(this.laContra2))
      || (this.laContra != this.laContra2) || (this.ValidarCorreo(this.correo)==false)||(parseInt(this.edad)>=99)||(parseInt(this.edad)<0)) {
      if (this.Vacio(this.nombre)) {
        this.mensaje = this.mensaje + "-Nombre Campo Vacio\n"
        console.log(this.Vacio(this.nombre))
      }
      if (this.VacioN(this.edad)) {
        this.mensaje = this.mensaje + "-Edad Campo Vacio\n"
      }
      if (this.Vacio(this.ciudad)) {
        this.mensaje = this.mensaje + "-Ciudad Campo Vacio\n"
      }
      if (this.Vacio(this.pais)) {
        this.mensaje = this.mensaje + "-Pais Campo Vacio\n"
      }
      if (this.Vacio(this.correo)) {
        this.mensaje = this.mensaje + "-Correo Campo Vacio\n"
      }
      if (this.Vacio(this.laContra)) {
        this.mensaje = this.mensaje + "-Contraseña Campo Vacio\n"
      }
      if (this.Vacio(this.laContra2)) {
        this.mensaje = this.mensaje + "-Segunda Contraseña Campo Vacio\n"
      }
      if (this.laContra != this.laContra2) {
        this.mensaje = this.mensaje + "-las Contraseñas no coinciden\n"
      }
      if (this.ValidarCorreo(this.correo)==false) {
        this.mensaje = this.mensaje + "-Correo Invalido\n"
      }
      if (this.laContra.length< 6) {
        this.mensaje = this.mensaje + "-La Contreaseña deve tener minimo 6 caracteres\n"
      }
      if ((parseInt(this.edad)>=99)||(parseInt(this.edad)<0)){
        this.mensaje = this.mensaje + "-Edad No Valida\n"
      }
      this.MensajeCamposVasios()
    } else {
      this.mensaje = "ok"
    }
    console.log(this.mensaje)
  }
  ngOnInit() {
  }
  async registrarse() {
    this.ValidarCampos()
    if (this.mensaje == "ok") {
      console.log("se registra")
      await this.access.create_user(this.correo,this.laContra,this.nombre,this.ciudad,this.edad,this.pais)
      this.router.navigate(["/home"])
    }
  }


}
