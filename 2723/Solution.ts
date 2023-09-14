async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
