const text = document.querySelector("#input");
const output = document.querySelector("#output");
const increase = document.querySelector("#plus");
const decrease = document.querySelector("#minus");

increase.addEventListener("click", () => addition(true) );
decrease.addEventListener("click", () => addition(false) );

let sizeFont = 20;
text.style.fontSize = `${sizeFont}px`;

function addition  (add) {
  output.innerText = text.value;
  if (add) {
    sizeFont += 2;
  } else {
    sizeFont -= 2;
  }
  output.style.fontSize = `${sizeFont}px`;
};































