export interface SparklineBox {
  width: number;
  height: number;
  padding: number;
}

export interface SparklinePoint {
  x: number;
  y: number;
}

export interface SparklineRange {
  min: number;
  max: number;
}

export function sparklinePoints(
  values: readonly number[],
  box: SparklineBox,
  range: SparklineRange = { min: Math.min(...values), max: Math.max(...values) }
): SparklinePoint[] {
  if (values.length === 0) return [];
  const { min, max } = range;
  const span = max - min || 1;
  const innerWidth = box.width - box.padding * 2;
  const innerHeight = box.height - box.padding * 2;
  const step = values.length > 1 ? innerWidth / (values.length - 1) : 0;
  return values.map((value, index) => ({
    x: Math.round((box.padding + index * step) * 10) / 10,
    y:
      Math.round(
        (box.padding + (1 - (value - min) / span) * innerHeight) * 10
      ) / 10
  }));
}
