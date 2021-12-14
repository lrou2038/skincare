const changeParagraph = () => {
	const paragraph = document.querySelector(“p”);
	paragraph.textContent = “This text has changed because you clicked the button.”
};


function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("button");
  //   var btnText1 = document.getElementById("button6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    // btnText1.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    // btnText1.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
