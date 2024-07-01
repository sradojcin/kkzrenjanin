const defaultBodyFontSize = 16; // Default font size in pixels for body text
const defaultTitleFontSize = 32; // Default font size in pixels for titles
let currentBodyFontSize = defaultBodyFontSize;
let currentTitleFontSize = defaultTitleFontSize;

const tamnaTemaBtns = document.querySelectorAll("#tamnaTemaBtn");
const svetlaTemaBtns = document.querySelectorAll("#svetlaTemaBtn");
const povecajFontBtns = document.querySelectorAll("#povecajFontBtn");
const smanjiFontBtns = document.querySelectorAll("#smanjiFontBtn");

tamnaTemaBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.body.classList.add("dark-theme");
  })
);

svetlaTemaBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.body.classList.remove("dark-theme");
  })
);

povecajFontBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    currentBodyFontSize += 2;
    currentTitleFontSize += 2;
    document.body.style.fontSize = currentBodyFontSize + "px";
    document.querySelector(".naslov").style.fontSize =
      currentTitleFontSize + "px";
  })
);

smanjiFontBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (currentBodyFontSize > 10 && currentTitleFontSize > 20) {
      // Prevent font size from getting too small
      currentBodyFontSize -= 2;
      currentTitleFontSize -= 2;
      document.body.style.fontSize = currentBodyFontSize + "px";
      document.querySelector(".naslov").style.fontSize =
        currentTitleFontSize + "px";
    }
  })
);

const slideshow = document.querySelector(".slideshow");
const images = document.querySelectorAll(".slideshow img");
let cloneImages = Array.from(images).map((img) => img.cloneNode());
cloneImages.forEach((clone) => slideshow.appendChild(clone));

var clanovi = [
  {
    id: 1,
    ime: "Luka Vukovic",
    biografija: "Clan KK Zrenjanin od 2023, 24 godine, +84 kategorija",
    uspeh: "Evropske, balkanske i nacionalne medalje",
  },
  {
    id: 2,
    ime: "Djordje Tesanovic",
    biografija: "Clan KK Zrenjanin od 2023, 25 godina, +84 kategorija",
    uspeh: "Svetska bronza",
  },
  {
    id: 3,
    ime: "Djordje Salaprura",
    biografija: "18 godina clan KK Zrenjanin, 26 godina, -75 kategorija",
    uspeh:
      "Medalje sa sampionata sveta, Evrope, Balkana i Drzave, brojne premier lige",
  },
];

function showPopup(clanId) {
  var clan = clanovi.find((c) => c.id === clanId);
  var popupContent = document.getElementById("popup-content");
  popupContent.innerHTML = `
              <h4>${clan.ime}</h4>
              <p>${clan.biografija}</p>
              <p><strong>Uspesi:</strong> ${clan.uspeh}</p>
          `;
  document.getElementById("popup-overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}
