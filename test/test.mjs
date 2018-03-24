const {Genome, Gene} = import('../dist/index_bundle.js');

const Genome = require('../src/genome');
const Gene = require('../src/gene');

function always(genome) {
    return true;
}

let gene0 = new Gene.TextGene('Guaranteed', Genome.AlwaysActivated); // Inline
let gene1 = new Gene('Only If 0', Genome.DelegateToGeneActivatedFactory(gene0));
let gene2 = new Gene('Only If 1', Genome.DelegateToGeneIndexActivatedFactory(1));
let gene3 = new Gene('Always False');
let gene4 = new Gene('Only If 3', Genome.DelegateToGeneIndexActivatedFactory(3));
let gene5 = new Gene('Always', always); // Inline defined
let gene6 = new Gene('Never', Genome.NeverActivated); // Inline defined
let gene7 = new Gene.BinaryGene(false, always);
let gene8 = new Gene.NumericGene(2442, Genome.DelegateToGeneValue(gene7, (incomingGene)=>{return incomingGene.data === true}));

let genome = new Genome().add(gene0).add(gene1).add(gene2).add(gene3).add(gene4).add(gene5).add(gene6).add(gene7).add(gene8)
console.log(`Found genome: ${genome}\nFound Enabled Genes: [${genome.enabledGenes.map(it => {
    return it.toString();
})}]`);

console.log("Gene Before Mutation:", gene0);
gene0.mutate('base switch', 'g', 0);
console.log("Gene After Mutation:", gene0);
gene0.mutate('recombine', '', 0);
console.log("Gene After Recombination:", gene0);

console.log("Gene Before Mutation:", gene7);
gene7.mutate('base switch');
console.log("Gene After Mutation:", gene7);
gene7.mutate('recombine');
console.log("Gene After Recombination:", gene7);


console.log("Gene Before Mutation:", gene8);
gene8.mutate('base switch');
console.log("Gene After Mutation:", gene8);
gene8.mutate('recombine');
console.log("Gene After Recombination:", gene8);

