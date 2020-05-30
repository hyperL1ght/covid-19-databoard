let range = [...Array(Math.trunc(365/3 + 1)).keys()]

console.log(range.map(i => Math.pow(2, i)))
console.log(range.map(i => 3 * i))