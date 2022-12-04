import input from './inputs/4';

class Range {
  public start: number
  public end: number
  constructor(pair: string) {
    const [start, end] = pair!.split('-')
    this.start = Number(start)
    this.end = Number(end)
  }
}

let containedPairs = 0
let overlappedPairs = 0

for (const pair of input.split('\n')) {
  const [pair1, pair2] = pair.split(',')

  const range1 = new Range(pair1!)
  const range2 = new Range(pair2!)


  const isFirstContained = isRangeContained(range1, range2)
  const isSecondContained = isRangeContained(range2, range1)

  if (isFirstContained || isSecondContained) {
    containedPairs++
  }

  const hasOverlap1 = hasRangeOverlap(range1, range2)
  const hasOverlap2 = hasRangeOverlap(range2, range1)

  if (hasOverlap1 || hasOverlap2) {
    overlappedPairs++
  }
}


function isRangeContained(firstRange: Range, secondRange: Range) {
  if (firstRange.start >= secondRange.start && firstRange.end <= secondRange.end) return true
  return false
}

function hasRangeOverlap(firstRange: Range, secondRange: Range) {
  if (firstRange.end >= secondRange.start && firstRange.end <= secondRange.end) return true
  return false
}

console.log(`First answer: ${containedPairs}`)
console.log(`Second answer: ${overlappedPairs}`)