class Stack {
    size;
    top;
    a = [];

    // Function to check if the stack is empty.
    isEmpty() {
        return (this.top < 0);
    }

    constructor(n) {
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size);
    }

    push(x) {
        if(this.top >= this.size) {
            console.log('Stack is overflow');
            return false;
        } else {
            this.a[++this.top] = x;
            return true;
        }
    
    pop() {
        if(this.top <= 0) {
            console.log('Stack is underflow');
            return false;
        } else {
            let x = this.a[this.top--];
            return x;
        }
    }
    }
}

const reverseStr = (str) => {
    let n = str.length;
    let obj = new Stack(n)

    let i;
    for(i=0; i<n; i++) {
        obj.push(str[i]);
    }

    for(i=0; i<n; i++) {
        let ch = obj.pop();
        str[i] = ch;
    }
}