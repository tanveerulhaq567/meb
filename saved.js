document.addEventListener("DOMContentLoaded", () => {
  const savedContainer = document.getElementById("savedContainer");
  const saved = JSON.parse(localStorage.getItem("savedJourneys")) || [];

  if (saved.length === 0) {
    savedContainer.innerHTML = "<p>No journeys saved yet.</p>";
    return;
  }

  savedContainer.innerHTML = saved.map(j => `
    <div class="journey-card">
      <h3>${j.from} → ${j.to}</h3>
      <p><strong>Transport:</strong> ${j.transport}</p>
      <p><strong>Eco Preference:</strong> ${j.eco} (Score: ${j.ecoScore})</p>
      <p><strong>Time:</strong> ${j.time}</p>
      <p><strong>Distance:</strong> ${j.distance} km</p>
      <p><strong>Duration:</strong> ${j.duration} mins</p>
      <p><strong>Cost:</strong> €${j.cost}</p>
    </div>
  `).join("");
});
