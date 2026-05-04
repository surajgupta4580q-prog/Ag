const products = [
  {
    name:"Asian Paints Royale",
    price:750,
    image:"https://images.unsplash.com/photo-1581091215367-59ab6b1f1c9c",
  },
  {
    name:"Berger Weather Coat",
    price:680,
    image:"https://images.unsplash.com/photo-1598300055741-3a4e1d3f92f4",
  },
  {
    name:"Wall Primer",
    price:400,
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name:"Paint Brush Set",
    price:120,
    image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    name:"Drill Machine",
    price:2200,
    image:"https://images.unsplash.com/photo-1581093458791-9d7b4e3dc2c3",
  },
  {
    name:"PVC Pipes",
    price:300,
    image:"https://images.unsplash.com/photo-1616627452807-dc5b6db9c2c2",
  }
];

let cart = [];

const container = document.getElementById("products");

function displayProducts(list){
  container.innerHTML="";
  list.forEach((p,i)=>{
    container.innerHTML+=`
    <div class="card">
      <img src="${p.image}">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    </div>`;
  });
}

displayProducts(products);

function addToCart(index){
  cart.push(products[index]);
  updateCart();
}

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;

  let itemsHTML="";
  let total=0;

  cart.forEach(item=>{
    itemsHTML+=`<p>${item.name} - ₹${item.price}</p>`;
    total+=item.price;
  });

  document.getElementById("cartItems").innerHTML = itemsHTML;
  document.getElementById("total").innerText = total;
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}

function checkout(){
  let msg="Order Details:\n";
  cart.forEach(item=>{
    msg+=`${item.name} - ₹${item.price}\n`;
  });

  window.open(`https://wa.me/919369087975?text=${encodeURIComponent(msg)}`);
}

document.getElementById("search").addEventListener("input",(e)=>{
  let val = e.target.value.toLowerCase();
  displayProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
});
