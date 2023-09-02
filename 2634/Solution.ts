function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    let ans: number[] = [];
    
    for (let idx = 0; idx < arr.length; idx++) {
        if (fn(arr[idx], idx)) {
            ans.push(arr[idx]);
        }
    }
    
    return ans;
};
