    var video = document.getElementById('my-video');
    var playPauseButton = document.getElementById('play-pause-button');
    var volumeSlider = document.getElementById('volume-slider');
    var fullscreenButton = document.getElementById('fullscreen-button');
    var progressBar = document.getElementById('progress-bar');
    var timeDisplay = document.getElementById('time-display');
    var video = document.getElementById('video');
    var fullscreenButton = document.getElementById('fullscreen-button');
    var exitFullscreenButton = document.getElementById('exit-fullscreen-button');
    var fullscreenControls = document.getElementById('fullscreen-controls');

    // При нажатии кнопки Fullscreen, показываем элементы fullscreen-controls и входим в полноэкранный режим
    fullscreenButton.addEventListener('click', function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
      fullscreenControls.style.display = 'block';
    });

    // При нажатии кнопки Exit Fullscreen, скрываем элементы fullscreen-controls и выходим из полноэкранного режима
    exitFullscreenButton.addEventListener('click', function() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      fullscreenControls.style.display = 'none';
    });

    // Скрываем элементы fullscreen-controls при выходе из полноэкранного режима
    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
        fullscreenControls.style.display = 'none';
      }
    });

    document.addEventListener('webkitfullscreenchange', function() {
      if (!document.webkitFullscreenElement) {
        fullscreenControls.style.display = 'none';
      }
    });

    document.addEventListener('msfullscreenchange', function() {
      if (!document.msFullscreenElement) {
        fullscreenControls.style.display = 'none';
      }
    });


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
