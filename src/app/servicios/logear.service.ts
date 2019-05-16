import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogearService {

  constructor(private httpLog: HttpClient) { }

/*   public entrar(data: any) {
    return this.HttpLog.post('http://localhost/clase07/', data);
  } */
  /**
   * entrar
   */
  public entrar(data: any) {
    return this.httpLog.post('http://localhost/TP_PROG3_1C_2018/login/',data);
    /* return this.httpLog.post('http://leonifran.000webhostapp.com/TP_PROG3_1C_2018/login/',data); */
  }
}
