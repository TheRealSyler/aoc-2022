import input from './inputs/1';

const sums: number[] = []

for (const elfFood of input.split(/\n\n/)) {
  const calories = elfFood.split('\n').reduce((sum, item) => sum + Number(item), 0)
  sums.push(calories)
}

const sortedSums = sums.sort((a, b) => b - a)
const biggest = sortedSums[0]
const topThree = sortedSums.slice(0, 3)

console.log(`First answer: ${biggest}`)
console.log(`Second answer: ${topThree.reduce((sum, cur) => sum + cur, 0)}`)