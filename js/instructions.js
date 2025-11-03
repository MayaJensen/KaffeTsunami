console.log("Loaded instructions...");

document
  .querySelector("#forberedelse")
  .addEventListener("click", forberedelseF);

function forberedelseF() {
  console.log("forberedelseF er klikklet");
  document.querySelector("#huse").classList.add("my_scale");
  document.querySelector("my_scale").addEventListener("click");
}

document.querySelector("#evuekation").addEventListener("click", evuekationF);

function evuekationF() {
  console.log("evuekationF er klikklet");
  document.querySelector("#lade").classList.add("my_scale2");
  document.querySelector("my_scale2").addEventListener("click");
}

document
  .querySelector("#efterfølgerne")
  .addEventListener("click", efterfølgerneF);

function efterfølgerneF() {
  console.log("efterfølgerneF er klikklet");
  document.querySelector("#huse, #lade").classList.add("my_scale3");
  document.querySelector("my_scale3").addEventListener("click");
}
