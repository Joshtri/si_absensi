document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  let count = 3; // Mulai dari 3

  const countdownInterval = setInterval(() => {
    countdownElement.textContent = count;
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "0";
    }
  }, 1000); // Setiap 1 detik (1000ms)
});