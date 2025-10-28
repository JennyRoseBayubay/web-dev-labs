const menuItems = [
  {
    name: "Classic Coffee",
    description: "Rich and aromatic coffee blend",
    price: "$2.50",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    name: "Fresh Sandwich",
    description: "Delicious sandwich with fresh ingredients",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  },
  {
    name: "Delicious Cake",
    description: "Sweet and delightful cake slice",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87"
  },
  {
    name: "Iced Coffee",
    description: "Refreshing iced coffee with a hint of sweetness",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const menuList = document.querySelector(".row");

  menuItems.forEach(item => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-4";

    colDiv.innerHTML = `
      <div class="menu-card card">
        <img src="${item.image}" alt="${item.name}" class="menu-image">
        <div class="card-body text-center">
          <h2>${item.name}</h2>
          <p class="text-muted mb-2">${item.description}</p>
          <p class="fw-bold">${item.price}</p>
          <button class="btn btn-order" onclick="orderItem('${item.name}')">Order Now</button>
        </div>
      </div>
    `;

    menuList.appendChild(colDiv);
  });
});

function orderItem(item) {
  alert("☕ Thank you! You ordered " + item + ".");
}
