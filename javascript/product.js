// import { v4 as uuidv4 } from 'uuid';
const removeVietKey = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
};
function handle() {
  const listElement = document.getElementsByClassName("menu__taplet--mobile");
  if (listElement.length) {
    const firstElement = listElement[0];
    firstElement.classList.toggle("show-menu");
  }
}
function handleClickSearch() {
  const listSearchElement = document.getElementsByClassName("search-toggle");
  if (listSearchElement.length) {
    const secondElement = listSearchElement[0];
    secondElement.classList.toggle("icon-search-product");
  }
}
//data
const arr = [
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nữ Boston MWC",
    DonGia: 180000,
    SoLuong: "10",
    color: "Hồng",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 2,
    ImageName: "./../images/mwc (1).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 230000,
    SoLuong: "10",
    color: "Xám",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 3,
    ImageName: "./../images/mwc (2).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 235000,

    SoLuong: "10",
    color: "Trắng",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 4,
    ImageName: "./../images/mwc (3).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 150000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 5,
    ImageName: "./../images/mwc (4).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 230000,
    SoLuong: "10",
    color: "Trắng",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 6,
    ImageName: "./../images/mwc (5).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 7,
    ImageName: "./../images/mwc (6).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 130000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 8,
    ImageName: "./../images/mwc (7).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 9,
    ImageName: "./../images/mwc (8).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 10,
    ImageName: "./../images/mwc (9).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 11,
    ImageName: "./../images/mwc (10).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Trắng",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 12,
    ImageName: "./../images/mwc (11).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 13,
    ImageName: "./../images/mwc (12).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 14,
    ImageName: "./../images/mwc (13).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 15,
    ImageName: "./../images/mwc (14).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 16,
    ImageName: "./../images/mwc (15).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 120000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 17,
    ImageName: "./../images/mwc (16).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 18,
    ImageName: "./../images/mwc (17).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 19,
    ImageName: "./../images/mwc (18).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Trắng",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 20,
    ImageName: "./../images/mwc (19).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 21,
    ImageName: "./../images/mwc (20).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 22,
    ImageName: "./../images/mwc (21).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 23,
    ImageName: "./../images/mwc (22).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 24,
    ImageName: "./../images/mwc (23).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 25,
    ImageName: "./../images/mwc (24).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 26,
    ImageName: "./../images/mwc (25).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 27,
    ImageName: "./../images/mwc (26).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 28,
    ImageName: "./../images/mwc (27).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 29,
    ImageName: "./../images/mwc (28).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 30,
    ImageName: "./../images/mwc (29).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 31,
    ImageName: "./../images/mwc (30).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 32,
    ImageName: "./../images/mwc (31).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 33,
    ImageName: "./../images/mwc (32).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 34,
    ImageName: "./../images/mwc (33).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 35,
    ImageName: "./../images/mwc (34).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 36,
    ImageName: "./../images/mwc (35).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 37,
    ImageName: "./../images/mwc (36).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 38,
    ImageName: "./../images/mwc (37).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 39,
    ImageName: "./../images/mwc (38).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 40,
    ImageName: "./../images/mwc (39).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 41,
    ImageName: "./../images/mwc (40).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 42,
    ImageName: "./../images/mwc (41).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 43,
    ImageName: "./../images/mwc (42).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 44,
    ImageName: "./../images/mwc (43).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 45,
    ImageName: "./../images/mwc (44).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 46,
    ImageName: "./../images/mwc (45).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 234000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 47,
    ImageName: "./../images/mwc (46).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 48,
    ImageName: "./../images/mwc (47).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 160000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 49,
    ImageName: "./../images/mwc (48).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 50,
    ImageName: "./../images/mwc (49).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 51,
    ImageName: "./../images/mwc (50).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 52,
    ImageName: "./../images/mwc (51).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 53,
    ImageName: "./../images/mwc (52).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 54,
    ImageName: "./../images/mwc (54).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 55,
    ImageName: "./../images/mwc (55).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 56,
    ImageName: "./../images/mwc (56).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 57,
    ImageName: "./../images/mwc (57).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 58,
    ImageName: "./../images/mwc (58).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 59,
    ImageName: "./../images/mwc (59).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 60,
    ImageName: "./../images/mwc (60).jpg",
    TenSP: "Giày thể thao Nam MWC",
    DonGia: 200000,
    SoLuong: "10",
    color: "Đen",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
  // {
  //   MaSP: 1,
  //   ImageName: "./../images/mwc ().jpg",
  //   TenSP: "Giày thể thao Nam MWC",
  //   DonGia: 200000,
  //   SoLuong: "10",
  //   color: 'Đen',
  //   Loai: "Giay the thao",
  //   HangSX: "Sneaker",
  // },
];

