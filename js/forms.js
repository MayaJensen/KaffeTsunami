document.querySelectorAll(".info-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tooltip = btn.nextElementSibling;

    // Luk andre tooltips
    document.querySelectorAll(".tooltip").forEach((t) => {
      if (t !== tooltip) t.classList.remove("show");
    });

    tooltip.textContent = btn.dataset.info;
    tooltip.classList.toggle("show");
  });
});

// Luk tooltip hvis man klikker udenfor
document.addEventListener("click", (e) => {
  if (!e.target.closest(".tooltip-wrapper")) {
    document
      .querySelectorAll(".tooltip")
      .forEach((t) => t.classList.remove("show"));
  }
});

const form = document.querySelector("#webform");

// Summary felter
const sumName = document.querySelector("#sumName");
const sumCPR = document.querySelector("#sumCPR");
const sumMobil = document.querySelector("#sumMobil");
const sumEmail = document.querySelector("#sumEmail");
const sumAdresse = document.querySelector("#sumAdresse");
const sumPost = document.querySelector("#sumPost");
const sumBy = document.querySelector("#sumBy");
const sumV = document.querySelector("#sumV");
const sumB = document.querySelector("#sumB");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // stop reload

  const formData = new FormData(form);

  // henter data fra form
  const name = formData.get("navn");
  const cpr = formData.get("cpr");
  const telefon = formData.get("telefon");
  const email = formData.get("email");
  const adresse = formData.get("adresse");
  const post = formData.get("postnummer");
  const by = formData.get("by");
  const skade = formData.get("skade");
  const beskrivelse = formData.get("beskrivelse");

  // sætter summary tekst
  sumName.textContent = name;
  sumCPR.textContent = cpr;
  sumMobil.textContent = telefon;
  sumEmail.textContent = email;
  sumAdresse.textContent = adresse;
  sumPost.textContent = post;
  sumBy.textContent = by;
  sumV.textContent = skade;
  sumB.textContent = beskrivelse;

  form.reset("#reset_btn"); // reset form TIL SIDST
}

const resetBtn = document.querySelector("#reset_btn");

resetBtn.addEventListener("click", resetSummary);

function resetSummary() {
  // Tøm summary felter
  sumName.textContent = "";
  sumCPR.textContent = "";
  sumMobil.textContent = "";
  sumEmail.textContent = "";
  sumAdresse.textContent = "";
  sumPost.textContent = "";
  sumBy.textContent = "";
  sumV.textContent = "";
  sumB.textContent = "";

  // Reset form
  form.reset();
}
