const comments = [
  "I love how passionate you are about the things you love",
  "You can do it!",
  "Believe in yourself.",
  "Your eyes are so pretty.",
  "Your smile is contagious!",
  "You have the most comforting touch!",
  "I love you! :)",
  "You got this baccha 🤗",
  "Rail me 👀"
  "You're my whole heart, MC!"
];

const tags = ["sunshine", "love", "motivation", "happiness"]; // Array of tags
const accessKey = "oOPzk_rxk2u3ssOFhfynw02gbvC56QLvjZ_IljxFPqo"; // Your Unsplash API key

async function getComment() {
  // Get a random comment
  const randomCommentIndex = Math.floor(Math.random() * comments.length);
  document.getElementById("comment").textContent = comments[randomCommentIndex];

  // Get a random tag
  const randomTagIndex = Math.floor(Math.random() * tags.length);
  const tag = tags[randomTagIndex];

  // Fetch an image from Unsplash based on the random tag
  const imageUrl = await getUnsplashImage(tag);
  
  // Set the fetched image as the background
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

async function getUnsplashImage(tag) {
  const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${tag}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.urls && data.urls.regular) {
      return data.urls.regular; // Return the regular size URL
    } else {
      throw new Error("Image URL not found");
    }
  } catch (error) {
    console.error("Error fetching image:", error);
    return "default-background.jpg"; // Fallback image if there's an error
  }
}

// Attach the getComment function to the button's click event
document.querySelector('button').addEventListener('click', getComment);
