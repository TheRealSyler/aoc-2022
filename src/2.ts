import input from './inputs/2';

type OpponentInput = 'A' | 'B' | 'C'
type YourInput = 'X' | 'Y' | 'Z'

type Shapes = OpponentInput | YourInput
type Shape = 'Rock' | 'Paper' | 'Scissors'
type RoundOutcome = 'Win' | 'Loose' | 'Draw';

const shapesMap: { [key in Shapes]: Shape } = {
  A: 'Rock',
  X: 'Rock',
  B: 'Paper',
  Y: 'Paper',
  C: 'Scissors',
  Z: 'Scissors',
}

const shapeOutcomeMap: { [key in Shape]: { [key in Shape]: RoundOutcome } } = {
  Paper: { Paper: 'Draw', Rock: 'Loose', Scissors: 'Win' },
  Rock: { Paper: 'Win', Rock: 'Draw', Scissors: 'Loose' },
  Scissors: { Paper: 'Loose', Rock: 'Win', Scissors: 'Draw' },
}


const outcomeScoreMap: { [key in RoundOutcome]: number } = {
  Loose: 0,
  Draw: 3,
  Win: 6
}

const shapeScoreMap: { [key in Shape]: number } = {
  Rock: 1,
  Paper: 2,
  Scissors: 3
}

const newStrategieMap: { [key in Shape]: { [key in Shape]: Shape } } = {
  Rock: { Paper: 'Rock', Rock: 'Scissors', Scissors: 'Paper' }, // Loose
  Paper: { Paper: 'Paper', Rock: 'Rock', Scissors: 'Scissors' }, // Draw
  Scissors: { Paper: 'Scissors', Rock: 'Paper', Scissors: 'Rock' }, // Win
}




let scoreSum1 = 0
let scoreSum2 = 0

for (const round of input.split('\n')) {
  const [opponent, you] = round.split(' ')


  const score1 = playRound(opponent as OpponentInput, you as YourInput)
  scoreSum1 += score1



  const score2 = playRound(opponent as OpponentInput, you as YourInput, true)
  scoreSum2 += score2
}

function playRound(opponent: OpponentInput, you: YourInput, useNewStrategie?: boolean) {
  const opponentShape = shapesMap[opponent];
  const yourShape = useNewStrategie ? newStrategieMap[shapesMap[you]][opponentShape] : shapesMap[you];

  const outcome = shapeOutcomeMap[opponentShape][yourShape]

  const shapeScore = shapeScoreMap[yourShape]
  const score = outcomeScoreMap[outcome]

  return shapeScore + score
}

console.log(`First answer: ${scoreSum1}`)
console.log(`Second answer: ${scoreSum2}`)