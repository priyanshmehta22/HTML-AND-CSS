let modal = document.getElementById("modal");
let button = document.getElementById("btn");
let Close = document.getElementsByClassName("close")[0];

button.addEventListener("click", function () {
  modal.style.display = "block";
});

Close.addEventListener("click", function () {
  modal.style.display = "none";
});

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key == "Escape" && modal.style.display == "block") {
    modal.style.display = "none";
  }
});
