# 코드 리뷰 

 안녕하세요! 저는 가독성 위주로 제가 생각한 개선점들을 찾아보았습니다! 제 취향이 들어간 부분도 있으니 마음에 드시는 것 위주로 골라가시면 좋을 것 같아요!

🌳 트리 

1. 테스트 케이스를 만드실 때 만들어두신 display 함수를 활용하면 원하는 수의 노드를 가진 트리를 만들기 쉬울 것 같습니다

``` javascript
makeTest(numOfNode = 0) {
    //예시코드입니다!
    let madeNode = 1;
    let currentNode = this.root;
    const queue = new Queue();
    while (madeNode++ < numOfNode) {
        if (!currentNode.left) {
            currentNode.left = new Node(madeNode);
            queue.enqueue(currentNode.left);
        } else if (!currentNode.right) {
            currentNode.right = new Node(madeNode);
            queue.enqueue(currentNode.right);
            currentNode = queue.dequeue();
        }
    }
}
```

2. Order가 재귀함수로 구현되어있고, Order 함수를 호출한 전후에 같은 함수를 써는 양상이 반복되므로 사용자가 접근할 수 있는 함수를 따로 만드는 것이 좋을 것 같습니다. 기존 Order 함수는 _Order 함수 등으로 이름을 고치고 접근용 함수에 Order 이름을 쓰면 좋을 것 같습니다.

``` javascript
postOrder() {
    this.preOrder();
    console.log('preorder tree');
    this.stack.display();
    this.stack.clear();
}

_postOrder(node = this.root) {
  if (node.left) this.postOrder(node.left);
  if (node.right) this.postOrder(node.right);
  this.stack.push(node.value);
};
```

🔱 트라이 

1. Node의 프로퍼티 end를 inserted등과 같이 바꾸면 좋을 것 같습니다. 일반적인 의미를 가지기도 했고, 사용자가 명확하게 "삽입한" 변수라는 것을 알려줄 수 있을 것 강습니다. 
2. returnString 을 함수 내에서 쓰는 변수가 아니라 Trie 객체 프로퍼티로 설정하면 좋을 것 같습니다. tree.js 에서 탐색과정을 기록하기 위해 쓰신 stack과 같은 역할을 하는 변수이기 때문입니다. 이러면 search 함수와 autoComplete 함수에서 따로 return String을 선언할 필요가 없고, search 함수도 returnString를 매개변수로 받을 필요가 없을 것 같습니다. 
3. search함수의 크기를 줄일 수 있을 것 같습니다. map.values()는 Map 객체에 set된 값이 없다면 빈 배열을 돌려보내기 때문입니다.

```javascript
search(node) {
    //returnString은 trie객체 프로퍼티라 가정했습니다. 
    node.end || this.returnString.push(node.value);
    for (let char of node.children.values()) {
        this.search(char, returnString);
    }
}
```