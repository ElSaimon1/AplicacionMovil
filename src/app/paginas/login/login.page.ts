import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service';
import { Storage } from '@ionic/storage-angular';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  nombre: string = ""
  LaContra: string = ""
  Usuario: any;


  constructor(public alerta: AlertController, 
              private router:Router, 
              public toast:ToastController, 
              private loginFirebase:FirebaseLoginService,
              private storage: Storage,
              private access: DatosUsuarioService) { }

   // crear storage
   async ngOnInit() {
    await this.storage.create();
  }

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
      message: 'bienvendio '+this.Usuario.data.nombre,
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
  async Ingresar(){
    if ( this.LaContra===""||this.nombre===""){
      console.log("NO ingresaste maquina")
    }
    else{
      console.log(this.nombre,this.LaContra)
      this.loginFirebase.login(this.nombre,this.LaContra).then(()=>{
        const uid = this.access.GetUID();
         this.access.ObtenerDatosUsuario(uid).subscribe({
          next: (usuario) => {
            if (usuario) {
              this.Usuario = usuario;
              this.InicioValido();
              this.storage.set("DatosUsuario",{
                ciudad:this.Usuario.data.ciudad,
                edad:this.Usuario.data.edad,
                email:this.Usuario.data.email,
                nombre:this.Usuario.data.nombre,
                pais:this.Usuario.data.pais,
                uid:this.Usuario.data.uid})
            } else {
              console.warn('No se encontraron datos para el usuario.');
            }
          },
          
        });
        console.log("inicio exitoso ");
        this.router.navigate(["/home"]) }).catch((x:string)=>{console.log(x)})
    }

    //guardar informacion
    this.storage.set("nombreUsuario", this.nombre)
  }
}