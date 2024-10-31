document.addEventListener('DOMContentLoaded', () => {
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US', { hour12: false });

    document.getElementById('dateTime').textContent = `${formattedDate} - ${formattedTime}`;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
  console.log(updateDateTime)
});