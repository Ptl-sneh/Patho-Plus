var faqItems = document.getElementsByClassName("faq-item");

for (var i = 0; i < faqItems.length; i++) {
  var question = faqItems[i].getElementsByClassName("faq-question")[0];

  question.onclick = function () {
    var answer = this.parentNode.getElementsByClassName("faq-answer")[0];
    var icon = this.getElementsByTagName("span")[1];

    // Close all other answers
    for (var j = 0; j < faqItems.length; j++) {
      var otherAnswer = faqItems[j].getElementsByClassName("faq-answer")[0];
      var otherIcon = faqItems[j]
        .getElementsByClassName("faq-question")[0]
        .getElementsByTagName("span")[1];

      if (otherAnswer !== answer) {
        otherAnswer.style.maxHeight = "0px";
        otherIcon.innerHTML = "+";
      }
    }

    // Toggle answer with smooth transition
    if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.innerHTML = "-";
    } else {
      answer.style.maxHeight = "0px";
      icon.innerHTML = "+";
    }
  };
}