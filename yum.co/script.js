const searchDiv = document.getElementById("searchDiv");
const btnClose = document.getElementById("btnClose");
const links = document.getElementById("links");

const btnMenu = document.getElementById("menu");
const btnSearch = document.getElementById("btnSearch");
const viewCart = document.getElementById("viewCart");
const account = document.getElementById("account");


const cCart = document.getElementById("cCart");
const sSign = document.getElementById("sSign");
const btncClose = document.getElementById("cClose");
const btnsClose = document.getElementById("sClose");
const addCart = document.getElementById("addCart");
const vViewCart = document.getElementById("vViewCart");
const total = document.getElementById("total");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const dmap = document.getElementById("dmap");
const gMap = document.getElementById("gMap");
const parent = document.querySelector(".parent");
links.classList.toggle("disable");



let itemsInCart = JSON.parse(localStorage.getItem("Cart"));
let sum = 0;
let products = document.querySelectorAll(".item");
if(!itemsInCart){itemsInCart = []};
const getAllSum = function(){
    let alsum = 0;
    itemsInCart.forEach(product =>{
        alsum += product.price;
    });
    return alsum;
}

const updateCartHtml = function(){
    localStorage.setItem("Cart", JSON.stringify(itemsInCart));
    if(itemsInCart.length > 0){
        let result = itemsInCart.map(product =>{
            return `
            <li>
                <img src="${product.image}">
                <div>
                    <h5>${product.name}</h5>
                    <h6>Ksh. ${product.price}</h6>
                    <div>
                        <i class="fa fa-minus-circle" data-id="${product.id}" id="minus" aria-hidden="true"></i>
                        <span id="quantity">${product.count}</span>
                        <i class="fa fa-plus-circle" data-id="${product.id}" id="plus" aria-hidden="true"></i>
                    </div>
                </div>
            </li>
            `
        });
        parent.innerHTML = result.join("");

        document.querySelector(".cButton").classList.remove("disable");
        total.innerHTML = `<h3 class="total" id="total">Total: <span>Ksh. ${getAllSum()}</span></h3>`
    }else{
        document.querySelector(".cButton").classList.add("disable");
        //no items in cart
        total.innerText = "No items!"
    }
}


function updateCartProducts(product){
    for(let i = 0; i < itemsInCart.length; i++){
        if(itemsInCart[i].id == product.id){
            itemsInCart[i].count += 1;
            itemsInCart[i].price = itemsInCart[i].basePrice * itemsInCart[i].count;
            return;
        }
    }
    itemsInCart.push(product);
    //alert("(" + itemsInCart.length + ")");
}





products.forEach(product => {
    product.addEventListener("click", (e) =>{
        if(e.target.classList.contains('orderitem')){
            const productID = e.target.dataset.productId;
            const productName = product.querySelector(".productName").innerText;
            const productPrice = product.querySelector(".price").innerText.substring(4);
            const productImage = product.querySelector("img").src;
            let pCart = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice
            }
            viewCart.style.background = '#000';
            ShowLoad();
            

            updateCartProducts(pCart);
            
            updateCartHtml();
        }
    })
})
async function ShowLoad(){
    await sleep(500);
    viewCart.style.background = '#eeeeee';
}





btnClose.addEventListener("click", () => {
    searchDiv.classList.toggle("disable");
});

btncClose.addEventListener("click", () => {
    cCart.classList.toggle("disable");
});

btnsClose.addEventListener("click", () => {
    sSign.classList.toggle("disable");
});

account.addEventListener("click", () => {
    sSign.classList.toggle("disable");
});

viewCart.addEventListener("click", () => {
    cCart.classList.toggle("disable");
});


btnSearch.addEventListener("click", () => {
    searchDiv.classList.toggle("disable");
});

btnMenu.addEventListener("click", () => {
    links.classList.toggle("disable");
});


parent.addEventListener("click", (e) =>{
    const reducing = e.target.classList.contains("fa-minus-circle");
    const adding = e.target.classList.contains("fa-plus-circle");
    if(adding || reducing){
        for(i = 0; i < itemsInCart.length; i++){
            if(itemsInCart[i].id == e.target.dataset.id){
                if(adding){
                    itemsInCart[i].count += 1;
                }else{
                    itemsInCart[i].count -= 1;
                }
                itemsInCart[i].price = itemsInCart[i].basePrice * itemsInCart[i].count;
            }
            if(itemsInCart[i].count <= 0){
                itemsInCart.splice(i, 1);
            }
        }
        updateCartHtml();
    }
})

try {
    vViewCart.addEventListener("click", () => {
        cCart.classList.toggle("disable");
    });
} catch (error) {
    
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
updateCartHtml();