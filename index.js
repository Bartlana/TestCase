const countSingleCharacterSubsequences = input => {
  const entries = {}

  for (let i = 0; i < input.length; i++) {
    const key = input[i]
    entries[key] = (entries[key] || 0) + 1
  }

  return entries
}

const countTwoCharactersSubsequences = input => {
  const entries = {}

  for (let i = 0; i < input.length - 1; i++) {
    const key = `${ input[i] }${ input[i + 1] }`
    entries[key] = (entries[key] || 0) + 1
  }

  return entries
}

const countThreeCharactersSubsequences = input => {
  const entries = {}

  for (let i = 0; i < input.length - 2; i++) {
    const key = `${ input[i] }${ input[i + 1] }${ input[i + 2] }`
    entries[key] = (entries[key] || 0) + 1
  }

  return entries
}

const percentage = (n, entriesCount) => n * 100 / entriesCount + '%'

const count1 = countSingleCharacterSubsequences(billion)
const count2 = countTwoCharactersSubsequences(billion)
const count3 = countThreeCharactersSubsequences(billion)

console.log(count1)
console.log(count2)
console.log(count3)

for (key in count1) 
  count1[key] = percentage(count1[key], billion.length)
console.log(count1)

for (key in count2) 
  count2[key] = percentage(count2[key], billion.length - 1)
console.log(count2)

for (key in count3)
  count3[key] = percentage(count3[key], billion.length - 2)
console.log(count3)