let pages = 1;
const rows = 12;
const listElement = document.querySelector("#list");
const paginationElement = document.querySelector(".pagination");
console.log(paginationElement);

const display = (items, list, rows, pages) => {
  list.innerHTML = "";
  pages--;

  const start = rows * pages;
  const end = start + rows;

  const paginationItem = items.slice(start, end);
  //
  //
  for (let index = 0; index < paginationItem.length; index++) {
    const pageItem = paginationItem[index];
    // console.log("CCC=====",formatMoney(pageItem.DonGia,'d'));
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
            <div class="image show-modal">
              <img class="img-product" src="${pageItem.ImageName}" alt="">
            </div>
            <span class="name show-modal">${pageItem.TenSP}</span>
            <span class="color">${pageItem.color}</span>
            <p class="price">${pageItem.DonGia}</p>
        `;

    list.appendChild(item);
    item.setAttribute("id-product", pageItem.MaSP);
    //   console.log(list);
    //   const parent = document.querySelector(".item");
    //   console.log(parent);
    //   parent.setAttribute("id-product", `${pageItem.MaSP}`);
  }
};

display(arr, listElement, rows, pages);
const toFirstPageBtn = document.createElement("button");
const backwardBtn = document.createElement("button");
toFirstPageBtn.classList.add("toFirstPageBtn");
toFirstPageBtn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
paginationElement.appendChild(toFirstPageBtn);
backwardBtn.classList.add("backward");
backwardBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
paginationElement.appendChild(backwardBtn);
const totalPages = Math.ceil(arr.length / rows);
for (let index = 0; index < totalPages; index++) {
  const pageBtn = document.createElement("button");
  const btnItem = index + 1;
  pageBtn.classList.add("btn-pagination");
  pageBtn.innerText = btnItem;
  pageBtn.setAttribute("id-btn", btnItem);
  paginationElement.appendChild(pageBtn);
}
const forwardBtn = document.createElement("button");
const toLastPageBtn = document.createElement("button");

// forwardBtn.classList.add('btn-pagination');

forwardBtn.classList.add("forward");
forwardBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
paginationElement.appendChild(forwardBtn);
toLastPageBtn.classList.add("toLastPageBtn");
toLastPageBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
paginationElement.appendChild(toLastPageBtn);

const listBtn = document.querySelectorAll(".btn-pagination");
for (let index = 0; index < listBtn.length; index++) {
  const btnItem = listBtn[index];
  btnItem.addEventListener("click", function () {
    let index1 = parseInt(btnItem.innerText);
    pages = index1;
    display(arr, listElement, rows, pages);
  });
}
toFirstPageBtn.addEventListener("click", function () {
  pages = 1;
  display(arr, listElement, rows, pages);
});
//
backwardBtn.addEventListener("click", function () {
  if (pages === 1) {
    return;
  }
  pages--;
  display(arr, listElement, rows, pages);
});
//
forwardBtn.addEventListener("click", function () {
  if (pages === totalPages) {
    return;
  }
  pages++;
  display(arr, listElement, rows, pages);
});
//
toLastPageBtn.addEventListener("click", function () {
  pages = totalPages;
  display(arr, listElement, rows, pages);
});
//active-paginaton
const pagActive = document.querySelectorAll(".btn-pagination");
pagActive[0].classList.add("active-pagination");
pagActive.forEach((item) => {
  item.onclick = () => {
    const result = document.querySelector(".btn-pagination.active-pagination");
    result.classList.remove("active-pagination");

    item.classList.add("active-pagination");
  };
});
//function
const formatMoney = (n, currency) => {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + currency
  );
};
console.log("=====meny===", formatMoney(40000, "d"));
//tìm kiếm
function renderData(arr) {
  const result = document.querySelector("#list");
  const html = arr.map((record) => {
    return `
            <div class="item">
            <div class="image show-modal">
            <img class="img-product" src="${record.ImageName}" alt="">
            </div>
            <span class="name show-modal">${record.TenSP}-</span>
            <span class="color">${record.color}</span>
            <p class="price">${record.DonGia}</p>
            </div>
    `;
  });
  result.innerHTML = html.join("");
}
// function renderDataSale(arrSale) {
//   const result = document.querySelector("#list");
//   const html = arrSale.map((record) => {
//     return `
//             <div class="item">
//             <div class="image show-modal">
//             <img class="img-product" src="${record.ImageName}" alt="">
//             </div>
//             <span class="name show-modal">${record.TenSP}-</span>
//             <span class="color">${record.color}</span>
//             <p class="price">${record.DonGia}</p>
//             </div>
//     `;
//   });
//   result.innerHTML = html.join("");
// }
const input = document.querySelector("#search");
console.log(input);
input.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return removeVietKey(element.TenSP).toLowerCase().includes(
      removeVietKey(event.target.value).toLowerCase()
    );
  });
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
const input1 = document.querySelector("#searchResponsive");
console.log(input1);
input1.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.TenSP.toLowerCase().includes(
      event.target.value.toLowerCase()
    );
  });
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//filter color

