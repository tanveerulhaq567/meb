document.addEventListener("DOMContentLoaded", () => {
  const journey = JSON.parse(localStorage.getItem("selectedJourney"));
  const infoDiv = document.querySelector(".detail-info");
  const iconDiv = document.querySelector(".detail-icon");

  if (!journey) {
    infoDiv.innerHTML = "<p>No journey selected. Go back to results.</p>";
    return;
  }

  // Set icon based on transport
  const transportIcons = {
    Train: "🚆",
    Bus: "🚌",
    Car: "🚗",
    Bicycle: "🚲",
    Walk: "🚶"
  };
  iconDiv.textContent = transportIcons[journey.transport] || "🧭";

  // Render details
  infoDiv.innerHTML = `
    <h3>${journey.transport} Journey</h3>
    <p><strong>From:</strong> ${journey.from}</p>
    <p><strong>To:</strong> ${journey.to}</p>
    <p><strong>Eco Score:</strong> ${journey.ecoScore}</p>
    <p><strong>Time Preference:</strong> ${journey.time}</p>
    <p><strong>Duration:</strong> ${journey.duration} mins</p>
    <p><strong>Distance:</strong> ${journey.distance} km</p>
    <p><strong>Cost:</strong> €${journey.cost}</p>
  `;
});

const saveButton = document.querySelector(".book-button");

saveButton.addEventListener("click", () => {
  const journey = JSON.parse(localStorage.getItem("selectedJourney"));
  if (!journey) return;

  // Get existing saved journeys (or initialize empty array)
  const saved = JSON.parse(localStorage.getItem("savedJourneys")) || [];

  // Optional: Prevent duplicates
  const alreadySaved = saved.some(j =>
    j.from === journey.from &&
    j.to === journey.to &&
    j.transport === journey.transport &&
    j.time === journey.time
  );
  if (alreadySaved) {
    alert("This journey is already saved.");
    return;
  }

  // Save the journey
  saved.push(journey);
  localStorage.setItem("savedJourneys", JSON.stringify(saved));

  // Show success message
  alert("Journey saved!");
});

document.addEventListener("DOMContentLoaded", () => {
  const journey = JSON.parse(localStorage.getItem("selectedJourney"));

  if (!journey) {
    document.getElementById("details-main").innerHTML = "<p>No journey selected. Please go back to results.</p>";
    return;
  }

  // Populate details dynamically
  const detailCard = document.querySelector(".detail-card");
  detailCard.innerHTML = `
    <div class="detail-icon">🚍</div>
    <div class="detail-info">
      <h3>${journey.from} → ${journey.to} (${journey.transport})</h3>
      <p><strong>Estimated Duration:</strong> ${journey.duration} mins</p>
      <p><strong>Eco Score:</strong> ${"★".repeat(journey.ecoScore)}${"☆".repeat(5 - journey.ecoScore)}</p>
      <p><strong>Eco Preference:</strong> ${journey.eco}</p>
      <p><strong>Time of Day:</strong> ${journey.time}</p>
      <p><strong>Distance:</strong> ${journey.distance} km</p>
      <p><strong>Fare:</strong> €${journey.cost}</p>
    </div>
  `;

  // Embed Google Map
  const mapSection = document.querySelector(".detail-map");
  mapSection.innerHTML = `
    <h4>Route Map</h4>
    <iframe
      src="https://www.google.com/maps?q=from+${encodeURIComponent(journey.from)}+to+${encodeURIComponent(journey.to)}&output=embed"
      width="100%" height="350" style="border:0;" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
});

// Handle back button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("back-button")) {
    window.location.href = "results.html";
  }
});
