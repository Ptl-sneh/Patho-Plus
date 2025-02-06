const modal1 = document.getElementById("formModal");
const modal2 = document.getElementById("confirmationModal");

const modalContent = modal1.querySelector(".modal_content");
const modalContent2 = modal2.querySelector(".modal_content");

const openModalBtn = document.querySelectorAll(".openModal");
const closeFormModalBtn = document.getElementById("closeFormModal");
const closeConfirmationModalBtn = document.getElementById("closeConfirmationModal");
const okButton = document.getElementById("okButton");

openModalBtn.forEach((button) => {
  button.addEventListener("click", () => {
    modal1.style.display = "block"; // Show the modal
    document.body.style.overflow = "hidden";
    modal1.classList.remove("hide");
    modalContent.classList.remove("hide");
    modal1.classList.add("show");
    modalContent.classList.add("show");
  });
});

closeFormModalBtn.addEventListener("click", () => {
  // modal1.style.display = "none";
    document.body.style.overflow = "visible";
  modal1.classList.remove("show");
  modalContent.classList.remove("show");
  modal1.classList.add("hide");
  modalContent.classList.add("hide");

  setTimeout(() => {
    modal1.style.display = "none";
  }, 500);
});

closeConfirmationModalBtn.addEventListener("click", () => {
  // modal2.style.display = 'none';
  modal2.classList.remove("show");
  document.body.style.overflow = "hidden";
  modalContent2.classList.remove("show");
  modal2.classList.add("hide");
  modalContent2.classList.add("hide");

  setTimeout(() => {
    modal2.style.display = "none";
  }, 500);
});

// Close Confirmation Modal via OK button
okButton.addEventListener("click", () => {
  // modal2.style.display = 'none';
  document.body.style.overflow = "visible";
  modal2.classList.remove("show");
  modalContent2.classList.remove("show");
  modal2.classList.add("hide");
  modalContent2.classList.add("hide");

  setTimeout(() => {
    modal2.style.display = "none";
  }, 500);
});

document.getElementById("testForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if all fields are valid
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (username && email && address && age && gender) {
    modal1.style.display = "none";
    modal1.classList.remove("show");
    modal1.classList.add("hide");

    // Show the confirmation modal
    modal2.style.display = "block";
    modal2.classList.add("show");
    e.target.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none";
    document.body.style.overflow = "visible";
  }
});

window.addEventListener("click", (event) => {
  if (event.target === modal2) {
    modal2.style.display = "none";
    document.body.style.overflow = "visible";
  }
});

// flip

let flipped = false;

function flipCard() {
  const card = document.getElementById("card");
  const frontContent = document.getElementById("front-content");
  const backContent = document.getElementById("back-content");

  card.classList.toggle("flipped");

}
