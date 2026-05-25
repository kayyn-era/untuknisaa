const textEl = document.getElementById("text");
const music = document.getElementById("music");

/* Typing effect */
function typeText(text, speed = 40) {
  textEl.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      textEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

/* Start message */
function start() {
  typeText("Kamu itu bukan cuma cantik... tapi sempurna di mataku 😍✨");

  for (let i = 0; i < 40; i++) {
    createHeart();
  }
}

/* Heart generator */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

/* Game */
function startGame() {
  document.getElementById("game").style.display = "block";
}

function winGame() {
  typeText("Kamu menang... tapi sebenarnya aku yang jatuh ke kamu 💖🥰");

  for (let i = 0; i < 60; i++) {
    createHeart();
  }
}

/* Parallax tilt */
const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 25;
  let y = (window.innerHeight / 2 - e.clientY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* Auto play music setelah klik */
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
