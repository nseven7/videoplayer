    var video = document.getElementById('my-video');
    var playPauseButton = document.getElementById('play-pause-button');
    var volumeSlider = document.getElementById('volume-slider');
    var fullscreenButton = document.getElementById('fullscreen-button');
    var progressBar = document.getElementById('progress-bar');
    var timeDisplay = document.getElementById('time-display');

    video.addEventListener('timeupdate', function() {
      var currentTime = video.currentTime;
      var duration = video.duration;

      // Format the time as mm:ss
      var currentTimeString = formatTime(currentTime);
      var durationString = formatTime(duration);

      // Update the time display
      timeDisplay.innerHTML = currentTimeString + ' / ' + durationString;
    });

    function formatTime(time) {
      var minutes = Math.floor(time / 60);
      var seconds = Math.floor(time % 60);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    }


    // Play/Pause Button
    playPauseButton.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        playPauseButton.innerHTML = 'Pause';
      } else {
        video.pause();
        playPauseButton.innerHTML = 'Play';
      }
    });

    // Volume Slider
    volumeSlider.addEventListener('input', function() {
      video.volume = volumeSlider.value;
    });

    // Fullscreen Button
    fullscreenButton.addEventListener('click', function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });

    // Progress Bar
    video.addEventListener('timeupdate', function() {
      var percent = (video.currentTime / video.duration) * 100;
      progressBar.value = percent;
    });

    progressBar.addEventListener('click', function(e) {
      var x = e.pageX - this.offsetLeft;
      var percent = x / this.offsetWidth;
      video.currentTime = percent * video.duration;
    });
