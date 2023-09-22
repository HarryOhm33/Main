let price = document.querySelector(".text-success");
let weight = document.querySelector("#weight");

weight.addEventListener("input", () => {
  price.innerHTML = `&#x20B9; ${(999 / 1000) * weight.value}`;
});
