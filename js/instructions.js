console.log("Loaded instructions...");

function resetClasses() {
  document
    .querySelector("#huse")
    .classList.remove("my_scale", "my_scale2", "my_scale3");
  document
    .querySelector("#lade")
    .classList.remove("my_scale", "my_scale2", "my_scale3");
  document
    .querySelector("#træer")
    .classList.remove("my_scale", "my_scale2", "my_scale3");
  document
    .querySelector("#bil")
    .classList.remove("my_scale", "my_scale2", "my_scale3");
}

document
  .querySelector("#forberedelse")
  .addEventListener("click", forberedelseF);

function forberedelseF() {
  console.log("forberedelseF er klikklet");
  resetClasses();
  document.querySelector("#huse").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent =
    "Hvordan forbreder du dig?";
  document.querySelector(".placeholder").textContent =
    "1. Sørg for huset er godt isoleret.\n2. Bliv indendøre til andet er meldt ud.\n3. Hav forsyninger klar.\n4. Følg myndighedernes opdateringer.";
}

document.querySelector("#evuekation").addEventListener("click", evuekationF);

function evuekationF() {
  console.log("evuekationF er klikklet");
  resetClasses();
  document.querySelector("#lade").classList.add("my_scale2");
  document.querySelector(".info-text h2").textContent = "Evuekation";
}

document
  .querySelector("#efterfølgerne")
  .addEventListener("click", efterfølgerneF);

function efterfølgerneF() {
  console.log("efterfølgerneF er klikklet");
  resetClasses();
  document.querySelector("#huse").classList.add("my_scale3");
  document.querySelector("#lade").classList.add("my_scale3");
  document.querySelector("#træer").classList.add("my_scale3");
  document.querySelector("#bil").classList.add("my_scale3");

  document.querySelector(".info-text h2").textContent =
    "Hvordan forholder du dig efter?";
}
