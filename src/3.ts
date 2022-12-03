import input from './inputs/3';
const sacks = input.split(/\n/)
let sum = 0

for (const sack of sacks) {
  const firstCompartment = sack.slice(0, sack.length / 2)
  const secondCompartment = sack.slice(sack.length / 2)

  const fistCompartmentSet = new Set(firstCompartment.split(''))
  const secondCompartmentSet = new Set(secondCompartment.split(''))

  const commonItemPriorities = []
  for (const item of fistCompartmentSet) {
    if (secondCompartmentSet.has(item)) {
      commonItemPriorities.push(itemToPriority(item))
    }
  }

  const commonItemsSum = commonItemPriorities.reduce((sum, priority) => sum + priority, 0)
  sum += commonItemsSum
}
let sum2 = 0

for (let i = 0; i < sacks.length; i += 3) {
  const sack1 = sacks[i];
  const sack2 = sacks[i + 1];
  const sack3 = sacks[i + 2];


  const sackSet1 = new Set(sack1!.split(''))
  const sackSet2 = new Set(sack2!.split(''))
  const sackSet3 = new Set(sack3!.split(''))

  const commonItemPriorities = []
  for (const item of sackSet1) {
    if (sackSet2.has(item) && sackSet3.has(item)) {
      commonItemPriorities.push(itemToPriority(item))
    }
  }

  const commonItemsSum = commonItemPriorities.reduce((sum, priority) => sum + priority, 0)
  sum2 += commonItemsSum
}

function itemToPriority(item: string) {
  const charCode = item.charCodeAt(0)
  if (charCode >= 65 && charCode <= 90) {
    return (charCode - 65) + 27
  }

  if (charCode >= 97 && charCode <= 122) {
    return (charCode - 97) + 1
  }

  return 0
}

console.log(`First answer: ${sum}`)
console.log(`Second answer: ${sum2}`)