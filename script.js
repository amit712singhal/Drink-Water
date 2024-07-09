const smallCups = document.querySelectorAll(".cup-sm");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  //for last cup toggling
  if (smallCups[7].classList.contains("full")) idx--;
  //for remaining cups toggling
  else if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  )
    idx--;

  //fills cup & its previous ones
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) cup.classList.add("full");
    else cup.classList.remove("full");
  });
}
