import { LinkedList } from "./linked-list.mjs";



function hashMap () {
    let buckets = new Array(16).fill(null);
    let capacity = buckets.length;
    let loadFactor = 0.75;

    function calculateLoadFactor () {
        const occupied = lengthArr();
        let currentLoad = occupied/capacity;
        return currentLoad
    }

    function lengthArr() {
        return buckets.filter(e => e != null).length;
    }

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
        if (!buckets[index]) {
			let list = new LinkedList();
			list.append(key, value);
			return (buckets[index] = list);
		}
		let bucketList = buckets[index];
		bucketList.append(key, value);

        let currentLoad = calculateLoadFactor();
        if(currentLoad > loadFactor) {
            buckets = [...buckets, new Array(capacity).fill(null)];
        }  
    }

    function get(key) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        let bucket = buckets[index];
        return bucket.find(key)
    }

    function has(key) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        let bucket = buckets[index];
        
        if (!bucket) {
            return console.log(false)
        } else return bucket.contains(key);
    }

    function remove(key){
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        let bucket = buckets[index];
        if (!bucket || bucket.contains(key) == false) return;
        return bucket.removeKey(key);
    }

    //Returns the number of stored keys in the hash map.
    function length() {
        let count = 0;
        buckets.forEach(e => {
            if(e) {
                count+= e.size;
            }
        });
        return count;
    }

    function clear() {
		buckets = new Array(16).fill(null);
	}

    function keys () {
        let keysArr = [];
        buckets.forEach(e => {
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
        buckets.forEach(e => {
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
        buckets.forEach(e => {
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
        entries,
        calculateLoadFactor,
        lengthArr
    }

}

// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

const newMap = hashMap();
const hash = newMap.set('Vlad','Petruk');
const hash5 = newMap.set('Vlaasfasap','Petruk');
const hash4 = newMap.set('Vsaadhsdhika','Petruk');
const hash8 = newMap.set('Visdhsdhkaa','Petruk');
const hashl = newMap.set('sdaasfassdgsdg','Petruk');
const hashh = newMap.set('Viakab','Petruk');
const hashg = newMap.set('Viasfaskam','Petruk');
const hashc = newMap.set('Vikaaasfasf,','Petruk');
const hashe = newMap.set('Vikaaagsdgss','Petruk');
const hashw = newMap.set('Visadhsdhskaq','Petruk');
const hashq = newMap.set('Vikaasfasfar','Petruk');
const hashz = newMap.set('Vidaksds','Petruk');
const hashb = newMap.set('Vikawsdsd','Petruk');
const hashsc = newMap.set('Vikadaasfasf,','Petruk');
const hashea = newMap.set('Vikaadagsdwgss','Petruk');
const hashsw = newMap.set('Visadhdsdwhskaq','Petruk');
const hashsq = newMap.set('Vikaasfdwasfar','Petruk');
const hashsz = newMap.set('Vidaksdwswd','Petruk');
const hashfb = newMap.set('Vikasdwswdsd','Petruk');
const haswhsc = newMap.set('Vikadwaaswfassf,','Petruk');
const hashwea = newMap.set('Vikawadwwwagsdsgss','Petruk');
const hashsww = newMap.set('Viswadwwhdsdshskaq','Petruk');
const hashsqw = newMap.set('Viwkaawsfdsasfar','Petruk');
const hashswz = newMap.set('Vwidawwksdssd','Petruk');
const hashfwb = newMap.set('Vikawsdssdd','Petruk');
const hash3 = newMap.calculateLoadFactor();
// console.log(hash);
console.log(hash3)
console.log(hashfwb)