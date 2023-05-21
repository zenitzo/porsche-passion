const porscheImage = document.getElementById("porsche-image");
const porscheModel = document.getElementById("porsche-model");

function getRandomPorsche() {
  fetch(
    "https://api.unsplash.com/photos/random?query=porsche&orientation=landscape",
    {
      headers: {
        Authorization: "Client-ID eyZL_ne40AVATxFfSH3DEYSyKMSKB2CLzbqjZ1sj0LA",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      porscheImage.src = data.urls.regular;
      porscheImage.alt = data.alt_description;
      porscheModel.textContent = `Model: ${data.user.name}`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

getRandomPorsche();
