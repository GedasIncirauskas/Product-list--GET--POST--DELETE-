const addButton = document.createElement("button");
addButton.textContent = "Enter product";
addButton.className = "btn-style";
addButton.addEventListener("click", () => {
  window.location.href = "/add.html";
});

document.body.prepend(addButton);

function createProductList(data) {
  console.log("tikrinu", data);
  const body = document.body;
  const mainDiv = document.createElement("div");
  mainDiv.className = "grid-container";
  body.append(mainDiv);

  data.forEach((item) => {
    const contentDiv = document.createElement("div");
    contentDiv.className = "grid-item";

    const productImg = document.createElement("img");
    productImg.src = `${item.image}`;
    productImg.alt = `${item.title}`;

    const productTitle = document.createElement("h2");
    productTitle.className = "product-name";
    productTitle.textContent = `${item.title}`;

    const productPrice = document.createElement("h3");
    productPrice.className = "price";
    productPrice.textContent = `€ ${item.price}`;

    const btn = document.createElement("button");
    btn.className = "delete-product";
    btn.textContent = "Delete";
    btn.addEventListener("click", () => {
      fetch(`https://golden-whispering-show.glitch.me/${item.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 1000);
    });

    mainDiv.appendChild(contentDiv);
    contentDiv.appendChild(productImg);
    contentDiv.appendChild(productTitle);
    contentDiv.appendChild(productPrice);
    contentDiv.appendChild(btn);
  });
}

fetch("https://golden-whispering-show.glitch.me")
  .then((response) => response.json())
  .then((data) => {
    createProductList(data);
  })
  .catch((err) => console.log(err));
