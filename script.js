// Select elements
const video = document.querySelector(".viewer");
const toggleButton = document.querySelector(".toggle");
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackSpeed']");
const rewindButton = document.querySelector(".rewind");
const fastForwardButton = document.querySelector(".fastForward");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// Play/Pause toggle
function togglePlay() {
  if (video.paused) {
    video.play();
    toggleButton.textContent = "❚❚"; // Pause symbol
  } else {
    video.pause();
    toggleButton.textContent = "►"; // Play symbol
  }
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// Update volume
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// Update playback speed
speedSlider.addEventListener("input", () => {
  video.playbackRate = speedSlider.value;
});

// Rewind 10 seconds
rewindButton.addEventListener("click", () => {
  video.currentTime -= 10;
});

// Fast forward 25 seconds
fastForwardButton.addEventListener("click", () => {
  video.currentTime += 25;
});

// Update progress bar
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});

// Seek functionality (click on progress bar)
progress.addEventListener("click", (e) => {
  const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = seekTime;
});
