class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(key, value) {
        const newNode = new Node(key, value);

        if (!this.head) {
            this.size++
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let current = this.head;
        let counter = 0;

        while (current !== null) {
            counter++
            current = current.nextNode;
        }
        return counter;
    }

    head() {
        return this.head;
    }


    contains(key) {
        let current = this.head;
        while (current) {
            if(current.key === key){
                return true
            } 
            current = current.nextNode;
            
        }
        return false;

    }

    find(key) {
        let current = this.head;
        let index = 0;
        while (current) {
            if(current.key === key){
                return current.key;
            } 

            index++
            current = current.nextNode;
        }
        return null;
    }

    removeKey(key) {
		let current = this.head;
		let previous;
		let index = 0;
		if (current.key == key && index == 0) {
			this.size--;
			return (this.head = current.next);
		}
		while (current.next !== null) {
			previous = current;
			current = current.next;
			index++;
		}
		if (current.key != key) return;
		this.size--;
		return (previous.next = current.next);
	}
}

// const firstNode = new Node(10);
// const secondNode = new Node(20);
// const thirdNode = new Node(30);

// const list = new LinkedList();

// list.append(firstNode);
// list.prepend(secondNode);
// list.append(thirdNode)

// let tails = list.pop();
// let tail = list.size()
// console.log(tail);

export {Node, LinkedList}