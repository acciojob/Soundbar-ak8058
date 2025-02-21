const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5"];
const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

// Create buttons dynamically
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds(); // Stop any playing audio
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio
      .play()
      .catch((error) => console.error("Audio play error:", error)); // Catch errors
  });

  buttonsContainer.appendChild(btn);
});

// Stop audio when stop button is clicked
document.querySelector(".stop").addEventListener("click", stopSounds);

function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}