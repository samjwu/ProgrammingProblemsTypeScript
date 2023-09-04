function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let ans: number[] = [];
    
    for (let [idx, val] of arr.entries()) {
        ans[idx] = fn(val, idx);
    }
    
    return ans;
};
