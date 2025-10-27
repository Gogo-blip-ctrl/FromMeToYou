// =========================
// 🎭 Meme Data
// =========================
const memes = [
  { src: "Pic/Meme1.jpg", quote: "Trying to be productive like..." },
  { src: "Pic/Meme2.jpg", quote: "Realisation hits different." },
  { src: "Pic/Meme3.jpg", quote: "When you study 10 minutes..." },
  { src: "Pic/Meme4.jpg", quote: "Trying not to look suspicious like..." },
  { src: "Pic/Meme5.jpg", quote: "When reality hits you 😭" },
  { src: "Pic/Meme6.jpg", quote: "If only..." },
  { src: "Pic/Meme7.jpg", quote: "Why... where... how..." },
  { src: "Pic/Meme8.jpg", quote: "When petty calls you 👀" },
  { src: "Pic/Meme9.jpg", quote: "*Sad cries in productivity*" }
];

const loveMemes = [
  { src: "Pic/Love1.jpg", quote: "When I think of you 💞" },
  { src: "Pic/Love2.jpg", quote: "Agony 😩" },
  { src: "Pic/Love3.jpg", quote: "Keep 'em 😏" },
  { src: "Pic/Love4.jpg", quote: "Now listen to me!" },
  { src: "Pic/Love5.jpg", quote: "🥰" },
  { src: "Pic/Love6.jpg", quote: "If it tingles, it's me 😘" },
  { src: "Pic/Love7.jpg", quote: "Everytimmmmmmeeee 💫" },
  { src: "Pic/Love8.jpg", quote: "It's a promise 😍😝" },
  { src: "Pic/Love9.jpg", quote: "I'm addicted 🤤" }
];

// =========================
// 🎨 Elements
// =========================
const memeButton = document.getElementById("memeButton");
const loveButton = document.getElementById("loveButton");
const chaosButton = document.getElementById("chaosButton");
const memeImage = document.getElementById("memeImage");
const memeQuote = document.getElementById("memeQuote");
const memeContainer = document.getElementById("memeContainer");

// =========================
// 💖 Loading Heart Setup
// =========================
const loadingHeart = document.createElement("div");
loadingHeart.id = "loadingHeart";
loadingHeart.textContent = "💖 Loading love and laughter...";
loadingHeart.style.display = "none";
memeContainer.appendChild(loadingHeart);

function showLoadingHeart() {
  memeImage.classList.remove("show");
  memeQuote.classList.remove("show");
  loadingHeart.style.display = "block";
}

function hideLoadingHeart() {
  loadingHeart.style.display = "none";
}

// =========================
// 🎨 Background Colors
// =========================
const colors = [
  "linear-gradient(135deg, #f0e6d2, #d1bfa7)",
  "linear-gradient(135deg, #b8c6db, #f5f7fa)",
  "linear-gradient(135deg, #f5d5cb, #f9f3f3)",
  "linear-gradient(135deg, #c2e59c, #64b3f4)",
  "linear-gradient(135deg, #e0c3fc, #8ec5fc)"
];

// =========================
// 💻 Meme Button (Relatable)
// =========================
memeButton.addEventListener("click", () => {
  showLoadingHeart();

  setTimeout(() => {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    memeImage.src = randomMeme.src;
    memeQuote.textContent = randomMeme.quote;

    memeImage.classList.add("show");
    memeQuote.classList.add("show");

    hideLoadingHeart();

    document.body.style.background =
      colors[Math.floor(Math.random() * colors.length)];
  }, 800);
});

// =========================
// 💞 Love Meme Button
// =========================
loveButton.addEventListener("click", () => {
  showLoadingHeart();

  setTimeout(() => {
    const randomLove = loveMemes[Math.floor(Math.random() * loveMemes.length)];
    memeImage.src = randomLove.src;
    memeQuote.textContent = randomLove.quote;

    memeImage.classList.add("show");
    memeQuote.classList.add("show");

    hideLoadingHeart();

    document.body.style.background =
      "linear-gradient(135deg, #ffd6d6, #ffc4e1)";
  }, 800);
});

// =========================
// 🌈 Chaos Button (Internet Memes)
// =========================
chaosButton.addEventListener("click", async () => {
  showLoadingHeart();

  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    setTimeout(() => {
      hideLoadingHeart();
      memeImage.src = data.url;
      memeQuote.textContent = data.title;

      memeImage.classList.add("show");
      memeQuote.classList.add("show");

      const bgColors = [
        "linear-gradient(135deg, #ffe29f, #ffa99f)",
        "linear-gradient(135deg, #fad0c4, #ffd1ff)",
        "linear-gradient(135deg, #c2e9fb, #a1c4fd)",
        "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
      ];
      document.body.style.background =
        bgColors[Math.floor(Math.random() * bgColors.length)];
    }, 1000);
  } catch (error) {
    hideLoadingHeart();
    memeQuote.textContent = "Oops 😅 couldn’t fetch a meme right now!";
  }
});
