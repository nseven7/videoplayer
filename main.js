var video = document.getElementById("myVideo");
var playPauseButton = document.getElementById("playPauseButton");
var muteButton = document.getElementById("muteButton");
var volumeSlider = document.getElementById("volumeSlider");
var fullscreenButton = document.getElementById("fullscreenButton");
var progressBar = document.querySelector(".progress-bar");
var progressContainer = document.querySelector(".progress-container");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseButton.classList.remove("play-button");
    playPauseButton.classList.add("pause-button");
  } else {
    video.pause();
    playPauseButton.classList.remove("pause-button");
    playPauseButton.classList.add("play-button");
  }
}

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = "Выключить звук";
  } else {
    video.muted = true;
    muteButton.innerHTML = "Включить звук";
  }
}

function updateVolume() {
  video.volume = volumeSlider.value;
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
}

function updateProgressBar() {
  var currentTime = video.currentTime;
  var duration = video.duration;
  var progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + "%";
}

playPauseButton.addEventListener("click", togglePlayPause);
muteButton.addEventListener("click", toggleMute);
volumeSlider.addEventListener("input", updateVolume);
fullscreenButton.addEventListener("click", toggleFullscreen);
video.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", function(e) {
  var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
  video.currentTime = pos * video.duration;
});
