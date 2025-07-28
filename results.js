document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("resultsContainer");
  const filterSelect = document.getElementById("filter");

  const prefsRaw = localStorage.getItem("journeyPrefs");
  console.log("Loaded raw prefs:", prefsRaw);

  if (!prefsRaw) {
    container.innerHTML = "<p>No journey preferences found. Please go back and select options.</p>";
    return;
  }

  const prefs = JSON.parse(prefsRaw);
  console.log("Parsed prefs:", prefs);
  console.log("Available journeys:", typeof journeys !== "undefined" ? journeys : "undefined!");

  if (typeof journeys === "undefined") {
    container.innerHTML = "<p>Error: Journey data not loaded.</p>";
    return;
  }

  const matching = journeys.filter(j =>
    j.from.toLowerCase() === prefs.startCity.toLowerCase() &&
    j.to.toLowerCase() === prefs.endCity.toLowerCase() &&
    (prefs.transport.length === 0 || prefs.transport.includes(j.transport)) &&
    (prefs.eco.length === 0 || prefs.eco.includes(j.eco)) &&
    (prefs.time.length === 0 || prefs.time.includes(j.time))
  );

  if (matching.length === 0) {
    container.innerHTML = "<p>No matching journeys found. Try different options.</p>";
    return;
  }

  function render(journeysToRender) {
  container.innerHTML = journeysToRender.map((j, index) => `
    <div id="journey-card">
      <h3>${j.from} → ${j.to}</h3>
      <p><strong>Transport:</strong> ${j.transport}</p>
      <p><strong>Eco Preference:</strong> ${j.eco} (Score: ${j.ecoScore})</p>
      <p><strong>Time:</strong> ${j.time}</p>
      <p><strong>Distance:</strong> ${j.distance} km</p>
      <p><strong>Duration:</strong> ${j.duration} mins</p>
      <p><strong>Cost:</strong> €${j.cost}</p>
      <button id="details-btn" data-index="${index}">View Details</button>
    </div>
  `).join("");

  // Add event listeners for detail buttons
  document.querySelectorAll("#details-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      const selected = journeysToRender[index];
      localStorage.setItem("selectedJourney", JSON.stringify(selected));
      window.location.href = "details.html";
    });
  });
}


  render(matching);

  filterSelect.addEventListener("change", () => {
    let sorted = [...matching];
    if (filterSelect.value === "eco") {
      sorted.sort((a, b) => b.ecoScore - a.ecoScore);
    } else if (filterSelect.value === "time") {
      sorted.sort((a, b) => a.duration - b.duration);
    } else if (filterSelect.value === "cost") {
      sorted.sort((a, b) => a.cost - b.cost);
    }
    render(sorted);
  });

// Save journey and go to details page
container.addEventListener("click", function (e) {
 if (e.target.id === "view-details-btn") {
    const index = e.target.getAttribute("data-index");
    const selectedJourney = matching[index];
    localStorage.setItem("selectedJourney", JSON.stringify(selectedJourney));
    window.location.href = "details.html";
  }
});


});
