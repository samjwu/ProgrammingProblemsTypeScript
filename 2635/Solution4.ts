function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    return Array.from(arr, (val, idx) => {
        return fn(val, idx);
    });
};
