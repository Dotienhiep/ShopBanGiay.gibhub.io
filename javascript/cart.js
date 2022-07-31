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
];
const cartdata = JSON.parse(localStorage.getItem("cart"));
const yesProduct = document.querySelector(".body-giohang");
if (cartdata) {
  cartdata.forEach((e) => {
    const html = arr.map((record) => {
      
      if (e.id == record.MaSP)
       {
         console.log("123")
        return `
                            <div class="item-cart">
                            <div class="image-cart show-modal">
                            <img class="img-cart" src="${record.ImageName}" alt="">
                            </div>
                            <div class="content-cart">
                            <span class="name-cart show-modal">${record.TenSP}</span>
                            <span class="color">Màu : ${record.color}</span>
                            <span class="soluong-cart">Số Lượng :${e.soLuong}</span>
                            <p class="price">${record.DonGia}</p>
                            </div>
                            </div>
                    `;
      }
    });
    yesProduct.innerHTML = html.join("");
  });
}
