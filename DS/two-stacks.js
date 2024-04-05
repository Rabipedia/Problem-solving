class TwoStack {
    constructor(n) {
        this.arr = new Array(n);
        this.size = n;
        this.top1 = Math.floor(n / 2) + 1;
        this.top2 = Math.floor(n / 2);
    }

    // Method to push an element x into stack1
    push1(x) {
        if(this.top1 > 0) {
            this.top1--;
            this.arr[this.top1] = x;
        } else {
            console.log('Overflow');
            return;
        }
    }

    // Method to push an element x into stack2
    push2(x) {
        if(this.top2 < this.size - 1) {
            this.top2++;
            this.arr[this.top2] = x;
        } else {
            console.log('Overflow');
            return;
        }
    }

    // Method to pop an element from stack1.
    pop1() {
        if(this.top1 <= this.size / 2) {
           let x = this.arr[this.top1];
           this.top1++;
           return x;
        }else {
            console.log('Underflow');
        }
    }

    pop2() {
        if(this.top2 >= Math.floor(this.size + 1) / 2){
            let x = this.arr[this.top2];
            this.top2--;
            return x;
        } else {
            console.log('Underflow')
        }
    }

}

//Implement two stacks in an array by Starting from endpoints:

class TwoStacks {
    constructor(n) {
        this.arr = Array(n).fill(0);
        this.size = n;
        this.top1 = -1;
        this.top2 = this.size;
    }

    push1(x) {
        if(this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = x;
        } else {
            console.log('Stack is overflow');
        }
    }
    push2(x) {
        if(this.top1 < this.top2 - 1){
            this.top2--;
            this.arr[this.top2] = x;
        } else {
            console.log('Stack is overflow');
        }
    }

    pop1() {
        if(this.top1 >= 0) {
            let x = this.arr[this.top1];
            this.top1--;
            return x;
        } else {
            console.log('Stack is underflow');
        }
    }

    pop2() {
        if(this.top2 < this.size - 1) {
            let x = this.arr[this.top2];
            this.top2++;
            return x;
        } else {
            console.log('Stack is underflow');
        }
    }
}