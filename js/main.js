
//  var productNameinput = document.getElementById('product Name');
//  var productPriceinput = document.getElementById('product Price');
//  var productCategoryinput = document.getElementById('product category');
//  var productDescinput = document.getElementById('product Desc');
//  var addBtn=document.getElementById('addBtn');
//  var inputs=document.getElementsByClassName('form-control');
//  var currentindex =(0);
//   var products=[];
//   if(JSON.parse(localStorage.getItem('productlist'))!=null)
//   {
//     products=JSON.parse(localStorage.getItem('productlist'));
//     displayData()
//   }
  

//  addBtn.onclick= function(){
//     if(addBtn.innerHTML=="addproduct"){
//         addproduct();
//     }
//    else{
//     alert("index")
//     updateproduct()
//    }
//     displayData();
//     recetdata();
//  }
//  function addproduct(){ // [1] Arrayوبعدين بحط القيم جواه وبعدين احطه جوه objectوعمل 

//     var product={
//         name:productNameinput.value,
//         price:productPriceinput.value,
//         category:productCategoryinput.value,
//         desc:productDescinput.value,
//     }
//     products.push(product); 
//     localStorage.setItem('productlist',JSON.stringify(products))
//  }
//  function displayData() //[2]المسؤوله عن وضع القيم الا فى التابل بتاع هتمل 
//  {
//      var cartona= '';
//      for(var i =0; i <products.length;i++){
//          cartona+=
//          `
//          <tr>
//          <td>${products[i].name}</td>
//          <td>${products[i].price}</td>
//          <td>${products[i].category}</td>
//          <td>${products[i].desc}</td>
//         <td><button onclick="getproductinfo(${i})" class='btn btn-outline-warning'>update</button></td>
//         <td><button onclick="deleteproduct(${i})" class='btn btn-outline-danger'>delete</button></td>
//          </tr>`;
//      }
//      document.getElementById('tablebody').innerHTML = cartona
//  }
//  function recetdata() //[3]مسح الداتا بعد كل ادد بعمله
//  {
//     for(var i=0; i<inputs.length;i++){
//         inputs[i].value=''
//     }
//  }     
//  function deleteproduct(index)//  [4]بيحدد رقم الاندكس الا هيمسحه ةبعدين لزم اكول الديسبلاى عشان يتعرض فى التابل
//  {
//     products.splice(index,1);
//     displayData()
//     localStorage.setItem('productlist',JSON.stringify(products))
    
//  }
//  function getproductinfo(index){
//     currentindex=index;
//     var currentproduct=products[index];
//     productNameinput.value=currentproduct.name;
//     productPriceinput.value=currentproduct.price;
//     productCategoryinput.value=currentproduct.category;
//     productDescinput.value=currentproduct.desc;
//     addBtn.innerHTML="update product"
//  }
//  function updateproduct(){
//     var product={
//         name:productNameinput.value,
//         price:productPriceinput.value,
//         category:productCategoryinput.value,
//         desc:productDescinput.value,
//     }
//     products[currentindex]= product;
//     localStorage.setItem('productlist',JSON.stringify(products))

//  }
//  function search(searchtxt){ //[5]الفانكشن دى اول حاجه باخد الحرف او الكلمه الا هتنكتب  داخل السيرش وبعدين اعملها فلتره عن طريق الفور لووب
//     var cartona= '';
//     for(var i =0; i <products.length;i++){
//         if(products[i].name.includes(searchtxt))
//         {
//             cartona+=
//             `
//             <tr>
//             <td>${products[i].name}</td>
//             <td>${products[i].price}</td>
//             <td>${products[i].category}</td>
//             <td>${products[i].desc}</td>
//             <td><button onclick="getproductinfo(${i})" class='btn btn-outline-warning'>update</button></td>
//            <td><button onclick="deleteproduct(${i})" class='btn btn-outline-danger'>delete</button></td>
//             </tr>`;
//         }
       
