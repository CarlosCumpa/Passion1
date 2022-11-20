import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { MatIconModule} from '@angular/material/icon'
import { ClienteListarComponent } from './page/cliente/cliente-listar/cliente-listar.component';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import{MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TrainerComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
