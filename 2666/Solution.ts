type Fn = (...args: any[]) => any

function once(fn: Fn): Fn {
  let calls: number = 0;
    
  return function (...args) {
      if (calls > 0) {
          return undefined;
      }
      
      calls += 1;
      return fn(...args);
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
