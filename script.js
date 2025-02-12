const comments = [
  "I love how passionate you are about the things you love",
  "You can do it!",
  "Believe in yourself.",
  "Your eyes are so pretty.",
  "Your smile is contagious!",
  "You have the most comforting touch!"
];

function getComment() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  document.getElementById("comment").textContent = comments[randomIndex];
}

