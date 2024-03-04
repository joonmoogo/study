class numb {
    id: number
    count: number

    constructor(id: number, count: number) {
        this.id = id;
        this.count = count;
    }
}

function majorityElement(nums: number[]): number {
    let found: numb|undefined;
    let max: number = 0;
    let array: numb[] = [];
  
    nums.forEach((e) => {
        if (array.find((obj) => obj.id == e)) {
            const founded = array.find((obj) => obj.id == e);
            founded?founded.count++:null;
        }
        else {
            array.push(new numb(e, 1));
        }
    })

    array.forEach((e) => {
        if (e.count > max) {
            found = e;
            max = e.count
        }
    })
    return found?found.id:-1;

};