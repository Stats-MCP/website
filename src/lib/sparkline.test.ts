import { describe, expect, it } from 'vitest';

import { sparklinePoints } from '@/lib/sparkline';

const box = { width: 100, height: 50, padding: 10 };

describe('sparklinePoints', () => {
  it('maps the lowest value to the bottom and the highest to the top', () => {
    const points = sparklinePoints([2, 4, 3], box);

    expect(points).toEqual([
      { x: 10, y: 40 },
      { x: 50, y: 10 },
      { x: 90, y: 25 }
    ]);
  });

  it('draws a flat line at the bottom when all values are equal', () => {
    expect(sparklinePoints([3, 3], box).map((point) => point.y)).toEqual([
      40, 40
    ]);
  });

  it('places a single value at the left edge', () => {
    expect(sparklinePoints([5], box)).toEqual([{ x: 10, y: 40 }]);
  });

  it('places values on a shared range so two series compare', () => {
    expect(
      sparklinePoints([2, 4], box, { min: 0, max: 6 }).map((point) => point.y)
    ).toEqual([30, 20]);
  });

  it('returns no points for no values', () => {
    expect(sparklinePoints([], box)).toEqual([]);
  });
});
