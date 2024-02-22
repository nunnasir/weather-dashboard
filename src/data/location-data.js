/* eslint-disable no-unused-vars */
const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Dhaka",
    latitude: 23.7122533,
    longitude: 90.4727708,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(name) {
  if (!name) return null;

  const filtered = data.filter((item) => item.location === name);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };

    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
