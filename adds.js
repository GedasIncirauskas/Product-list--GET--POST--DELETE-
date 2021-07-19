function createFormWithInput() {
  const form = document.createElement("form");
  const title = document.createElement("input");
  title.name = "title";
  title.placeholder = "Enter title";

  const image = document.createElement("input");
  image.placeholder = "Enter img URL";
  image.name = "image";

  const price = document.createElement("input");
  price.placeholder = "Enter price";
  price.name = "price";

  const btn = document.createElement("button");
  btn.textContent = "Add product";
  btn.setAttribute("type", "submit");
  form.append(title, image, price, btn);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      title: { value: titleValue },
      image: { value: image },
      price: { value: price },
    } = event.target.elements;
    postProductToServer(titleValue, image, price);
  });
  return form;
}

const form = createFormWithInput();
document.body.appendChild(form);

function postProductToServer(title, image, price) {
  fetch("https://golden-whispering-show.glitch.me", {
    method: "POST",
    body: JSON.stringify({
      title,
      image,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
}
