//https://stackoverflow.com/questions/33747398/html-audio-tag-volume//
var audio = document.getElementById("myaudio");
    audio.volume = 0.2;

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 750);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

//difficulty buttons//
var sectionEasy = document.getElementById("easy-game");
var sectionMed = document.getElementById("med-game");
var sectionHard = document.getElementById("hard-game");
var easyBtn = document.getElementById("easy");
var medBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");
var modalDiff = document.getElementsByClassName("d-modal")[0]; 

easyBtn.onclick = function() {
    modalDiff.style.display = "none";
    sectionEasy. style.display = "flex";
    sectionMed.style.display = "none";
    sectionHard.style.display = "none";
}

medBtn.onclick = function() {
    modalDiff.style.display = "none";
    sectionEasy.style.display = "none";
    sectionMed.style.display = "flex";
    sectionHard.style.display = "none";
}

hardBtn.onclick = function() {
    modalDiff.style.display = "none";
    sectionEasy.style.display = "none";
    sectionMed.style.display = "none";
    sectionHard.style.display = "flex";
}
//difficulty buttons end//

var modal = document.getElementById("instructionsModal");
var btn = document.getElementById("instructions-btn");
var span = document.getElementsByClassName("close-btn")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var settingsModal = document.getElementById("settingsModal");
var settingsBtn = document.getElementById("settings-btn");
var settingsSpan = document.getElementById("settingsSpan");
settingsBtn.onclick = function() {
  settingsModal.style.display = "block";
}
settingsSpan.onclick = function() {
  settingsModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
  }
}

var diffModal = document.getElementById("diffModal");
var difficultyBtn = document.getElementById("difficulty-btn");
var diffSpan = document.getElementById("diffSpan");
difficultyBtn.onclick = function() {
  diffModal.style.display = "block";
}
diffSpan.onclick = function() {
  diffModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == diffModal) {
    diffModal.style.display = "none";
  }
}