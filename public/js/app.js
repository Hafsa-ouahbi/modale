let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

