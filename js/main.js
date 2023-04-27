const player = new Plyr('#player', {
  keyboard: { focused: true, global: true },
  seekTime: 5,
});

// Сохраняем значение времени воспроизведения при каждом событии timeupdate
player.on('timeupdate', function(event) {
  localStorage.setItem('plyr_current_time', player.currentTime);
});

// Восстанавливаем последний просмотренный момент при загрузке плеера
const lastTime = localStorage.getItem('plyr_current_time');
if (lastTime !== null) {
  player.currentTime = lastTime;
}
