function checkPassword() {
  const correctPassword = "02122022";
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
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
  {
    question: "If we were characters in a romantic series, who would we be? 🎬",
    answers: [
      "Dhruv-Kavya (Little Things)",
      "Rishi-Dimple (Mismatched)"
    ]
  },
  {
    question: "Who loves more? 💕",
    answers: ["Me 😎", "You 😘"]
  },
  {
    question: "Our dream vacation? 🌍",
    answers: ["Greece 🇬🇷", "Paris 🇫🇷"]
  },
  {
    question: "You are my...? 🌎",
    answers: ["World 🌍", "Universe 🌌"]
  },
  {
    question: "Will you be my Valentine forever? 💍",
    answers: ["YES ❤️", "YES FOREVER 💕"]
  }
];

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let buttonsHTML = "";
  q.answers.forEach(answer => {
    buttonsHTML += `<button onclick="nextQuestion()">${answer}</button>`;
  });

  document.getElementById("answers").innerHTML = buttonsHTML;
}

function nextQuestion() {
  if (currentQuestion === questions.length - 1) {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  } else {
    currentQuestion++;
    loadQuestion();
  }
}

// Floating hearts
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

loadQuestion();
