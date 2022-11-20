
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // de no aparecer lo agregas
import { cliente } from './../module/cliente'; //de no aparecer lo agreags
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string="http://localhost:5000/clientes"; //se crea variante url
  private listaCambio = new Subject<cliente[]>()


  constructor(private http:HttpClient) { }
  //funcion listar
  listar(){
    return this.http.get<cliente[]>(this.url);
  }
  insertar(cliente: cliente) {
    return this.http.post(this.url, cliente);
  }
  setLista(listaNueva: cliente[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(cliente: cliente) {
    return this.http.put(this.url + "/" + cliente.id_cliente, cliente);
  }
  listarId(id: number) {
    return this.http.get<cliente>(`${this.url}/${id}`);
  }
}
