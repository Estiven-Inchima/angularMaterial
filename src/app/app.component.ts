import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //los String son cadenas se usa para guardar texto
  palabra: String ="";
  //datos de tipo number son para guardar numero enteros 
  edad: number=0;
  //se usan para guardar datos con valores de verdad
  casado: Boolean=false;
  //datos de tipo any pueden recibir cualquier tipo de dato
  asDatos: any;
  //arreglos o listas: array y tipo de datos 
  amigos: Array<any>=[];

  ngOnInit(): void {//esto es como un constructor
    
    this.palabra = "pedro";
    this.edad=3;
    this.casado=true;
    this.asDatos={edad:20,amigos:"notiene",palabra:"aloha"};
    this.amigos=["0","0"];
    this.amigos=[{nombre:"carlos", edad:2},{nombre:"andrea",edad:45},{nombre:"natalia",edad:89}]
  }
  
}
