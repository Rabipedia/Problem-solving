class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAt(element, index) {
        if(index < 0 || index > this.size) {
            return console.log('Please enter a valid index!');
        } else {
            const node = new Node(element);
            let curr, prev;

            curr = this.head;

            if(index == 0) {
                this.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    
    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return console.log("Please enter a valid index!");
        } else {
            let curr, prev, it = 0;

            curr = this.head;
            prev = curr;

            if(index == 0) {
                this.head = curr.next;
            } else {
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size --
        }
        return curr.element;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while(current != null) {
            if(current.element == element){
                if(prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            return -1;
        }
    }

    indexOf(element) {
        let current = this.head;
        let count = 0;

        while(current != null) {
            if(current.element == element) return count;
                count++;
                current = current.next;
        }
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }

    printList(){
        let curr = this.head;
        let str = "";

        while(curr){
            str += curr.element + ' ';
            curr = curr.next;
        }
        console.log(str);
    }
}