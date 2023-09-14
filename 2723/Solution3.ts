async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    return await promise1 + await promise2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
