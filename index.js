let inc = document.getElementById("increase");
let dec = document.getElementById("decrease");
let reset = document.getElementById("reset");
let count = document.getElementById("count");

inc.addEventListener("click", (e) => {
  let num = parseInt(count.innerText);
  num++;
  if (num > 0) {
    count.style.color = "green";
  } else if (num < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
  count.innerText = num;
});
dec.addEventListener("click", (e) => {
  let num = parseInt(count.innerText);
  num--;
  if (num > 0) {
    count.style.color = "green";
  } else if (num < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
  count.innerText = num;
});
reset.addEventListener("click", (e) => {
  count.innerText = 0;
});
