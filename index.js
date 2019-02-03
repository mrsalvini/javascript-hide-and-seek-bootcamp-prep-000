function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  const aux = document.querySelectorAll("#grand-node div")
  return aux[aux.length - 1]
}