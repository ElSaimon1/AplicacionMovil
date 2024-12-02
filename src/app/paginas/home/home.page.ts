import { Component, ElementRef, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {FirebaseLoginService} from 'src/app/servicios/firebase-login.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController, private storage: Storage, private conexion:FirebaseLoginService) {}

    ngAfterViewInit() {
      const cardA = this.animationCtrl
        .create()
        .addElement(this.cardElements.get(0)!.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0) ' },
        ]);
  
      const cardB = this.animationCtrl
        .create()
        .addElement(this.cardElements.get(1)!.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ]);
  
      const cardC = this.animationCtrl
        .create()
        .addElement(this.cardElements.get(2)!.nativeElement)
        .duration(5000)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' },
        ]);
  
      this.animation = this.animationCtrl
        .create()
        .duration(2000)
        .iterations(Infinity)
        .addAnimation([cardA, cardB, cardC]);
    }
  
    play() {
      this.animation.play();
    }
  
    pause() {
      this.animation.pause();
    }
  
    stop() {
      this.animation.stop();
    }

    async VerStorage() {
      let nombre = await this.storage.get("nombreUsuario")
      let usuario = await this.storage.get("usuario")
      let mascota = await this.storage.get("mascota")
      console.log("el nombre guardado es: " + nombre )
    }
    cerrarsesion(){
      this.conexion.logout();
    }
  }

  
