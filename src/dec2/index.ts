export const parseCubes = (cubesInput: string) => {
  // 12 red cubes
  // 13 green cubes
  // 14 blue cubes
  cubesInput.split(";").map(run) => {

}
  .split(",").map((cube) => {
  const [count, color] = cube.split(" ");
  return {
    count: parseInt(count),
    color
  }
}
}


export const parseToObject = (input: string) => {
  //Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

  const [game, ...cubes] = input.split(":");
  const gameNumber = parseInt(game.replace("Game ", ""));

  return {
    gameNumber,
    cubes
  }
}