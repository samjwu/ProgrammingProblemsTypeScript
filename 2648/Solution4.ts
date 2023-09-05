const fibGenerator = (): Iterator<number> => {
    const maxCallCount: number = 50;

    const fibonacci: number[] = Array(maxCallCount).fill(0);
    fibonacci[1] = 1;

    for (let i = 2; i < fibonacci.length; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
    return fibonacci[Symbol.iterator]();
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
