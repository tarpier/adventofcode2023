import { expect, test } from "bun:test";
import { parseToObject } from ".";

const line = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"

test("extract game number", () => {
  expect(parseToObject(line)).toEqual({
    gameNumber: 1,
    cubes: [" 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"]
  });
});


