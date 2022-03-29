class Node{
    constructor(prev_word = "", char = ""){
        this.word = prev_word+char;
        this.child = new Map();
        this.dodisplay = false;
    }

    addChild(input){
        const char = input.charAt(0);
        const child = this.child;
        if(input.length > 0) {
            child.get(char) || child.set(char, new Node(this.word, char));
            child.get(char).addChild(input.slice(1, input.length));
        } else { 
            this.dodisplay = true;
            return; 
        }
    }

    display() {
        if(this.dodisplay) console.log(this.word);
        for(let node of this.child.values()){
            node.display();
        }
    }

    search_Node(searching_word) {
        let result = null;
        if(this.word === searching_word) result = this;
        else {
            for(let node of this.child.values()){
                result = node.search_Node(searching_word);
                if (result !== null) return result;
            }
        }
        return result;
    }
}

let test = new Node();
test.addChild("12345"); //테스트 케이스를 추가하시려면 해당 라인을 복사해서 입력값만 바꿔주세요!
test.addChild("12344");
test.addChild("12343");
test.addChild("12342");
test.addChild("12341");
test.addChild("12340");
test.addChild("12385");
test.addChild("12384");
test.addChild("12383");
test.addChild("12382");
test.addChild("12381");
test.addChild("12380"); 
test.addChild("12456");
test.addChild("12478");
test.addChild("12324");
test.addChild("42380");
test.addChild("48930");
test.addChild("53280");

document.getElementById("submit1").onclick = function(){
    var addword = document.getElementById("myText").value;
    test.addChild(addword);
}

document.getElementById("submit2").onclick = function(){
    var searchfor = document.getElementById("myText").value;
    test.search_Node(searchfor).display();
}