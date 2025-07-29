document.addEventListener("DOMContentLoaded", () => {
  const savedContainer = document.getElementById("savedContainer");

  function renderSavedJourneys() {
    const saved = JSON.parse(localStorage.getItem("savedJourneys")) || [];

    if (saved.length === 0) {
      savedContainer.innerHTML = "<p>No journeys saved yet.</p>";
      return;
    }

    savedContainer.innerHTML = saved.map((j, index) => `
      <div class="journey-card" data-index="${index}">
        <h3>${j.from} → ${j.to}</h3>
        <p><strong>Transport:</strong> ${j.transport}</p>
        <p><strong>Eco Preference:</strong> ${j.eco} (Score: ${j.ecoScore})</p>
        <p><strong>Time:</strong> ${j.time}</p>
        <p><strong>Distance:</strong> ${j.distance} km</p>
        <p><strong>Duration:</strong> ${j.duration} mins</p>
        <p><strong>Cost:</strong> €${j.cost}</p>
        <button class="delete-btn">Delete Journey</button>
      </div>
    `).join("");
  }

  renderSavedJourneys();

  // Delete Journey handler
  savedContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const card = e.target.closest(".journey-card");
      const index = card.getAttribute("data-index");

      let saved = JSON.parse(localStorage.getItem("savedJourneys")) || [];
      saved.splice(index, 1); // Remove the selected journey
      localStorage.setItem("savedJourneys", JSON.stringify(saved));

      renderSavedJourneys(); // Re-render after deletion
    }
  });
});
