let flipped = false;

function flipCard() {
  const card = document.getElementById("card");
  const frontContent = document.getElementById("front-content");
  const backContent = document.getElementById("back-content");

  card.classList.toggle("flipped");

  setTimeout(() => {
    if (!flipped) {
      frontContent.innerHTML = "New Front Content";
      backContent.innerHTML = "New Back Content";
    } else {
      frontContent.innerHTML = "Front Side";
      backContent.innerHTML = "Back Side";
    }
    flipped = !flipped;
  }, 300);
}
