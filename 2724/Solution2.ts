function sortBy(arr: any[], fn: Function): any[] {
    function comparator(a: any, b:any): number {
        if (fn(a) < fn(b)) {
            return -1;
        }
        return 1;
    }
    
    return arr.sort(comparator);
};
