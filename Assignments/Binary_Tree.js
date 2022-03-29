class Queue {  //활용을 위해 다른 파일에서 복붙했습니다.
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

    size() {
        return this.rear-this.front;
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }


    display() {     //이진 트리의 모습을 보여줍니다. |n m| 은 각각 같은 노드의 left right 값입니다.
        const queue = new Queue();
        queue.enqueue(this);
        
        let count = 0;
        let lineshift = 1;
        let outputline = "|";

        while(queue.size() != 0){
            const currentNode = queue.dequeue();
            outputline += currentNode.value;
            count++;
            if (count%2 == 0 || currentNode.value == 1) { outputline += "|";}
            else {outputline += " ";}
            if (count == lineshift) {
                console.log(outputline);
                outputline = "|";
                count = 0;
                lineshift *= 2;
            }
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }
    }

    make_test(num){     //테스트케이스로 몇 개의 노드를 만들지 결정합니다. 
        let count = 1;
        const queue = new Queue();
        let currentNode = this;
        while(count++ < num){
            if(!currentNode.left) {
                currentNode.left = new Node(count);
                queue.enqueue(currentNode.left);
            } else if(!currentNode.right) {
                currentNode.right = new Node(count);
                queue.enqueue(currentNode.right);
                currentNode = queue.dequeue()
            } 
        }
    }

    search_PreOrder(num) {  //전위 탐색, 중위 탐색, 후위 탐색 모두 해당 값을 가지는 노드를 반환합니다.
        let answer = null;
        console.log("전위 = "+this.value);
        if(this.value === num) return answer=this;
        if(this.left && (answer = this.left.search_PreOrder(num))) return answer; //
        if(this.right && (answer = this.right.search_PreOrder(num))) return answer;
        return answer;
    }

    search_InOrder(num) {
        let answer = null;
        if(this.left && (answer = this.left.search_InOrder(num))) return answer;
        console.log("중위 = "+this.value);
        if(this.value === num) return answer=this;
        if(this.right && (answer = this.right.search_InOrder(num))) return answer;
        return answer;
    }

    search_PostOrder(num) {
        let answer = null;
        if(this.left && (answer = this.left.search_PostOrder(num))) return answer;
        if(this.left && (answer = this.right.search_PostOrder(num))) return answer;
        console.log("후위 = "+this.value);
        if(this.value === num) return answer=this;
        return answer;
    }
}

let binary_tree = new Node(1);
binary_tree.make_test(15);
binary_tree.display();
binary_tree.search_PreOrder(13);
binary_tree.search_InOrder(10);
binary_tree.search_PostOrder(14);