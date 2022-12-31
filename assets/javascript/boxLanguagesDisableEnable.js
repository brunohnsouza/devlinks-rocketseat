const languageSelected = document.querySelector(".language-selected")
const boxLanguages = document.getElementById("boxLanguages")
const caret = document.querySelector(".caret")

languageSelected.onclick = function () {
  if (boxLanguages.classList.contains("disable")) {
    caret.classList.toggle("caret-rotate")
    boxLanguages.classList.remove("disable")
    boxLanguages.classList.add("enable")
  } else {
    caret.classList.toggle("caret-rotate")
    boxLanguages.classList.remove("enable")
    boxLanguages.classList.add("disable")
  }
}
