export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement('form');

  $target.appendChild($form);

  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
        <input type="text" placeholder="할일을 입력하세요." >
        <button>Add</button>
        `;

    $form.addEventListener('submit', (e) => {
      e.preventDefault();

      const $input = $form.querySelector('input');
      const content = $input.value;

      onSubmit(content);
      $input.value = '';
    });
    isInit = true;
  };

  this.render();
}
