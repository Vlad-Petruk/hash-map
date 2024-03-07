import { LinkedList } from "./linked-list.mjs";

const buckets = new Array(16)

function hashMap (array) {

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
        if (index < 0 || index >= array.length) {
            throw new Error("Trying to access index out of bound");
        }
        if (!array[index]) {
			let list = new LinkedList();
			list.append(key, value);
			return (array[index] = list);
		}
		let bucketList = array[index];
		bucketList.append(key, value);

        return array;
    }

    function get(key) {
        let index = hash(key);
        if (index < 0 || index >= array.length) {
            throw new Error("Trying to access index out of bound");
        }
        let bucket = array[index];
        return bucket.find(key)
    }

    function has(key) {
        let index = hash(key);
        if (index < 0 || index >= array.length) {
            throw new Error("Trying to access index out of bound");
        }
        let bucket = array[index];
        
        if (!bucket) {
            return console.log(false)
        } else return bucket.contains(key);
    }

    function remove(key){
        let index = hash(key);
        if (index < 0 || index >= array.length) {
            throw new Error("Trying to access index out of bound");
        }
        let bucket = array[index];
        if (!bucket || bucket.contains(key) == false) return;
        return bucket.removeKey(key);
    }

    //Returns the number of stored keys in the hash map.
    function length() {
        let count = 0;
        array.forEach(e => {
            if(e) {
                count+= e.size;
            }
        });
        return count;
    }

    function clear() {
		array = new Array(16).fill(null);
	}

    function keys () {
        let keysArr = [];
        array.forEach(e => {
            if(e) {
                let current = e.head;
                while(current) {
                    console.log(current.key)
                    keysArr.push(current.key);
                    current = current.nextNode;
                }
            }
        })
        return keysArr;
    }

    function values () {
        let valuesArr = []
        array.forEach(e => {
            if(e) {
                let current = e.head;
                while(current) {
                    valuesArr.push(current.value);
                    current = current.nextNode;
                }
            }
        })
        return valuesArr;
    }

    function entries () {
        let entriesArr = []
        array.forEach(e => {
            if(e) {
                let current = e.head;
                while(current) {
                    entriesArr.push([current.key, current.value]);
                    current = current.nextNode;
                }
            }
        })
        return entriesArr;
    }

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }

}

// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

const newMap = hashMap(buckets);
const hash = newMap.set('Vlad','Petruk');
const hash5 = newMap.set('Vlap','Petruk');
const hash4 = newMap.set('Vika','Petruk');
const hash2 = newMap.has('Vlad')
const hash3 = newMap.entries();
// console.log(hash);
console.log(hash3)
// console.log(buckets)