// PASSWORD
function checkPassword() {
  const correctPassword = "02122022";
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong password 😜 Try again!");
  }
}

// COUNTDOWN
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m ";
}, 1000);

// QUESTIONS
let currentQuestion = 0;

const questions = [
  { question: "When did we first meet? ✨", answers: ["Destiny 😌", "Best Day Ever ❤️"] },
  { question: "Who loves more? 💕", answers: ["Me 😎", "You 😘"] },
  { question: "Our dream vacation? 🌍", answers: ["Goa 🌊", "Paris 🗼"] },
  { question: "You are my...? 💖", answers: ["Peace ☁️", "Forever ♾️"] },
  { question: "Will you be my Valentine forever? 💍", answers: ["YES ❤️", "YES FOREVER 💕"] }
];

function nextQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let buttonsHTML = "";
    q.answers.forEach(answer => {
      buttonsHTML += `<button onclick="handleAnswer()">${answer}</button>`;
    });

    document.getElementById("answers").innerHTML = buttonsHTML;
    currentQuestion++;
  }
}

function handleAnswer() {
  if (currentQuestion === questions.length) {

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);

  } else {
    nextQuestion();
  }
}

// FLOATING HEARTS
function createHearts() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💘";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createHearts, 300);
/* Banner Background for Opening Screen */
.banner-bg {
  background: url('banner.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
}

/* Dark overlay effect */
.banner-bg::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
}

/* Improve password box visibility */
.center {
  position: relative;
  z-index: 2;
}
.banner-bg {
  animation: zoomEffect 20s infinite alternate;
}

@keyframes zoomEffect {
  from { background-size: 100%; }
  to { background-size: 110%; }
}
