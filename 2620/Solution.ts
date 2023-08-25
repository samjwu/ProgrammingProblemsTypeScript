function createCounter(n: number): () => number {
    let count: number = n-1;
    
    return function() {
        return ++count;
    }
}
