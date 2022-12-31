let portuguese = document.querySelector(".br")
let english = document.querySelector(".en")

let whoIAm = document.getElementById("whoIAm")
let link1 = document.getElementById("link1")
let link2 = document.getElementById("link2")
let link3 = document.getElementById("link3")
let link4 = document.getElementById("link4")
let footerInformation = document.getElementById("information")

function languagePortuguese() {
  let attribute = portuguese.getAttribute("language")
  let languageSelected = document.querySelector(".language-selected")
  let idiom = document.querySelector("#idiom")

  whoIAm.textContent = data[attribute].whoIAm
  // link1.textContent = data[attribute].link1
  // link2.textContent = data[attribute].link2
  // link3.textContent = data[attribute].link3
  // link4.textContent = data[attribute].link4
  footerInformation.textContent = data[attribute].footerInformation

  idiom.textContent = "Português"
  languageSelected.classList.remove("change-en")
  languageSelected.classList.add("change-br")
}

function languageEnglish() {
  let attribute = english.getAttribute("language")
  let languageSelected = document.querySelector(".language-selected")
  let idiom = document.querySelector("#idiom")

  whoIAm.textContent = data[attribute].whoIAm
  // link1.textContent = data[attribute].link1
  // link2.textContent = data[attribute].link2
  // link3.textContent = data[attribute].link3
  // link4.textContent = data[attribute].link4
  footerInformation.textContent = data[attribute].footerInformation

  idiom.textContent = "English"
  languageSelected.classList.remove("change-br")
  languageSelected.classList.add("change-en")
}

let data = {
  portuguese: {
    whoIAm: "Desenvolvedor Web && Apaixonado em construir coisas com as tecnologias da Web!",
    link1: "", // Seu texto vai aqui (Your text here)
    link2: "", // Seu texto vai aqui (Your text here)
    link3: "", // Seu texto vai aqui (Your text here)
    link4: "", // Seu texto vai aqui (Your text here)
    footerInformation: "Feito com 💜 por mim"
  },
  english: {
    whoIAm: "Web Developer && Passionate about building things with Web technology!",
    link1: "", // Seu texto vai aqui (Your text here)
    link2: "", // Seu texto vai aqui (Your text here)
    link3: "", // Seu texto vai aqui (Your text here)
    link4: "", // Seu texto vai aqui (Your text here)
    footerInformation: "Made with 💜 by me"
  },
}

english.addEventListener("click", languageEnglish)
portuguese.addEventListener("click", languagePortuguese)