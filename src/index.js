class Sorter {
    constructor() {
        this.array = [];
        this.sortCondition = (a, b) => a - b;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let result = [];
        indices = indices.sort();
        for (let index of indices) {
            result.push(this.array[index]);
        }
        result.sort(this.sortCondition);
        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = result[i];
        }
    }

    setComparator(compareFunction) {
        this.sortCondition = compareFunction;
    }
}

module.exports = Sorter;
