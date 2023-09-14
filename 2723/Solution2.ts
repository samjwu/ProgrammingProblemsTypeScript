async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    return Promise.all([promise1, promise2]).then(([value1, value2]) => value1 + value2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
