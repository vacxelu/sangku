import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
let urlMaNhom = '';
@Component({
  selector: 'app-them-phim',
  templateUrl: './them-phim.component.html',
  styleUrls: ['./them-phim.component.scss']
})
export class ThemPhimComponent implements OnInit {
  DanhSachPhim;
  DanhSachBanSao;
  @ViewChild('inputsearchadmin') input;
  constructor(
    private data: DataService
  ) {
    urlMaNhom = environment.urlMaNhom
  }

  ngOnInit() {
    this.getDanhSachPhim();
  }
  onchangeinput(input) {
    this.DanhSachPhim.map((item, index) => {
      if (input.value == item.MaPhim) {
        this.DanhSachBanSao = this.DanhSachPhim
        this.DanhSachPhim = []
        this.DanhSachPhim.push(item)
      }
      else if (input.value === '') {
        this.DanhSachPhim = this.DanhSachBanSao
      }
    })

  }
  getDanhSachPhim() {
    let url = `QuanLyPhim/LayDanhSachPhim?MaNhom=${urlMaNhom}`
    this.data.get(url).subscribe((result) => {
      console.log(result)
      this.DanhSachPhim = result
    })
  }
  ThemPhim(phim, FormThemPhim, fileImg) {
    // console.log(phim)
    let url = `QuanLyPhim/ThemPhimMoi`
    this.data.post(url, phim).subscribe(result => {
      // console.log(result)
      this.DanhSachPhim.push(result)
      // FormThemPhim.resetForm()
      var formData = new FormData();
      // phim.HinhAnh = fileImg[0].name
      formData.append("Files", fileImg[0]);
      formData.append("TenPhim", phim.TenPhim);
      let url = `QuanLyPhim/UploadFile`;
      this.data.uploadFile(formData).subscribe(result => {
        // if(result === true){
        
        alert('Bạn Đã Thêm Thành Công')
        // }
      })
    })


    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    // dataSource = new MatTableDataSource();

    // applyFilter(filterValue: string) {
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }
  }
  XoaPhim(phim) {
    // console.log(phim)
    Swal.fire({
      title: 'Bạn Chắc Chắn Muốn Xóa?',
      text: 'Phim Sẽ bị Xóa Hoàn Toàn Khỏi Hệ Thống',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa ',
      cancelButtonText: 'Giữ Lại'
    }).then((result) => {
      if (result.value) {
        let url = `QuanLyPhim/XoaPhim?MaPhim=${phim.MaPhim}`
        this.data.delete(url).subscribe(result => {
          // console.log(result)
          this.DanhSachPhim.map((item, index) => {
            if (item.MaPhim == phim.MaPhim) {
              this.DanhSachPhim.splice(index, 1)
            }
          })
        })
        Swal.fire(
          'Phim Của Bạn Đã Được Xóa',
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Bạn Đã Hủy Thao Tác Xóa',
          
        )
      }
    })
  }
}
