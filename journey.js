document.addEventListener("DOMContentLoaded", () => {
  const startInput = document.getElementById("startCity");
  const endInput = document.getElementById("endCity");
  const startSug = document.getElementById("startSuggestions");
  const endSug = document.getElementById("endSuggestions");

  const cities = Array.from(new Set(journeys.flatMap(j => [j.from, j.to])));

  function filterCities(input) {
    const val = input.trim().toLowerCase();
    if (!val) return [];
    return cities.filter(city => city.toLowerCase().startsWith(val));
  }

  function renderSuggestions(container, suggestions, inputField) {
    if (suggestions.length === 0) {
      container.style.display = "none";
      container.innerHTML = "";
      return;
    }

    container.style.display = "block";
    container.innerHTML = suggestions
      .map(city => `<div class="suggestion-item">${city}</div>`)
      .join("");

    container.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        inputField.value = item.textContent;
        container.style.display = "none";
      });
    });
  }

  startInput.addEventListener("input", () => {
    const suggestions = filterCities(startInput.value);
    renderSuggestions(startSug, suggestions, startInput);
  });

  endInput.addEventListener("input", () => {
    const suggestions = filterCities(endInput.value);
    renderSuggestions(endSug, suggestions, endInput);
  });

  document.addEventListener("click", (e) => {
    if (!startSug.contains(e.target) && e.target !== startInput) {
      startSug.style.display = "none";
    }
    if (!endSug.contains(e.target) && e.target !== endInput) {
      endSug.style.display = "none";
    }
  });
});

// Show Results logic remains the same
const showBtn = document.getElementById('plan-show-button');

if (showBtn) {
  showBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const startCity = document.getElementById('startCity').value.trim();
    const endCity = document.getElementById('endCity').value.trim();

    const getCheckedValues = (name) =>
      Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);

    const selectedTransport = getCheckedValues('transport');
    const selectedEco = getCheckedValues('eco');
    const selectedTime = getCheckedValues('time');

    if (!startCity || !endCity) {
      alert('Please enter both start and destination cities.');
      return;
    }

    const journeyData = {
      startCity,
      endCity,
      transport: selectedTransport,
      eco: selectedEco,
      time: selectedTime
    };

    console.log("Saving journeyPrefs:", journeyData); // Debug
    localStorage.setItem('journeyPrefs', JSON.stringify(journeyData));

    // Add a small delay to ensure saving completes
    setTimeout(() => {
      window.location.href = 'results.html';
    }, 200);
  });
}
