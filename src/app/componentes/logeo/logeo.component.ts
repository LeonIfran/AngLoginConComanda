import { Component, OnInit } from '@angular/core';
import { LogearService } from 'src/app/servicios/logear.service';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.css']
})
export class LogeoComponent implements OnInit {
  usuario: string;
  pass: string;
  constructor(private logear: LogearService) { }

  ngOnInit() {
  }
  realizarLogeo(){
    const datos ={usuario:this.usuario, pass: this.pass };
    this.logear.entrar(datos).subscribe((data: any)=>{
      console.log(data);
      if (data != null) {
        localStorage.setItem("user", data);
      }
    });
  }
}
