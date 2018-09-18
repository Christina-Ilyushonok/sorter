class Sorter
{
    constructor()
    {
        this.arr = [];
        this.compare = (a, b) => a - b;
    }

    at(element) {
        return this.arr[element];
    }

    add(element) {
        this.arr.push(element);
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        indices.sort();
        let temp = [];
        for(let i = 0; i < indices.length; i++) {
            temp.push(this.arr[indices[i]]);
        }
        temp.sort(this.compare);
        for(let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = temp[i];
        }
    }
    setComparator(compareFunction) {
        this.compare = compareFunction;
    }
}

module.exports = Sorter;