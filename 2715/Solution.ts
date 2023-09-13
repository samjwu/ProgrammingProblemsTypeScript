function cancellable(fn: Function, args: any[], t: number): Function {
    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    const runFunction = setTimeout(() => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
        fn.apply(null, args);
    }, t);

    const cancelFunction: Function = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
        clearTimeout(runFunction);
    };

    return cancelFunction;
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
