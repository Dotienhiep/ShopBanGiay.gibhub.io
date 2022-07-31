const listProduct = [
    {
         id: 1, 
         name: 'giay nam avbc'
}
]
window.localStorage.setItem("product",JSON.stringify(listProduct))
console.log("===ssss===",JSON.parse(window.localStorage.getItem("product")));