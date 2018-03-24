let genome = require('./genome1');

console.log(genome.toString());
Array.from(Array(10), ()=>{console.log("Genome:", genome.enabledString())});
console.log(genome.toString());
