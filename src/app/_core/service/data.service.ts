import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":
      "application/json;charset=UTF-8"
  })
};

let urlApi = ``;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    urlApi = environment.urlAPI;
  }

  // get(uri: string, paramsOptions?: object) {
  //   paramsOptions = Object.assign(httpOptions, { params: paramsOptions });
  //   return this.http.get(urlApi + '/' + uri, paramsOptions).pipe(
  //     tap(() => { }),
  //     catchError(err => {
  //       return this.handleError(err);
  //     })
  //   );
  // }

  // post(uri: string, data?: object, paramsOptions?: object) {
  //   paramsOptions = Object.assign(httpOptions, { params: paramsOptions });
  //   return this.http.post(urlApi + '/' + uri, data, paramsOptions).pipe(
  //     tap(() => { }),
  //     catchError(err => {
  //       return this.handleError(err);
  //     })
  //   );
  // }

  // delete(url,user?) {
  //   return this.http.delete(urlApi + '/' + url,user).pipe(
  //     tap(
  //       () => { },
  //       catchError(err => {
  //         return err
  //       })
  //     )
  //   );
  // }
  // uploadFile(body) {
  //   let ob = this.http.post(`http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`,body);
  //   return ob
  // }
  // handleError(err) {
  //   return err;
  // }
  get(url) {
    return this.http.get(urlApi + '/' + url).pipe(
      tap(
        () => { },
        catchError(err => {
          return err
        })
      )
    )
  }
  post(url,user?) {
    return this.http.post(urlApi + '/' + url,user,httpOptions).pipe(
      tap(
        () => { },
        catchError(err => {
          return err
        })
      )
    );
  }
  delete(url,user?) {
    return this.http.delete(urlApi + '/' + url,user).pipe(
      tap(
        () => { },
        catchError(err => {
          return err
        })
      )
    );
  }
  uploadFile(body) {
    let ob = this.http.post(`http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`,body);
    return ob
  }
}
