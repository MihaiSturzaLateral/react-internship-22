export const clusterLayer = {
  id: "clusters",
  type: "heatmap",
  source: "earthquakes",
  filter: ["has", "point_count"],
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": [
      "interpolate",
      ["linear"],
      ["get", "point_count"],
      0,
      0,
      6,
      1,
    ],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 3, 1, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0,
      "rgba(33,102,172,0)",
      0.2,
      "rgb(103,169,207)",
      0.4,
      "rgb(209,229,240)",
      0.6,
      "rgb(253,219,199)",
      0.8,
      "rgb(239,138,98)",
      1,
      "rgb(178,24,43)",
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["get", "point_count"],
      10,
      20,
      100,
      50,
    ],
  },
};

export const clusterCountLayer = {
  id: "cluster-count",
  type: "symbol",
  source: "earthquakes",
  filter: ["has", "point_count"],
  paint: {
    "text-color": "#ffffff",
  },
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
};

// points color: green for magnitude > 1, orange for magnitude>2.5, red for magnitude>4.5
export const unclusteredPointLayer = {
  id: "unclustered-point",
  type: "circle",
  source: "earthquakes",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": [
      "case",
      [">=", ["get", "mag"], 4.5],
      "#ba0000",
      ["case", [">=", ["get", "mag"], 2.5], "#e39102", "#03ba00"],
    ],
    "circle-radius": ["step", ["get", "mag"], 3, 1, 4, 1.5, 6, 2.5, 8, 4.5, 10],
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};
