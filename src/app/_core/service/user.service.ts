import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":
    "application/json;charset=UTF-8" })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(nguoiDung) {
    console.log(nguoiDung);

    const api = "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    let obServable = this.http.post(api, nguoiDung, httpOptions).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
    return obServable;
  }

  loginUser(taiKhoan, matKhau){
    const api = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${taiKhoan}&MatKhau=${matKhau}`;
    let obServable = this.http.post(api, httpOptions).pipe(
      tap(
        ()=>{},
        catchError(err =>{
          return this.handleError(err);
        })
      )
    );
    return obServable;
  }


  handleError(err){
    return err;
  }
}
