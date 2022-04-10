// 1-->10-->99-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5, 
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
// another way 
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // const newNode = new Node(value);  previous shortcut example
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index)
        const follower = leader.next;
        leader.next = newNode
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.printList()
    }
    traverseToIndex(index) {
        //check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
    remove(index) {
        //check parmas
        const leader = this.tranverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
}


const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList()
myLinkedList.insert(1, 99);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.printList()
// myLinkedList.remove(2);
// myLinkedList.remove(2);
// myLinkedList.printList();
myLinkedList.reverse();
console.log(myLinkedList); 
