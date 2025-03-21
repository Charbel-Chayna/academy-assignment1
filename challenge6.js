class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return null;
        }

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);

        } else if (this.cache.size >= this.capacity) {
            const lruKey = this.cache.keys().next().value;  // Remove the least recently used (first key in Map)
            this.cache.delete(lruKey);
        }

        this.cache.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); 

cache.put(3, 3);
console.log(cache.get(2)); 

cache.put(4, 4); 
console.log(cache.get(1)); 
console.log(cache.get(3)); 
console.log(cache.get(4)); 