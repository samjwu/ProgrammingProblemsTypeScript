function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let ans: number[] = [];
    
    arr.forEach((val, idx) => {
        ans.push(fn(val, idx));
    });
    
    return ans;
};
