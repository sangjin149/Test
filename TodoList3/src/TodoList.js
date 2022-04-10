export default function TodoList({
  $target,
  initialState,
  onToggle,
  onRemove,
}) {
  // params.$target - 해당 컴포넌트가 추가될 DOM 엘리먼트 (추가될 좌표인가?)
  // params.initialState - 해당 컴포넌트의 초기 상태
  const $todo = document.createElement('div');
  $target.appendChild($todo);
  /*
   Todo:
   [{
     _id: 1,
     content: 'Javascript 학습하기',
     isCompleted: true,
   }, ...]   
   */

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (Array.isArray(this.state)) {
      $todo.innerHTML = `
    <ul>
      ${this.state
        .map(
          ({ _id, content, isCompleted }) => `
        <li data-id="${_id}" class="todo-item">
        ${isCompleted ? `<s?>${content}</s?>` : content}
        <button class = "remove">x</button>
        </li>`,
        )
        .join('')}
    </ul>
    `;

      $todo.addEventListener('click', (e) => {
        const $li = e.target.closest('.todo-item');
        if ($li) {
          const { id } = $li.dataset;
          const { className } = e.target;

          if (className === 'remove') {
            onRemove(id);
          } else {
            onToggle(id);
          }
        }
      });
    }
  };

  this.state = initialState;

  this.render();
}
