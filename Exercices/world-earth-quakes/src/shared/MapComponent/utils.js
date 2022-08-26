import { WebMercatorViewport } from "deck.gl";

const applyToArray = (func, array) => func.apply(Math, array);

export const getMapBounds = (
  points,
  { width = 800, height = 300, padding, capZoom = 15 } = {}
) => {
  if (!points) return {};

  let cornersLongLat = [[], []];
  const batchMaxSize = 100000;

  for (let i = 1; i <= Math.ceil(points.length / batchMaxSize); i++) {
    const pointsLong = points
      .map((point) => point.longitude)
      .slice(i === 1 ? 0 : i - 1 * batchMaxSize + 1, i * batchMaxSize);
    const pointsLat = points
      .map((point) => point.latitude)
      .slice(i === 1 ? 0 : i - 1 * batchMaxSize + 1, i * batchMaxSize);
    try {
      cornersLongLat = [
        ...cornersLongLat,
        [applyToArray(Math.min, pointsLong), applyToArray(Math.min, pointsLat)],
        [applyToArray(Math.max, pointsLong), applyToArray(Math.max, pointsLat)],
      ];
    } catch {
      console.log("Maximum call stack exceeded when determining map bounds.");
      return {};
    }
  }

  let cornersLong = [[], []];
  let cornersLat = [[], []];
  for (let i = 2; i <= cornersLongLat.length - 1; i++) {
    cornersLong = [...cornersLong, [cornersLongLat[i][0]]];
    cornersLat = [...cornersLat, [cornersLongLat[i][1]]];
  }

  const finalCornersLongLat = [
    [
      applyToArray(Math.min, cornersLong.slice(2, cornersLat.length)),
      applyToArray(Math.min, cornersLat.slice(2, cornersLat.length)),
    ],
    [
      applyToArray(Math.max, cornersLong.slice(2, cornersLat.length)),
      applyToArray(Math.max, cornersLat.slice(2, cornersLat.length)),
    ],
  ];

  if (finalCornersLongLat[0][0] === Infinity) {
    return {};
  }

  const viewport = new WebMercatorViewport({ height, width }).fitBounds(
    finalCornersLongLat,
    {
      padding,
    }
  );
  const { longitude, latitude, zoom } = viewport;

  return { longitude, latitude, zoom: Math.max(0, Math.min(zoom, capZoom)) };
};
