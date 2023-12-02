import fs from 'fs'

const lines = fs.readFileSync('./dec1.txt', { encoding: 'utf-8' }).split('\n')

const pairs = lines.map(line => {
  const regex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/g
  const matchedStrings = line.match(regex)

  const matchedNums = matchedStrings.map(string => {
    return string.replace(/one/g, 1).replace(/two/g, 2).replace(/three/g, 3).replace(/four/g, 4).replace(/five/g, 5).replace(/six/g, 6).replace(/seven/g, 7).replace(/eight/g, 8).replace(/nine/g, 9)
  })

  let element, element2;
  if (matchedNums.length < 2) {
    element = matchedNums[0];
    element2 = element;
  } else {
    element = matchedNums.shift();
    element2 = matchedNums.pop();
  }

  return `${element}${element2}`
})

console.log(pairs)
const result = pairs.reduce((acc, cur) => {
  return acc + parseInt(cur)
}, 0)
console.log(result)

// const matchedNums = line3.match(regex) // ["1", "2"]

// console.log(matchedNums)



// for (let index = 0; index < matchedNums.length; index++) {

//   // const element = matchedNums[index];
//   // const element2 = matchedNums[index > 0 ? matchedNums.length - 1 - index : matchedNums.length - 1];

//   console.log(element, element2)
// }