const inputColorBlack = document.querySelector("#colorBlack");
console.log("====", inputColorBlack);
inputColorBlack.addEventListener("input", function (event) {
  console.log("arr=====", arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//white
const inputColorWhite = document.querySelector("#colorWhite");
inputColorWhite.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//Gray
const inputColorGray = document.querySelector("#colorGray");
inputColorGray.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//blue
const inputColorBlue = document.querySelector("#colorBlue");
inputColorBlue.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//pink
const inputColorPink = document.querySelector("#colorPink");
inputColorPink.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//brown
const inputColorBrown = document.querySelector("#colorBrown");
inputColorBrown.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//cost
const inputPrice = document.querySelector("#priceCost");
inputPrice.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.DonGia >= 100000 && element.DonGia < 200000;
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//
const inputPrice1 = document.querySelector("#priceCost1");
inputPrice1.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.DonGia >= 200000 && element.DonGia <= 300000;
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//rightproduct
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-acc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}
//
var accDown = document.getElementsByClassName("accordion-product");
var i;

for (i = 0; i < accDown.length; i++) {
  accDown[i].addEventListener("click", function () {
    this.classList.toggle("active-pro");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}
// so luong sp
const decrease = document.querySelector(".decrease");
console.log(decrease);
const increase = document.querySelector(".increase");
const countNumber = document.querySelector(".count-number");

decrease.onclick = () => {
  console.log(decrease);
  if (countNumber.value <= 1) {
    decrease.style.background = "#fff";
    return;
  }
  countNumber.value--;
};

increase.onclick = () => {
  countNumber.value++;
  decrease.style.background = "#fff";
};
//showmodal
const modal = document.querySelector(".modal-detail");
//btn-close
const btnClose = document.querySelector(".btn-close");
function handleHidden() {
  console.log(btnClose);
  btnClose.onclick = () => {
    const scrollDetail = document.querySelector(".wrapper");
      scrollDetail.style.position = "absolute";
    modal.classList.remove("show");
    modal.classList.add("hidden");
  };
}
handleHidden();

//detail
function handleDetail() {
  const imgModal = document.querySelector(".img-modal");
  const title = document.querySelector(".title-modal");
  const priceModal = document.querySelector(".price-modal");
  const clickProduct = document.querySelectorAll(".show-modal");
  const scrollDetail = document.querySelector(".wrapper");
  console.log("====man ngo====", scrollDetail);

  clickProduct.forEach((item) => {
    item.onclick = function () {
      console.log("item===", item);
      //scroll
      scrollDetail.style.position = "fixed";
      scrollDetail.style.top = `-${scrollY}`;
      //
      modal.classList.remove("hidden");
      modal.classList.add("show");
      console.log(modal);
      const productId = item.parentElement.getAttribute("id-product");
      console.log(productId);
      const pickedProduct = arr.find((item) => item.MaSP == productId);

      console.log(pickedProduct);
      imgModal.setAttribute("src", pickedProduct.ImageName);
      title.setAttribute("id-cart", productId);
      addClick();

      title.innerText = pickedProduct.TenSP;
      priceModal.innerText = pickedProduct.DonGia;
    };
  });
}
handleDetail();
//menu
const btnMenu = document.querySelector(".nav__taplet");
function handleShow() {
  console.log(btnMenu);
  btnMenu.onclick = () => {
    modal.classList.add("show-menu");
    modal.classList.remove("hidden");
  };
}
handleHidden();
//
//
const menuBuyNow = document.querySelector(".info-user-cart");
console.log(menuBuyNow);
const buyNow = document.querySelector(".btn-detail");
console.log("bynow=====", buyNow);
//btn-close

const btnCloseBuy = document.querySelector(".btn-buynow");
function handleHiddenBuy() {
  btnCloseBuy.onclick = () => {
    const scrollDetail = document.querySelector(".wrapper");
      scrollDetail.style.position = "absolute";
    menuBuyNow.classList.remove("show");
    menuBuyNow.classList.add("hidden");
  };
}
handleHiddenBuy();

//detail
function handleBuyNow() {
  const imgBuyNow = document.querySelector(".img-buynow");
  const nameBuyNow = document.querySelector(".name-product");
  const priceBuyNow = document.querySelector(".price-product");
  const clickBuyNow = document.querySelectorAll(".show-info");

  clickBuyNow.forEach((item) => {
    item.onclick = function () {
      const scrollDetail = document.querySelector(".wrapper");
      scrollDetail.style.position = "fixed";
      scrollDetail.style.top = `-${scrollY}`;
      menuBuyNow.classList.remove("hidden");
      menuBuyNow.classList.add("show");
      modal.classList.add("hidden");

      console.log(modal);
      const productId = item.parentElement.getAttribute("id-product");
      console.log(productId);
      const pickedProduct = arr.find((item) => item.MaSP == productId);

      console.log(pickedProduct);
      imgModal.setAttribute("src", pickedProduct.ImageName);
      title.innerText = pickedProduct.TenSP;
      priceModal.innerText = pickedProduct.DonGia;
    };
  });
}
handleBuyNow();

//
const suc = document.querySelector("#btn-submit")
const inputSucess = document.querySelectorAll(".kkk");
console.log("===con man khung hihi===", inputSucess);

const sucess = () => {
  suc.onclick = () => {
    if(inputSucess.checked === null) {
      alert("Đặt hàng thành công");
    }
    else alert("Bạn chưa nhập đủ thông tin")
  }
}
sucess();

//local
let cart = [];
const addCart = () => {
  const btnAddCart = document.querySelector(".btn-detail-add");
  const title = document.querySelector(".title-modal");
  const idCart = title.getAttribute("id-cart");
  const gia = document.querySelector(".price-modal")
  const soLuong = document.querySelector(".count-number").value;
  const arrob = {
    id: idCart,
    soLuong: soLuong,
  };
  let storage = localStorage.getItem("cart")  
  console.log(storage);
  if(storage) {
    cart = JSON.parse(storage);
  }
  console.log(cart);
  let item = cart.find(e =>e.id == idCart)
    if(item) {
      item.soLuong = soLuong;
    }
    else {
      cart.push(arrob)
    }
  localStorage.setItem("cart",JSON.stringify(cart));
  modal.classList.add("hidden");
};

// them gio hang 
const addClick = () => {
  const btnAddCart = document.querySelector(".btn-detail-add");
  btnAddCart.onclick = () => {
    addCart();
  }
console.log("==nut==",btnAddCart);
}