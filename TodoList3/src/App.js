import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

export default function App({ $target }) {
  new TodoForm({
    $target,
    onSubmit: (content) => {
      alert(`${content} 추가처리`);
    },
  });

  new TodoList({
    $target,
    initialState: DUMMY_DATA,
    onToggle: (id) => {
      alert(`${id} 토글 예정`);
    },
    onRemove: (id) => {
      alert(`${id} 삭제 예정`);
    },
  });
}
