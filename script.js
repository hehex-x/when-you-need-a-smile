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

function createGiftJars() {
  const numJars = 20; // Number of gift jars
  const container = document.getElementById("gift-jar-container");

  for (let i = 0; i < numJars; i++) {
    const jar = document.createElement("div");
    jar.classList.add("gift-jar");

    // Random position for the gift jar
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    jar.style.left = `${x}px`;
    jar.style.top = `${y}px`;

    // Random rotation for variety
    const rotation = Math.random() * 360;
    jar.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(jar);
  }
}

// Call the function to create gift jars
createGiftJars();