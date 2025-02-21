function bookHomeVisit() {
  let form = document.getElementById("homeVisitForm");
  let name = form.name.value;
  let test = form.test.value;
  let branch = form.branch.value;
  let date = form.date.value;

  if (name && test && branch && date) {
    document.getElementById(
      "confirmationMessage"
    ).innerText = `✅ Thank you, ${name}! Your ${test} test is booked at ${branch} on ${date}.`;
    document.getElementById("confirmationMessage").style.display = "block";

    form.reset(); // Reset form after submission
  } else {
    alert("Please fill out all required fields.");
  }
}
