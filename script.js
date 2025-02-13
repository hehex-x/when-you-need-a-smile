const comments = [
  "I love how passionate you are about the things you love",
  "You can do it!",
  "Believe in yourself.",
  "Your eyes are so pretty.",
  "Your smile is contagious!",
  "You have the most comforting touch!",
  "I love you ! :) ",
  "You got this baccha 🤗",
  "May you always win at the things you love "
];
const tags = ["sunshine", "love", "motivation", "happiness"]; // Array of tags

const accessKey = "KTdKoeeVifQZ4NJHYvJd6a4AEfKZsugPjthmos7ERb4"; // Replace with your actual key

async function getComment() {
  const randomCommentIndex = Math.floor(Math.random() * comments.length);
  document.getElementById("comment").textContent = comments[randomCommentIndex];

  const randomTagIndex = Math.floor(Math.random() * tags.length);
  const tag = tags[randomTagIndex];

  const imageUrl = await getUnsplashImage(tag);
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

async function getUnsplashImage(tag) {
  const url = `https://api.unsplash.com/photos/random?client_id=${KTdKoeeVifQZ4NJHYvJd6a4AEfKZsugPjthmos7ERb4}&query=${tag}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular; // Or 'small', 'thumb' based on your needs
  } catch (error) {
    console.error("Error fetching image:", error);
    return "default-background.jpg"; // Fallback image
  }
}
function getComment() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  document.getElementById("comment").textContent = comments[randomIndex];
}
