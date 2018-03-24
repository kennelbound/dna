// http://www.geneticsalive.com/components.html

class Genome {
    constructor() {
        this._genes = [];
    }

    get genes() {
        return this._genes;
    }

    addGene(gene) {
        this._genes.push(gene);
    }
}

class Gene {
    constructor(data, isEnabled = async (gene)=>{return false;}) {
        this._data = data;
        this._isEnabled = isEnabled;
    }

    get data() {
        return this._data;
    }

    /**
     * Foregoing a promoter setup for a very simple isEnabled function check (passed as a function to the constructor)
     * @param gene
     * @returns {Promise<Promise<boolean>|*>}
     */
    async isEnabled(gene) {
        return this._isEnabled(this);
    }
}

class Gene {
    constructor(promoter, codons = []) {
        this.promoter = promoter;
        this._codons = codons;
    }

    get codons() {
        return this._codons;
    }
}

class Codon {
    constructor({isExon, isIntron, data} = {exon: false, intron: false, data: []}) {
        this.exon = isExon;
        this.intron = isIntron;
        this.data = data;
    }
}

/**
 * Determines if a gene is turned on or off for transcription
 */
class Promoter {
    constructor(geneEnabledFunction = (polymerase) => {
        return true
    }) {
        this._geneEnabled = geneEnabledFunction;
    }

    async isGeneEnabled(polymerase) {
        return new Promise((resolve, reject) => {
            try {
                resolve(this._geneEnabled(polymerase));
            } catch (e) {
                reject(e);
            }
        })
    }
}

/**
 * Molecular Machine
 */
class Ribosome {
}


class DNA {
}

class RNA {
}

/**
 * Moves the RNA sequence to the ribosome
 */
class MessengerRNA extends RNA {
}

/**
 * After matching codon, transfers amino acid to forming protein
 */
class TransferRNA extends RNA {
}