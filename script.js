const notification = document.getElementById('notification');
const message = document.getElementById('message');
const closeBtn = document.getElementById('close-btn');
const audio = new Audio('notification-sound.mp3');

// Fetch data from API
function fetchData() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      // Display notification
      message.innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
      notification.style.display = 'block';
      audio.play();
    })
    .catch(error => console.log(error));
}

// Close notification
closeBtn.addEventListener('click', () => {
  notification.style.display = 'none';
});

// Call fetchData function periodically
setInterval(fetchData, 10000);

// Toggle theme
const themeToggler = document.getElementById('theme-toggler');
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
