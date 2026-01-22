const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {
  let value = searchInput.value.toLowerCase();

  products.forEach(product => {
    let name = product.dataset.name.toLowerCase();
    product.style.display = name.includes(value) ? "block" : "none";
  });
});
