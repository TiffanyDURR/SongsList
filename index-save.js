let data = [
  {
    element: "Ouvre les yeux",
  },
  {
    element: "Reviens",
  },
  {
    element: "On la tire ici",
  },
  {
    element: "Elle danse",
  },
  {
    element: "Hey baybay !",
  },
  {
    element: "I love U so much",
  },
  {
    element: "Cliquer comme un con",
  },
  {
    element: "On est le monde",
  },
  {
    element: "Comptez sur moi",
  },
  {
    element: "Les futurs parents",
  },
  {
    element: "Le plus grand des bonheurs",
  },
  {
    element: "Latino Latina",
  },
  {
    element: "Bon voyage",
  },
];

function shuffle(array) {
  let shuffledArray = [...array];
  let currentIndex = shuffledArray.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
}

let shuffledData = shuffle(data);

let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML = shuffledData[i].element;
}

let dragged;

document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    event.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  function (event) {
    if (event.target.className === "card") {
      event.preventDefault();
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className === "card") {
      let targetContent = event.target.innerHTML;
      event.target.innerHTML = dragged.innerHTML;
      dragged.innerHTML = targetContent;
    }
  },
  false
);

let clickCount = 0;

function checkOrder() {
  clickCount++;
  let cards = document.querySelectorAll(".card");
  let errors = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].innerHTML != data[i].element) {
      errors++;
    }
  }

  if (errors === 0) {
    alert("Gagné!");
    document.querySelector("#result").innerHTML =
      "Nombre de clics: " + clickCount;
    document.querySelector("#validate").style.display = "none";
    document.querySelector("#replay").style.display = "block";
  } else {
    alert("Il y a " + errors + " erreurs.");
  }
}

function replay() {
  clickCount = 0;
  shuffledData = shuffle(data);
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = shuffledData[i].element;
  }
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#validate").style.display = "block";
  document.querySelector("#replay").style.display = "none";
}
