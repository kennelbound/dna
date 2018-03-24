class Genome {
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
        if(this._recalculate) { // No need to recalculate
            this._recalculate = false;
            this._enabledGenes = this._genes.map(gene=>{return gene.isEnabled(this)})
        }
        return this._enabledGenes;
    }

    reset() {
        this._recalculate = true;
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

    static DelegateToGeneValue(gene, valueCompare = (gene)=>{return false}) {
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
        return `G:[${this.enabledGenes.map(it=>{return it.toString()})}]`
    }

    toString() {
        return `G:[${this.genes.map(it => {
            return it.toString()
        }).join(',')}]`
    }
}

module.exports = Genome;