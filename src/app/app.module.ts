import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {  environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp({"projectId":"seecion6duocv","appId":"1:369233927206:web:3d82a323955dca87b29ae7","storageBucket":"seecion6duocv.appspot.com","apiKey":"AIzaSyD6gR0_TeMeTNdV8tnQZmmRf7QPrhbwhP0","authDomain":"seecion6duocv.firebaseapp.com","messagingSenderId":"369233927206"})), 
    provideAuth(() => getAuth()), 
    provideAnalytics(() => getAnalytics()), 
    ScreenTrackingService, UserTrackingService, 
    provideFirestore(() => getFirestore()), 
    provideMessaging(() => getMessaging()), 
    providePerformance(() => getPerformance()), 
    provideStorage(() => getStorage()), 
    provideRemoteConfig(() => getRemoteConfig())],
  bootstrap: [AppComponent],
})
export class AppModule {}
