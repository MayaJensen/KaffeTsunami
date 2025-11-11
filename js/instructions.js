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

// nulstiller alt indhold:
function skjulAltIndhold() {
  document.querySelector(".info-text > h2").textContent = "";
  document.querySelector(".info-text > article > p").textContent = "";

  document.querySelector(".info-text .info1").textContent = "";
  document.querySelector(".info-text .info2").textContent = "";
  document.querySelector(".info-text .info3").textContent = "";
  document.querySelector(".info-text .infoT1").textContent = "";
  document.querySelector(".info-text .infoT2").textContent = "";
  document.querySelector(".info-text .infoT3").textContent = "";
}

document
  .querySelector("#forberedelse")
  .addEventListener("click", forberedelseF);
function forberedelseF() {
  skjulAltIndhold();
  console.log("forberedelseF er klikklet");
  resetClasses();
  document.querySelector("#huse").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent =
    "Hvordan forbreder du dig?";
  document.querySelector(".info-text .infoT1").textContent = "";
  document.querySelector(".info-text .infoT1").textContent =
    "En kaffetsunami kan ramme uden varsel, men god forberedelse gør en forskel. Sørg for at kende din evakueringsrute, hav en nødpakke klar med vand, mad og førstehjælp, og følg altid myndighedernes anvisninger. Bliv indendørs, indtil det er sikkert, og hjælp andre, hvis du kan. Sammen kan vi handle hurtigt og trygt, når naturen viser sin styrke. 1. Sørg for huset er godt isoleret. 2. Bliv indendøre til andet er meldt ud.\n3. Hav en nødforsygninger klar.\n4. Følg myndighedernes opdateringer. 5. Orienter dig om nærmeste evakurerings belligenhed";
}

document.querySelector("#evuekation").addEventListener("click", evuekationF);

function evuekationF() {
  skjulAltIndhold();
  console.log("evuekationF er klikklet");
  resetClasses();
  document.querySelector("#lade").classList.add("my_scale2");
  document.querySelector(".info-text h2").textContent = "Evuekation";
  document.querySelector(".info-text .infoT2").textContent = "";
  document.querySelector(".info-text .infoT2").textContent =
    "Ved en kaffetsunami vil lokale evakueringscentre blive åbnet for at give tryghed og støtte til alle berørte. Her kan du finde midlertidigt ophold, varme, mad og drikke, samt adgang til førstehjælp og basale fornødenheder. Personalet på centrene står klar til at hjælpe med registrering, familiesammenføring og praktiske oplysninger om, hvornår det er sikkert at vende hjem. Der vil også være krisehjælp tilgængelig for dem, der har brug for samtale og støtte. Alle centre samarbejder med redningstjenester og myndigheder for at sikre hurtig og effektiv hjælp under hele evakueringsperioden.";
}

document
  .querySelector("#efterfølgerne")
  .addEventListener("click", efterfølgerneF);

function efterfølgerneF() {
  skjulAltIndhold();
  console.log("efterfølgerneF er klikklet");
  resetClasses();
  document.querySelector("#huse").classList.add("my_scale3");
  document.querySelector("#lade").classList.add("my_scale3");
  document.querySelector("#træer").classList.add("my_scale3");
  document.querySelector("#bil").classList.add("my_scale3");

  document.querySelector(".info-text h2").textContent = "Efterfølgerne";

  document.querySelector(".info-text .infoT3").textContent = "";
  document.querySelector(".info-text .infoT3").textContent =
    "Når tsunamien har lagt sig, er det vigtigt at handle roligt og sikkert. Undgå at vende hjem, før myndighederne har givet grønt lys, da området stadig kan være farligt på grund af oversvømmelse, strøm eller bygningsskader. Når det er sikkert at vende tilbage, skal du gennemgå din bolig for skader og dokumentere dem. Hvis dit hus eller ejendele er blevet beskadiget, kan du udfylde formularen ved at klikke på knappen nedenfor. Her kan du anmelde skader, så hjælpen kan komme hurtigst muligt. Hold dig desuden orienteret om oprydningsarbejde og støtteordninger, og søg hjælp, hvis du oplever ubehag eller stress efter hændelsen. Sammen kan vi genoprette trygheden - ét skridt ad gangen.";
}
// document.querySelector("#efficiency").textContent =
//   "Når tsunamien har lagt sig, er det vigtigt at handle roligt og sikkert. Undgå at vende hjem, før myndighederne har givet grønt lys, da området stadig kan være farligt på grund af oversvømmelse, strøm eller bygningsskader. Når det er sikkert at vende tilbage, skal du gennemgå din bolig for skader og dokumentere dem. Hvis dit hus eller ejendele er blevet beskadiget, kan du udfylde formularen ved at klikke på knappen nedenfor. Her kan du anmelde skader, så hjælpen kan komme hurtigst muligt. Hold dig desuden orienteret om oprydningsarbejde og støtteordninger, og søg hjælp, hvis du oplever ubehag eller stress efter hændelsen. Sammen kan vi genoprette trygheden - ét skridt ad gangen.";

// function kortinfo() {
//   console.log("kortinfo");

//   document.querySelector(".info-text").style.display = "block";
//   document.querySelector(".info-text > h2").textContent = "Kortspil";
//
//   document.querySelector(".info-text .hondbold").textContent = "";
//   document.querySelector(".info-text .volleyball").textContent = "";
//   document.querySelector(".info-text .basketball").textContent = "";
//   document.querySelector(".info-text .basketball").textContent = "";

//   document.querySelector(".info-text .spil1").textContent = ""
//     "UNO: UNO spilles med specielle kort og er let at lære. Hver spiller får 7 kort, og man skal komme af med dem alle. Man lægger kort ned, der matcher i farve eller tal. Nogle kort har særlige effekter, som at springe en spiller over eller tvinge en anden til at trække kort. Når man kun har ét kort tilbage, skal man sige 'UNO'! Den, der kommer af med alle sine kort først, vinder.";

//   document.querySelector(".info-text .spil2").textContent =
//     "Sorteper: I Sorteper gælder det om at lave stik med ens kort (f.eks. to konger eller to syvere) og komme af med dem. Men der er ét kort uden makker – Sorteper. Man trækker skiftevis kort fra hinanden og lægger stik ned. Til sidst sidder én spiller tilbage med Sorteper – og den person taber.";

//   document.querySelector(".info-text .spil3").textContent =
//     "31: I 31 handler det om at få kort, der tilsammen giver 31 i én farve. Hver spiller får 3 kort og kan bytte ét kort ad gangen med bunken. Når man tror, man har det højeste, siger man 'bank'. Så får de andre én sidste tur. Den med lavest point ryger ud – og man spiller videre, indtil én er tilbage.";
// }
