document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "02122022";
  const bgMusic = document.getElementById("bgMusic");
  const passwordScreen = document.getElementById("passwordScreen");
  const mainContent = document.getElementById("mainContent");

  window.checkPassword = function () {
    const input = document.getElementById("passwordInput").value;

    if (input === correctPassword) {
      passwordScreen.style.display = "none";
      mainContent.classList.remove("hidden");
      bgMusic.play().catch(()=>{});
      loadQuestion();
    } else {
      alert("Wrong password 😜");
    }
  };

  // Countdown
  const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m";
  }, 1000);

  let currentQuestion = 0;

  const questions = [
    {
      question: "If we were characters in a romantic series, who would we be? 🎬",
      answers: ["Dhruv-Kavya (Little Things)", "Rishi-Dimple (Mismatched)"]
    },
    {
      question: "Who fell in love first? 💕",
      answers: ["Me 😎", "You 😘"]
    },
    {
      question: "Our dream trip together? 🌍",
      answers: ["Greece 🌊", "Paris 🗼"]
    },
    {
      question: "You are my...? 💖",
      answers: ["World", "Universe"]
    },
    {
      question: "Will you be my Valentine forever? 💍",
      answers: ["YES ❤️", "YES FOREVER 💕"]
    }
  ];

  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.onclick = nextQuestion;
      answersDiv.appendChild(btn);
    });
  }

  function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
    } else {
      loadQuestion();
    }
  }

});
function showFinal() {
  document.getElementById("confirmation").style.display = "none";
  document.getElementById("final-screen").classList.remove("hidden");

  window.scrollTo({
    top: document.getElementById("final-screen").offsetTop,
    behavior: "smooth"
  });
}
