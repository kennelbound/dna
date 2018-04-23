const Genome = require("./genome");

export default class Gene {
    constructor(data, isEnabledFn = Genome.NeverActivated) {
        this._data = data;
        this._isEnabled = isEnabledFn;
    }

    get data() {
        return this._data;
    }

    get type() {
        return 'generic';
    }

    isEnabled(genome) {
        return this._isEnabled(genome);
    }

    mutate(type, value, location = 0) {
        throw new Error("Please use Gene Impl for mutation support");
    }

    get length() {
        return this._data.toString().length;
    }

    toString() {
        return `g:${JSON.stringify(this.data)}`
    }
}

export class NumericGene extends Gene {
    static isInteger(data) {
        return data.toString().includes('.');
    }

    static numerify(numberString) {
        return NumericGene.isInteger(numberString) ? parseInt(numberString) : parseFloat(numberString)
    }

    get type() {
        return 'numeric';
    }

    mutate(type, value, location = 0) {
        switch (type) {
            case "base switch":
                this._data = -this._data;
                break;
            case "insert":
                this._data = this._data + value;
                break;
            case "delete":
                this._data = this._data - value;
                break;
            case "recombine":
                this._data = NumericGene.numerify(TextGene.randomizeString(this._data.toString()));
                break;
        }
    }

    toString() {
        return `n:${JSON.stringify(this.data)}`
    }
}

export class BinaryGene extends Gene {
    get type() {
        return "binary";
    }

    get length() {
        return 1;
    }

    mutate(type, value, location = 0) {
        switch (type) {
            case "base switch":
                this._data = !this._data;
                break;
            case "insert":
                this._data = true;
                break;
            case "delete":
                this._data = false;
                break;
            case "recombine":
                // Random chance of being 1 or 0
                this._data = (Math.random() > .5)
                break;
        }
    }

    toString() {
        return `b:${JSON.stringify(this.data)}`
    }
}

export class TextGene extends Gene {
    get type() {
        return 'text'
    }

    mutate(type, value, location = 0) {
        switch (type) {
            case "base switch":
                this._data = TextGene.splice(this.data, location, value.length, value);
                break;
            case "insert":
                this._data = TextGene.splice(this.data, location, 0, value);
                break;
            case "delete":
                this._data = TextGene.splice(this.data, location, value, "");
                break;
            case "recombine":
                this._data = TextGene.randomizeString(TextGene.splice(this.data, 0, value.length, value));
                break;
        }
    }

    static randomizeString(string) {
        return string.split('').sort(() => {
            return 0.5 - Math.random()
        }).join('')
    }

    static splice(orig, start, delCount, newSubStr) {
        return orig.slice(0, start) + newSubStr + orig.slice(start + Math.abs(delCount));
    }

    toString() {
        return `t:${JSON.stringify(this.data)}`
    }
}