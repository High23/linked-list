class LinkedList {
    constructor() {
        this.headNode = new Node('node');
    }
    append(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
            return;
        }
        let node = this.headNode;
        while (true) {
            if (node.nextNode === null) {
                node.nextNode = new Node(value);
                return
            } else {
                node = node.nextNode;
            }
        }
    }
    prepend(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
            return;
        }
        let listCopy = this.headNode;
        this.headNode = new Node(value);
        this.headNode.nextNode = listCopy;
    }
    size() {
        if (this.headNode === null) {
            return console.log(0);
        }
        let size = 1;
        let node = this.headNode;
        while (true) {
            if (node.nextNode === null) {
                return console.log(size);
            } else {
                node = node.nextNode;
                size++;
            }
        }
    }
    head() {
        if (this.headNode === null) {
            return console.log('There are no nodes in this list so there is no head node');
        }
        return console.log(this.headNode);
    }
    tail() {
        if (this.headNode === null) {
            return console.log('There are no nodes in this list so there is no tail node');
        }
        let node = this.headNode;
        while (true) {
            if (node.nextNode === null) {
                return console.log(node);
            } else {
                node = node.nextNode;
            }
        }
    }
    at(index) {
        if (this.headNode === null) {
            return console.log('There are no nodes in this list so this list is unsearchable');
        }
        if (typeof index !== 'number') return console.error('Please pass a number for the "at" method');
        if (index === 1) return this.headNode;
        let nodeIndex = 1;
        let node = this.headNode;
        while (true) {
            if (node.nextNode === null && index > nodeIndex) {
                return console.error('The number passed through the "index" method is greater than the amount of nodes in the linked list');
            } else if (index === nodeIndex) {
                return console.log(node);
            } else {
                node = node.nextNode;
                nodeIndex++;
            }
        }
    }
    pop() {
        if (this.headNode === null) {
            return console.log('There are no nodes in this list so there is no node to pop');
        } else if (this.headNode.nextNode === null) {
            this.headNode = null
            return console.log('Popped head node')
        }
        let node = this.headNode;
        while (true) {
            if (node.nextNode.nextNode === null) {
                console.log(`Popped node with value: ${node.nextNode.value}`);
                node.nextNode = null;
                console.log(`New tail node with value: ${node.value}`);
                return ;
            } else {
                node = node.nextNode;
            }
        }
    }
    contains(value) {
        if (this.headNode === null) {
            return 'There are no nodes in this list so this list is unsearchable';
        }
        let node = this.headNode;
        while (true) {
            if (node.value === value) 
                return true;
            else if (node.nextNode === null) 
                return false;
            else 
                node = node.nextNode;
        }
    }
    find(value) {
        if (this.headNode === null) {
            return 'There are no nodes in this list so this list is unsearchable';
        }
        let node = this.headNode;
        let index = 1;
        while (true) {
            if (node.value === value) 
                return index;
            else if (node.nextNode === null) 
                return null;
            else {
                node = node.nextNode;
                index++;
            }
        }
    }
    toString() {
        if (this.headNode === null) {
            return '';
        }
        let node = this.headNode;
        let string = "";
        while (true) {
            if (node.nextNode === null) {
                string += `(${node.value}) -> null`;
                return string;
            } else {
                string += `(${node.value}) -> `;
                node = node.nextNode;
            }
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value,
        this.nextNode = nextNode
    }
}

function appendNthTimes(n, name = 'test') {
    for (let i = 0; i < n; i++) {
        list.append(name + i)
    }
}

let list = new LinkedList();

appendNthTimes(5)
// list.size()
// list.head()
// list.tail()
// list.at(3)
// list.pop()
// console.log(list.contains('test3'))
// console.log(list.find('test2'))
// list.at(4) // could also do list.at(list.find('test2')) to just return the node that contains that value
// console.log(list.toString())
// list.prepend('tester')