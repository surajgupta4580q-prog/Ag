import { db, collection, addDoc, getDocs } from "./firebase.js";

const productContainer = document.getElementById("products");
let cart = [];

// LOAD PRODUCTS
async function loadProducts(){
  const querySnapshot = await getDocs(collection(db, "products"));
  let products = [];

  querySnapshot.forEach(doc=>{
    products.push(doc.data());
  });

  renderProducts(products);
}

function renderProducts(products){
  productContainer.innerHTML = "";

  products.forEach(p=>{
    productContainer.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
      </div>
    `;
  });
}

// CART SYSTEM
function addToCart(product){
  cart.push(product);
  updateCart();
}

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;
}

// CHECKOUT
function checkout(){
  let total = 0;
  let msg = "Order:\n";

  cart.forEach(p=>{
    total += p.price;
    msg += `${p.name} - ₹${p.price}\n`;
  });

  msg += `Total: ₹${total}`;

  window.open(`https://wa.me/919369087975?text=${encodeURIComponent(msg)}`);
}

loadProducts();
