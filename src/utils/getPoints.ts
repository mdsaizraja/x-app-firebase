interface Coordinate {
  latitude: number;
  longitude: number;
}

function quadraticBezierCurve(
  p1: [number, number],
  p2: [number, number],
  controlPoint: [number, number],
  numPoints: number
): Coordinate[] {
  const points: Coordinate[] = [];
  const step = 1 / (numPoints - 1);

  for (let t = 0; t <= 1; t += step) {
    const x =
      (1 - t) ** 2 * p1[0] +
      2 * (1 - t) * t * controlPoint[0] +
      t ** 2 * p2[0];
    const y =
      (1 - t) ** 2 * p1[1] +
      2 * (1 - t) * t * controlPoint[1] +
      t ** 2 * p2[1];
    const coord = { latitude: x, longitude: y };
    points.push(coord);
  }

  return points;
}

const calculateControlPoint = (
  p1: [number, number],
  p2: [number, number]
): [number, number] => {
  const d = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
  const scale = 0.5; // Adjusted scale factor for a more natural curve
  const h = d * scale;
  const w = d / 2;
  const x_m = (p1[0] + p2[0]) / 2;
  const y_m = (p1[1] + p2[1]) / 2;

  const x_c =
    x_m +
    (h * (p2[1] - p1[1])) /
      (2 * Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2));
  const y_c =
    y_m -
    (h * (p2[0] - p1[0])) /
      (2 * Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2));

  return [x_c, y_c];
};

export const getPoints = (places: Coordinate[]): Coordinate[] => {
  if (places.length < 2) {
    return [];
  }
  const p1: [number, number] = [places[0].latitude, places[0].longitude];
  const p2: [number, number] = [places[1].latitude, places[1].longitude];
  const controlPoint = calculateControlPoint(p1, p2);

  return quadraticBezierCurve(p1, p2, controlPoint, 100);
};
