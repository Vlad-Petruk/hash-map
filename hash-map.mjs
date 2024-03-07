import { Node, LinkedList } from "./linked-list.mjs";

const buckets = new Array(16)

function hashMap () {

    function hash(key) {
        let hashCode = 0;
    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%16;
        }

        return hashCode;
    }

    function set(key, value) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        buckets[index] = {key, value};

        return buckets;
    }

    return {
        hash,
        set
    }

}

// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

const newMap = hashMap();
const hash = newMap.set('Vlad','Petruk')
console.log(hash);
