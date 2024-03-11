function isHappy(n: number, m: Map<number, number> = new Map()): boolean {
    let result = (() => {
        const arr: string[] = n.toString().split('')
        const len: number = arr.length;
        let sum = 0
        for (let i = 0; i < len; i++) {
            sum += Number(arr[i]) * Number(arr[i]);
        }
        return sum;
    });
    if (n === 1) {
        return true; 
    } else if (m.has(n)) {
        return false; 
    } else {
        m.set(n, 1);
        return isHappy(result(), m);
    }


}