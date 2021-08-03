import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: String="";
  apellido: String="";
  edad: number=0;
  
  constructor() { }

  ngOnInit(): void {
    this.nombre="juan";
    this.apellido="gomez";
    this.edad=34;
  }

}
