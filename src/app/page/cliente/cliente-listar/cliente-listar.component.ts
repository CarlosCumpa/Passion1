import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { cliente } from 'src/app/module/cliente';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  dataSource: MatTableDataSource<cliente> = new MatTableDataSource();
  displayedColumns: string[] = ['id_cliente', 'nombre', 'apellido','fechanacimiento','edad', 'acciones'];
  constructor(private pc: ClienteService) { }

  ngOnInit(): void {
    this.pc.listar().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
    this.pc.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}

