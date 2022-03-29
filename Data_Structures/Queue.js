class Queue {
    constructor() {
        this.container = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.container[this.rear++] = value;
    }

    dequeue() {
        let front_value = this.container[this.front];
        delete this.container[this.front++];
        return front_value;
    }

    peek() {
        return this.container[this.front];
    }

    size() {
        return this.rear-this.front;
    }
}