import {BinaryGene, NumericGene, TextGene} from './gene';

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

export function createRandomGenome(length = 100) {
    let genes = [], activationFn;
    for (let i = 0; i < length; i++) {
        // TODO: Use other activations
        activationFn = Genome.RandomActivation;

        let gene;
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                gene = new BinaryGene(Math.random() > 0.5, activationFn);
                break;
            case 1:
                gene = new NumericGene(Math.random() * 1000, activationFn);
                break;
            default:
                gene = new TextGene((Math.floor(Math.random() * 1000000)).toString(), activationFn);
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


export default class Genome {
    constructor() {
        this._genes = [];
        this._recalculate = true;
    }

    get genes() {
        return this._genes;
    }

    add(gene) {
        this._genes.push(gene);
        return this;
    }

    get enabledGenes() {
        if (this._recalculate) { // No need to recalculate
            this._recalculate = false;
            this._enabledGenes = this._genes.map(gene => {
                return gene.isEnabled(this)
            })
        }
        return this._enabledGenes;
    }

    reset() {
        this._recalculate = true;
    }

    static createRandom(length = 10) {
        return createRandomGenome(length)
    }

    static NeverActivated(genome) {
        return false;
    }

    static AlwaysActivated(genome) {
        return true;
    }

    static RandomActivation(genome) {
        return Math.random() > .5;
    }

    static HasGeneIndex(genome, index) {
        return genome.genes.length > index;
    }

    static HasGene(genome, gene) {
        return genome.genes.includes(gene);
    }

    static DelegateToGeneValue(gene, valueCompare = (gene) => {
        return false
    }) {
        return (genome) => {
            return Genome.HasGene(genome, gene) && valueCompare(gene);
        }
    }

    static DelegateToGeneIndexActivatedFactory(geneIndex) {
        return (genome) => {
            return Genome.HasGeneIndex(genome, geneIndex) && genome.genes[geneIndex].isEnabled(genome);
        }
    }

    static DelegateToGeneActivatedFactory(gene) {
        return (genome) => {
            return Genome.HasGene(genome, gene) && gene.isEnabled(genome);
        }
    }

    enabledString() {
        return `G:[${this.enabledGenes.map(it => {
            return it.toString()
        })}]`
    }

    toString() {
        return `G:[${this.genes.map(it => {
            return it.toString()
        }).join(',')}]`
    }
}