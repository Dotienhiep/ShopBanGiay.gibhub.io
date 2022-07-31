const btn_scroll=document.querySelector(".scroll-page")
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        btn_scroll.classList.add("show-scroll")
    }
    else{
        btn_scroll.classList.remove("show-scroll")
    }
})
//import arr from './index.js';
const modal = document.querySelector(".modal");
//btn-close
function handleHidden (){
    const btnClose = document.querySelector(".btn-close");
    console.log(btnClose);
    btnClose.onclick = () =>{
        modal.classList.remove("show")
        modal.classList.add("hidden");
    }
}
handleHidden()


//detail
function handleDetail(){
    const imgModal=document.querySelector(".img-modal")
    const title=document.querySelector(".title-modal")
    const priceModal=document.querySelector(".price-modal")
    const clickProduct = document.querySelectorAll(".show-modal")
    // console.log(clickProduct);
      clickProduct.forEach((item)=>{
        item.onclick = function(){
            modal.classList.remove("hidden");
            modal.classList.add("show");
            const productId = item.parentElement.getAttribute('id-product');
            //console.log(arr);
            imgModal.innerText = ''
        }
    })
  }
  handleDetail();
  