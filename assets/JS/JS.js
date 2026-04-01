let data=[];
async function rp1() {
     try{
    let D = await fetch ("https://dummyjson.com/products?limit=5");
    D = await D.json();
    data=D.products
    console.log(data);
     read();
    }
    catch(err){
        console.log(err);
    }
}
    rp1();
let DAY=document.getElementsByClassName("day");
let NIGHT=document.getElementsByClassName("night");
let MIDDAY=document.getElementsByClassName("mid-day");
let MIDNIGHT=document.getElementsByClassName("mid-night");
let MID2DAY=document.getElementsByClassName("mid-2-day");
let MID2NIGHT=document.getElementsByClassName("mid-2-night");
let MOON=document.querySelector(".MO");
let PRO=document.querySelector(".pp");
let NA=document.getElementsByTagName("nav");
console.log(NA);
let ATT=document.getElementsByClassName("attend");
console.log(ATT);
let X=document.getElementsByClassName("attend2");
console.log(X);
let I=document.getElementsByTagName("i");
console.log(I);
X[0].addEventListener("click",()=>{
   ATT[0].style.display="none";
});
MOON.addEventListener("click",()=>{
    if(NA[0].classList.contains("yes")){
    MOON.innerHTML=`
     <i class="fa-solid fa-sun n4-1"></i>
    `
   for(let i=0;i<DAY.length;i++){
    DAY[i].style.cssText+=`
    background-color: black !important;
    color: white !important;
    border-color: rgb(240, 240, 240 ,0.6) !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
    for(let i=0;i<NIGHT.length;i++){
    NIGHT[i].style.cssText=`
    background-color: #fff !important;
    color: black !important;
    border-color: rgb(15, 15, 15 ,0.6) !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MIDDAY.length;i++){
    MIDDAY[i].style.cssText=`
    background-color: #0F0F0F !important;
    border-color: rgb(240, 240, 240 ,0.6) !important;
    color: white !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MIDNIGHT.length;i++){
    MIDNIGHT[i].style.cssText=`
    background-color: #F2F0F1 !important;
    color: black !important;
    border-color: rgb(15, 15, 15 ,0.6) !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MID2DAY.length;i++){
    MID2DAY[i].style.cssText=`
    color: white !important; 
    background-color: #3E3E3E !important;
    border-color: rgb(240, 240, 240 ,0.6) !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MID2NIGHT.length;i++){
    MID2NIGHT[i].style.cssText=`
    color: black !important;
    background-color: #E3E3E3 !important;
    border-color: rgb(15, 15, 15 ,0.6) !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   console.log("KKK");
   NA[0].classList.remove("yes");
   NA[0].classList.add("no");
}
else{
    MOON.innerHTML=`
     <i class="fa-solid fa-moon n4-1"></i>
    `
   for(let i=0;i<NIGHT.length;i++){
    NIGHT[i].style.cssText=`
    background-color: black !important;
    color: white !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
    for(let i=0;i<DAY.length;i++){
    DAY[i].style.cssText=`
    background-color: #fff !important;
    color: black !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MIDNIGHT.length;i++){
    MIDNIGHT[i].style.cssText=`
    background-color: #0F0F0F !important;
    border-color: rgb(240, 240, 240 ,0.6) !important;
    color: white !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MIDDAY.length;i++){
    MIDDAY[i].style.cssText=`
    background-color: #F2F0F1 !important;
    color: black !important;
    border-color: rgb(15, 15, 15 ,0.6) !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MID2NIGHT.length;i++){
    MID2NIGHT[i].style.cssText=`
    color: white !important; 
    background-color: #3E3E3E !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   for(let i=0;i<MID2DAY.length;i++){
    MID2DAY[i].style.cssText=`
    color: black !important;
    background-color: #E3E3E3 !important;
    transition: background-color 0.3s, color 0.3s;
    `
   }
   console.log("JJJ");
   NA[0].classList.remove("no");
   NA[0].classList.add("yes");
}
});
// function read() {
//     let content = "";
//     for (let i = 0; i < data.length; i++) {
//         content +=`
//         <swiper-slide class="product">
//             <img class="image3" src="${data[i].image}" alt="${data[i].title}">
//             <div class="title">${data[i].title}</div>
//             <div class="description">${data[i].description}</div>
//             <div class="category">${data[i].category}</div>
//             <button class="price" data-index="${i}">${data[i].price} $</button>
//             <div class="SP">
//                 <h4 class="word">SP</h4>
//                 <input class="inp" type="text" placeholder="The cost in SYP...">
//             </div>
//         </swiper-slide>;`
//     }

//     PRO.innerHTML = content;
//     setupInteractions();
// }

// function setupInteractions() {
//     const priceButtons = document.querySelectorAll(".price");
//     const inputs = document.querySelectorAll(".inp");

//     priceButtons.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             const usdPrice = parseFloat(data[index].price);
//             const syrPrice = usdPrice * 12000; 
//             inputs[index].value = syrPrice.toLocaleString() + " SYP";
            
//             console.log("تم تحويل السعر للمنتج رقم" ${index + 1}: ${syrPrice} "ليرة");
//         });
//     });
// }
// renderProducts();
function read(){
    for(let i=0 ; i<data.length ; i++){
       PRO.innerHTML+=`
       <swiper-slide class="product">
       <img class="image3" src="${data[i].images}" alt="${data[i].title}">
        <div class="title">
           ${data[i].title}
        </div>
        <div class="description">
            ${data[i].description}
        </div>
        <div class="category">
            ${data[i].category}
        </div>
        <button class="price">
            ${data[i].price} $
        </button>
        <div class="SP">
            <h4 class="word">SP</h4>
        <input class="inp" type="text" placeholder="  the cost in syrian pound ...">
        </div>
        </swiper-slide>
       `
    }
}
document.addEventListener("click", function(e){
    if(e.target.classList.contains("price")){
        
        let btn = e.target;

        let price = parseFloat(btn.innerText.replace(/[^\d.]/g, ""));

        let result = price * 12000;

        let product = btn.closest(".product");
        let input = product.querySelector(".inp");

        input.value = result;
    }
});
// function read() {
//     let content = ""; 

//     for (let i = 0; i < data.length; i++) {
//         content +=` 
//         <swiper-slide class="product">
//             <img class="image3" src="${data[i].image}" alt="${data[i].title}">
//             <div class="title">${data[i].title}</div>
//             <div class="description">${data[i].description}</div>
//             <div class="category">${data[i].category}</div>
//             <button class="price">${data[i].price}</button>
//             <div class="SP">
//                 <h4 class="word">SP</h4>
//                 <input class="inp" type="text" placeholder="  the cost in syrian pound ...">
//             </div>
//         </swiper-slide>;`
//     }
//     PRO.innerHTML = content;
// }

// read();
// console.log(PRO);

// read();

// let IN = document.querySelectorAll(".inp");
// let PR=document.querySelectorAll(".price");
// for(let i=0 ; i<PR.length ; i++){
//      PR[i].addEventListener("click", () => {
//      let syrprice = data[i].price * 12000;
//      IN[i].value = syrprice;
//      console.log(syrprice);
// });
// }


let CAT=document.querySelector(".n22");
console.log(CAT);
let DIV=document.getElementsByTagName("div");
console.log(DIV);
let N2=document.querySelector(".n2");
console.log(N2);
let N22=document.querySelector(".n22");
CAT.addEventListener("click",()=>{
if(N2.style.display="none"&&N2.classList.contains("rr")){
    N2.style.cssText=`
    display:block;
    display:flex;
    flex-direction:column;
    `;
    N22.style.cssText=`
    animation-name: container;
    animation-duration: 1s;
    transition-timing-function: linear;
    animation-fill-mode: forwards;`
      console.log("yes");
    N2.classList.remove("rr");
    N2.classList.add("aaa");}
else{
    N2.style.display="none";
    N22.style.cssText=`
    animation-name: container1;
    animation-duration: 1s;
    transition-timing-function: linear;
    animation-fill-mode: forwards;`
    N2.classList.remove("aaa");
    N2.classList.add("rr");
}
}
);
console.log(data.products)