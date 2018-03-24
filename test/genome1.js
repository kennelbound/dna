/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function createRandomGenome(length = 100) {
    let genes = [], activationFn;
    for (let i = 0; i < length; i++) {
        // TODO: Use other activations
        activationFn = Genome.RandomActivation;

        let gene;
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                gene = new Gene.BinaryGene(Math.random() > 0.5, activationFn);
                break;
            case 1:
                gene = new Gene.NumericGene(Math.random() * 1000, activationFn);
                break;
            default:
                gene = new Gene.TextGene((Math.floor(Math.random() * 1000000)).toString(), activationFn);
                break;
        }
        genes.push(gene);
    }

    shuffle(genes);
    let genome = new Genome();
    for (let gene of genes) {
        genome.add(gene);
    }
    return genome;
}
