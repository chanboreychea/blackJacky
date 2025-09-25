const data = {
  en: {
    lastname: "CHEA",
    firstname: "CHANBOREY",
    quotes: "Nothing lasts forever,</br> But we can change the future.",
    logo: "assets/img/cheachanborey_purple.png",
  },
  kh: {
    lastname: "ជា",
    firstname: "ច័ន្ទបូរី",
    quotes: "គ្មានអ្វីដែលនៅឋិតថេរទេ,</br> ប៉ុន្តែយើងអាចផ្លាស់ប្តូរអនាគតកាល។",
    logo: "assets/img/cheachanborey_red.png",
  },
};

const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const quotes = document.getElementById("quotes");
const gear = `<i class="fa fa-gear fa-spin" style="font-size: 16px"></i>`;

function setLang(lang) {
  if (!data[lang]) return console.warn(`Language "${lang}" not found`);

  document.getElementById("logo-img").src = data[lang].logo || "";

  lastname.textContent = data[lang].lastname || "";

  firstname.innerHTML =
    (data[lang].firstname || "") + (lang == "en" ? gear : "");

  quotes.innerHTML = data[lang].quotes || "";

  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang-switch").forEach((el) => {
  el.addEventListener("click", () => setLang(el.dataset.lang));
});

const savedLang = localStorage.getItem("lang") || "en";
setLang(savedLang);
