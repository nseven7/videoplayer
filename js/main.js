const player = new Plyr('#player', {
  keyboard: { focused: true, global: true },
  seekTime: 5,
});


// Сохраняем последнюю позицию в localStorage
function saveLastWatched() {
  localStorage.setItem("lastWatched", player.currentTime);
}

// Слушаем событие остановки воспроизведения
player.on("pause", saveLastWatched);

// Слушаем событие закрытия страницы
window.addEventListener("beforeunload", saveLastWatched);

// Получаем последнюю сохраненную позицию из localStorage
const lastWatched = localStorage.getItem("lastWatched");

// Устанавливаем последнюю позицию с помощью API Plyr
if (lastWatched !== null) {
  player.currentTime = lastWatched;
}
