import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http: HttpClient) { }
  getDanhSachPhim(): Observable<any> {
    const api = "http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06";
    let obServable = this.http.get(api).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
    return obServable;
  }
  getChiTietPhim(id:any): Observable<any> {
    const api = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
    let obServable = this.http.get(api).pipe();
    tap(
      () => { },
      catchError(err => {
        return this.handleError(err);
      })
    )
    return obServable;
  }
  getDanhSachGhe(id:any): Observable<any> {
    const api = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${id}`;
    let obServable = this.http.get(api).pipe();
    tap(
      () => { },
      catchError(err => {
        return this.handleError(err);
      })
    )
    return obServable;
  }
  handleError(err) {
    return err;
  }
}
