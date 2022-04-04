//Linked_List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) {
        let current_node = this.head;
        while(current_node.value !== value) {
            if(current_node.next === null) return null; //예외처리: 다음 노드 없음
            current_node = current_node.next;
        }
        return current_node;
    }

    append(newValue) {
        let new_node = new Node(newValue);
        if(this.head === null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    insert(node, newValue) {
        let new_node = new Node(newValue);
        new_node.next = node.next;
        node.next = new_node;
    }

    remove(value) {
        let prevnode = this.head;
        while(prevnode.next.value !== value) {
            prevnode = prevnode.next;
        } 
        if(prevnode.next === this.tail) {
            prevnode.next = null;
            this.tail = prevnode;
        } else if (prevnode.next !== null) {
            prevnode.next = prevnode.next.next;
        }
    }

    size() {
        let size = 0;
        let current_node = this.head;
        while(current_node !== null){
            size++;
            current_node = current_node.next;
        }
        return size;
    }

    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode.next !== null) {
            displayString += currNode.value + ", ";
            currNode = currNode.next;
        }
        displayString += currNode.value + "]";
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.size());
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
console.log(linkedList.size());
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
console.log(linkedList.size());

