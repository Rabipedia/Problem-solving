class Queue {
    constructor(){
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item) {
        this.backIndex = item;
        this.backIndex++;
        return item + 'inserted';
    }

    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    peek() {
        return this.items[this.frontIndex];
    }

    get printQueue(){
        return this.items;
    } 
}

const queue = new Queue();

console.log(queue.enqueue(2));
console.log(queue.enqueue(5));
console.log(queue.enqueue(8));
console.log(queue.enqueue(7));
console.log(queue.enqueue(9));
console.log(queue.dequeue());

let str =  queue.printQueue();

//traversing queue

const traverseQ = (str, queue) => {
    while(str.length != 0) {
        console.log(queue.dequeue());
    }
}