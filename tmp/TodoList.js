function TodoList(params) {
  // params.$target - 해당 컴포넌트가 추가될 DOM 엘리먼트 (추가될 좌표인가?)
  // params.initialState - 해당 컴포넌트의 초기 상태
  const $todoList = document.createElement('div');
  const $target = params.$target;
  $target.appendChild($todoList);
  this.state = params.initialState; // ??

  this.render = () => {
    // this.state = [{ text: '자바스크립트 공부하기' }, { text: '....'}]
    // map을 돈 이후에는 아래처럼 만들어집니다.
    $todoList.innerHTML = `
      <ul>
        ${this.state.map((todo) => `<li>${todo.text}}</li>`).join('')}
      </ul>
      `;
  };
  this.render;
}
