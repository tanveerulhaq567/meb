/// data
  // ---------------------------------------------
// Green Journey Advisor - Sample Journey Data
// ---------------------------------------------
// This data simulates real travel options between cities.
// It will be used to match user preferences on results.html.

// Each journey includes:
// - from: starting city
// - to: destination city
// - transport: bus, train, bike, walk
// - eco: max-sustain, balanced, fastest
// - time: morning, afternoon, evening
// - distance: in kilometers
// - duration: in minutes
// - cost: estimated in euros
// - ecoScore: 1 (low) to 5 (high)
// ---------------------------------------------

const journeys = [

  // Amsterdam → Rotterdam
  {
    from: "Amsterdam",
    to: "Rotterdam",
    transport: "train",
    eco: "balanced",
    time: "morning",
    distance: 80,
    duration: 75,
    cost: 15,
    ecoScore: 4
  },
  {
    from: "Amsterdam",
    to: "Rotterdam",
    transport: "bus",
    eco: "max-sustain",
    time: "afternoon",
    distance: 85,
    duration: 100,
    cost: 7.5,
    ecoScore: 5
  },
  {
    from: "Amsterdam",
    to: "Rotterdam",
    transport: "bike",
    eco: "max-sustain",
    time: "morning",
    distance: 78,
    duration: 210,
    cost: 0,
    ecoScore: 5
  },

  // Amsterdam → Utrecht
  {
    from: "Amsterdam",
    to: "Utrecht",
    transport: "train",
    eco: "fastest",
    time: "afternoon",
    distance: 35,
    duration: 27,
    cost: 9,
    ecoScore: 3
  },
  {
    from: "Amsterdam",
    to: "Utrecht",
    transport: "bike",
    eco: "max-sustain",
    time: "morning",
    distance: 40,
    duration: 150,
    cost: 0,
    ecoScore: 5
  },

  // Rotterdam → The Hague
  {
    from: "Rotterdam",
    to: "The Hague",
    transport: "train",
    eco: "balanced",
    time: "evening",
    distance: 25,
    duration: 22,
    cost: 4.5,
    ecoScore: 4
  },
  {
    from: "Rotterdam",
    to: "The Hague",
    transport: "bus",
    eco: "max-sustain",
    time: "morning",
    distance: 26,
    duration: 35,
    cost: 3.5,
    ecoScore: 5
  },
  {
    from: "Rotterdam",
    to: "The Hague",
    transport: "walk",
    eco: "max-sustain",
    time: "morning",
    distance: 26,
    duration: 360,
    cost: 0,
    ecoScore: 5
  },

  // Utrecht → Eindhoven
  {
    from: "Utrecht",
    to: "Eindhoven",
    transport: "train",
    eco: "fastest",
    time: "morning",
    distance: 90,
    duration: 65,
    cost: 14,
    ecoScore: 3
  },
  {
    from: "Utrecht",
    to: "Eindhoven",
    transport: "bus",
    eco: "balanced",
    time: "afternoon",
    distance: 95,
    duration: 110,
    cost: 10,
    ecoScore: 4
  },

  // Eindhoven → Maastricht
  {
    from: "Eindhoven",
    to: "Maastricht",
    transport: "train",
    eco: "fastest",
    time: "evening",
    distance: 90,
    duration: 80,
    cost: 15,
    ecoScore: 3
  },
  {
    from: "Eindhoven",
    to: "Maastricht",
    transport: "bus",
    eco: "max-sustain",
    time: "morning",
    distance: 90,
    duration: 100,
    cost: 7,
    ecoScore: 5
  },

  // Utrecht → Rotterdam
  {
    from: "Utrecht",
    to: "Rotterdam",
    transport: "train",
    eco: "balanced",
    time: "morning",
    distance: 55,
    duration: 40,
    cost: 9,
    ecoScore: 4
  },
  {
    from: "Utrecht",
    to: "Rotterdam",
    transport: "bike",
    eco: "max-sustain",
    time: "afternoon",
    distance: 60,
    duration: 190,
    cost: 0,
    ecoScore: 5
  },

  // Amsterdam → Maastricht
  {
    from: "Amsterdam",
    to: "Maastricht",
    transport: "train",
    eco: "fastest",
    time: "morning",
    distance: 210,
    duration: 135,
    cost: 22,
    ecoScore: 3
  },
  {
    from: "Amsterdam",
    to: "Maastricht",
    transport: "bus",
    eco: "balanced",
    time: "afternoon",
    distance: 215,
    duration: 160,
    cost: 15,
    ecoScore: 4
  },

];

