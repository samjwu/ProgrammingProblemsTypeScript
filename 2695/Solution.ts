class ArrayWrapper {
    private arr: number[];
    
	constructor(nums: number[]) {
        this.arr = nums;
    }

	valueOf() {
        let val: number = 0;
        
        for (let i = 0; i < this.arr.length; i++) {
            val += this.arr[i];
        }
        
        return val;
    }

	toString() {
        return "[" + this.arr.toString() + "]";
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
