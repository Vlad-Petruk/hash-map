class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
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

    tail() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current;
    }

    at(index) {
        if (index < 0){
            return null;
        } 
        let count = 0;
        let current = this.head;

        while (current) {
            if (count === index) {
                return current;
            }

            count++;
            current = current.nextNode;
        }

        return null;

        
    }

    pop(){
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let previous = null;

        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null;
        return current;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if(current.value.value === value){
                return true
            } 
            current = current.nextNode;
            
        }
        return false;

    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if(current.value.value === value){
                return index;
            } 

            index++
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        let result = '';
        let current = this.head;

        while (current) {
            result += `(${current.value.value}) -> `;
            current = current.nextNode;
        }

        result += 'null';
        return result;
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