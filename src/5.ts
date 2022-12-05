import { crates, instructions } from './inputs/5';


const crateStacks: string[][] = []

const crateLines = crates.split('\n');
const lastLine = crateLines[crateLines.length - 1]!.split('');
for (const [lineNum, line] of crateLines.entries()) {
  if (lineNum === crateLines.length - 1) continue



  for (let i = 0; i < line.length; i++) {
    const char = line[i]!;

    if (/[\w]/.test(char)) {
      let lineIndex = Number(lastLine![i])
      const stack = crateStacks[lineIndex - 1] ?? []
      stack.push(char)
      crateStacks[lineIndex - 1] = stack
    }
  }


}

const crateStacks2: string[][] = JSON.parse(JSON.stringify(crateStacks))

for (const inst of instructions.split('\n')) {
  const [, moveString, fromString, toString] = inst.split(/move *| *from *| *to */)
  const move = Number(moveString)
  const from = Number(fromString)
  const to = Number(toString)


  for (let i = 0; i < move; i++) {
    const item = crateStacks[from - 1]!.shift()
    crateStacks[to - 1]!.unshift(item!)
  }

  const items = crateStacks2[from - 1]!.splice(0, move)
  crateStacks2[to - 1]!.unshift(...items!)

}

let res = ''

for (const stack of crateStacks) {
  res += stack[0]
}
let res2 = ''

for (const stack of crateStacks2) {
  res2 += stack[0]
}


console.log(`First answer: ${res}`)
console.log(`Second answer: ${res2}`) 