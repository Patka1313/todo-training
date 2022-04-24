import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryContextStorageModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/in-memory-context.storage-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    InMemoryContextStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
