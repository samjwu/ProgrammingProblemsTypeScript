function* fibGenerator(): Generator<number, any, number> {
    let a = 0;
    yield a;
    
    let b = 1;
    yield b;
    
    while (true) {
        let c = a + b;
        a = b;
        b = c;
        yield c;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