//     }
//     document.getElementById('tablebody').innerHTML = cartona
// }
// var namealert=document.getElementById('alertname');
// productNameinput.onkeyup=function(){
//     var nameRejex=/^[A-Z][a-z]{2,8}$/;
// if(nameRejex.test(productNameinput.value))
// {
// addBtn.removeAttribute('disabled')
// productNameinput.classList.add('is-valid')
// productNameinput.classList.remove('is-invalid')
// namealert.classList.add('d-none')
// }
// else{
//     addBtn.disabled='true'
//     productNameinput.classList.add('is-invalid')
//     productNameinput.classList.remove('is-valid');
//     namealert.classList.remove('d-none')


// }
// }


// var productNameinput = document.getElementById('product Name');
// var productPriceinput = document.getElementById('product Price');
// var productCategoryinput = document.getElementById('product category');
// var productDescinput = document.getElementById('product Desc');
// var inputs=document.getElementsByClassName('form-control')
// produts =[];
//  if(JSON.parse(localStorage.getItem('productlist'))!=null)
//  {
//     produts=JSON.parse(localStorage.getItem('productlist'));
//     displayData()
//  }
 

var productNameInput=document.getElementById('product Name');
var productpriceInput=document.getElementById('product Price');
var productCategoryInput=document.getElementById('product category');
var productDescInput=document.getElementById('product Desc');
var addBtn =document.getElementById('addBtn');
var inputs =document.getElementsByClassName('form-control');
var currentIndex=0;
var nameAlert =document.getElementById('nameAlert');
var products=[];
  if(JSON.parse(localStorage.getItem('productlist')) !=null){
    products=JSON.parse(localStorage.getItem('productlist'))
    displayData();
  }
  

addBtn.onclick =function(){
    if(addBtn.innerHTML=='Add product'){
        addproduct()
    }
    else{
        updateproduct()
    }
    
    displayData()
    recetdata()
}
function  addproduct(){
    var product ={
        name: productNameInput.value,
        price: productpriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,  
    }
    products.push(product)
    localStorage.setItem('productlist',JSON.stringify(products))
}
 function displayData(){
    var cartona =''
    for(var i= 0; i<products.length; i++){
        cartona+=
        `
        <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="getproductinfo(${i})" class='btn btn-outline-warning'>update</button></td>
        <td><button onclick="deleteproduct(${i})" class='btn btn-outline-danger'>delete</button></td>
        </tr>
        `;
    }
    document.getElementById('tablebody').innerHTML= cartona;

 }
function deleteproduct(index){
    products.splice(index,1)
    displayData();
    localStorage.setItem('productlist',JSON.stringify(products))

    
}
function recetdata(){
    
    for(var i=0; i<inputs.length; i++){
        inputs[i].value= ''

    }
    
}
function search(searchtxt){
    var cartona =''
    for(var i= 0; i<products.length; i++){
        if(products[i].name.toLowerCase().includes(searchtxt.toLowerCase()))
        {
            cartona+=
            `
            <tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].desc}</td>
            <td><button onclick="getproductinfo(${i})" class='btn btn-outline-warning'>update</button></td>
            <td><button onclick="deleteproduct(${i})" class='btn btn-outline-danger'>delete</button></td>
            </tr>
            `;
        }
       
    }
    document.getElementById('tablebody').innerHTML= cartona;

 }
 function getproductinfo(index){
 currentindex = index;
var currentproduct = products[index]
console.log(currentproduct)
    productNameInput.value = currentproduct.name
    productpriceInput.value = currentproduct.price
    productCategoryInput.value = currentproduct.category
    productDescInput.value = currentproduct.desc
    addBtn.innerHTML= "update product"
}
function updateproduct(){
    var product =
    {
        name: productNameInput.value,
        price: productpriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,  
    }
    products[currentindex]=product;
    localStorage.setItem('productlist',JSON.stringify(products))
}
 
productNameInput.onkeyup=function(){
    var nameRejex=/^[A-Z][a-z]{2,8}$/;
    if(nameRejex.test(productNameInput.value)) 
    {
        addBtn.removeAttribute('disabled')
        productNameInput.classList.add('is-valid')
        productNameInput.classList.remove('is-invalid')
        nameAlert.classList.add('d-none')
    }
    else
    {
        addBtn.disabled='true'
        productNameInput.classList.add('is-invalid')
        productNameInput.classList.remove('is-valid')
        nameAlert.classList.remove('d-none')

    }
}    


