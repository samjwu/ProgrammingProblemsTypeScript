type Fn = (...args: any[]) => any

class CallOnce {
    calls: number = 0;
    
    call(fn, ...args) {
        if (this.calls > 0) {
            return undefined;
        }
      
        this.calls += 1;
        return fn(...args);
    }
}

function once(fn: Fn): Fn {
    const callOnceObject = new CallOnce();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind#description
    return callOnceObject.call.bind(callOnceObject, fn);
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
