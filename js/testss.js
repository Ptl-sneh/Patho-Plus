function toggleDropdown1(id) {
  var dropdown = document.getElementById(id);
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}

function filterTests(category) {
  var testCards = document.getElementsByClassName("test-card1");
  for (var i = 0; i < testCards.length; i++) {
    var card = testCards[i];
    if (
      category === "All" ||
      card.getAttribute("data-category").includes(category)
    ) {
      document.getElementById("head").innerHTML = category;
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

// Function to open the view details modal




