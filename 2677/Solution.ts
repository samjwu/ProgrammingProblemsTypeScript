function chunk(arr: any[], size: number): any[][] {
    let ans: any[] = [];
    let idx: number = 0;
    
    while (idx < arr.length) {
        let subans: any[] = [];
        let vals: number = 0;
        
        while (idx < arr.length && vals < size) {
            subans.push(arr[idx]);
            vals += 1;
            idx += 1;
        }
        
        if (subans.length > 0) {
            ans.push(subans);
        }
    }
    
    return ans;
};
