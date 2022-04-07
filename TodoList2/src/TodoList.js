export default function TodoList({ $target, initialState, onClick }) {
  // params.$target - 해당 컴포넌트가 추가될 DOM 엘리먼트 (추가될 좌표인가?)
  // params.initialState - 해당 컴포넌트의 초기 상태
  const $element = document.createElement('div');
  $target.appendChild($element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (Array.isArray(this.state)) {
      $element.innerHTML = `
    <h1>Simple TodoList</h1>
    <ul>
      ${this.state
        .map(({ text }) => `<li data-id="${id}">${text}</li>`)
        .join('')}
    </ul>
    `;

      $element.querySelectorAll('li').forEach(($li) => {
        $li.addEventListener('click', (e) => {
          const { id } = e.target.dataset;
          onClick(parseInt(id, 10));
        });
      });
    }
  };

  this.render();
}
