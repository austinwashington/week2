function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const pad = n => n.toString().padStart(2, '0');

  document.getElementById('clockText').textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);