const smallCups = document.querySelectorAll(".cup-sm");
const liters = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateFull();

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

  updateFull();
}

function updateFull() {
  const fullCups = document.querySelectorAll(".cup-sm.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
