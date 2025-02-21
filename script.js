//your JS code here. If required.
const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5"]; // List of sound file names

const buttonsContainer = document.getElementById("buttons");
let currentAudio = null; // Store currently playing audio

// Create buttons dynamically for each sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  // Play the sound on button click
  btn.addEventListener("click", () => {
    stopSounds(); // Stop currently playing sound
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Stop all sounds
document.querySelector(".stop").addEventListener("click", stopSounds);

function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset audio to start
    currentAudio = null;
  }
}