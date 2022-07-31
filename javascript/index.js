var header = document.getElementById("list-active");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//
// var btns = document.querySelectorAll(".btn");
// var result = document.querySelector(".btn.active");
// btns.forEach(element => {
//     element.onclick = () => {
//         element.classList.toggle("active");
//     }
// });

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: false,
  wrapAround: true,
  groupCells: 1,
  autoPlay: 2500,
});

// const hideBtn = document.querySelector('#hide')
// const hehehe = document.querySelector('.hehe')
// hideBtn.addEventListener('click', () => {
// hehehe.style.display = 'none'
// })

//
const put = document.querySelector("#search");
console.log(put);
put.addEventListener("input", (e) => {
  console.log(
    arr.filter((element) =>
      element.TenKH.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
});
//
const arrGiayNam = [
  {
    MaSP: 1,

    ImageName: "./../images/mwc (55).jpg",
    TenSP: "Giày thể thao Nike Nam jordan dep trai lam nha Trắng",
    DonGia: 180000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 2,
    ImageName: "./../images/mwc (56).jpg",
    TenSP: "Giày thể thao Nam Đen",
    DonGia: 230000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 3,
    ImageName: "./../images/mwc (57).jpg",
    TenSP: "Giày thể thao Nam Trắng",
    DonGia: 235000,

    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 4,
    ImageName: "./../images/mwc (58).jpg",
    TenSP: "Giày mọi Nam Vàng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
];
const arrGiayNu = [
  {
    MaSP: 1,

    ImageName: "./../images/mwc (59).jpg",
    TenSP: "Giày thể thao Nam Trắng",
    DonGia: 180000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 2,
    ImageName: "./../images/mwc (63).jpg",
    TenSP: "Giày thể thao Nam Đen",
    DonGia: 230000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 3,
    ImageName: "./../images/mwc (64).jpg",
    TenSP: "Giày thể thao Nam Trắng",
    DonGia: 235000,

    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 4,
    ImageName: "./../images/mwc (65).jpg",
    TenSP: "Giày mọi Nam Vàng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
];
const arrBalo = [
  {
    MaSP: 1,

    ImageName: "./../images/mwc (43).jpg",
    TenSP: "Balo laptop Nam Trắng",
    DonGia: 180000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 2,
    ImageName: "./../images/mwc (44).jpg",
    TenSP: "Balo di hoc Nam Đen",
    DonGia: 230000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 3,
    ImageName: "./../images/mwc (45).jpg",
    TenSP: "Balo day rut Trắng",
    DonGia: 235000,

    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 4,
    ImageName: "./../images/mwc (46).jpg",
    TenSP: "Balo hehe Vàng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
];
const arrPhukien = [
  {
    MaSP: 1,

    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam Trắng",
    DonGia: 180000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 2,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam Đen",
    DonGia: 230000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 3,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam Trắng",
    DonGia: 235000,

    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 4,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam Vàng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
];
function createArr(arr) {
  // const newArr = arr.forEach((item)=>{
  //   item.map(element=>{
  //     const color= element.TenSP.split(" ").pop();
  //     console.log(color);
  //   })
  // })
  const newArr = arr.map((item) => {
    const result = item.TenSP.split(" ");
    const color = result.pop();
    const TenSP = [...result].join(" ");
    console.log("=====", color);
    return {
      ...item,
      color,
      TenSP,
    };
  });
  return newArr;
}
const newArrGiayNam = createArr(arrGiayNam);
const newArrGiayNu = createArr(arrGiayNu);
const newArrBalo = createArr(arrBalo);
const newArrPhukien = createArr(arrPhukien);
function renderProduct(listProduct, node) {
  const html = listProduct.map((item) => {
    return `
    <div class="item" id-product="${item.MaSP}">
    <div class="images show-modal">
        <img src="${item.ImageName}" alt="">
        <div class="add-product">
            <span class="icon-cart"><i class="fa-solid fa-cart-plus"></i></span>
        </div>
    </div>
    <span class="title show-modal">${item.TenSP}</span>
    <span class="color">${item.color}</span>
    <span class="cost">${item.DonGia}</span>
</div>
    `;
  });
  node.innerHTML = html.join(" ");
}
parentGiayNam = document.querySelector(".giaynam");
renderProduct(newArrGiayNam, parentGiayNam);
parentGiayNu = document.querySelector(".giaynu");
renderProduct(newArrGiayNu, parentGiayNu);
parentBalo = document.querySelector(".balo");
renderProduct(newArrBalo, parentBalo);
parentPhukien = document.querySelector(".phukien");
renderProduct(newArrPhukien, parentPhukien);

const modal = document.querySelector(".modal");
//btn-close
function handleHidden() {
  const btnClose = document.querySelector(".btn-close");
  console.log(btnClose);
  btnClose.onclick = () => {
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
  // console.log(clickProduct);
  clickProduct.forEach((item) => {
    console.log("===item===", item);
    item.onclick = function () {
      const scrollDetail = document.querySelector(".wrapper");
      scrollDetail.style.position = "fixed";
      scrollDetail.style.top = `-${scrollY}`;
      modal.classList.remove("hidden");
      modal.classList.add("show");
      const productId = item.parentElement.getAttribute("id-product");
      const pickedProduct = arrBalo.find((item) => item.MaSP == productId);
      imgModal.setAttribute("src", pickedProduct.ImageName);
      title.innerText = pickedProduct.TenSP;
      priceModal.innerText = pickedProduct.DonGia;
    };
  });
}
handleDetail();
//so luong
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
//meny
const formatMonay = (n, currency) => {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + currency
  );
};
