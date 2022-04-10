import TodoList from './TodoList.js';
import TodoComments from './TodoComments.js';
import { request } from './api.js';

export default function App({ $app }) {
  this.state = {
    todos: [],
    selectedTodo: null,
    comments: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);
    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    });
  };

  const todoList = new TodoList({
    $target,
    initialState: this.state.todos,
    onClick: (id) => {
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);
      this.setState({
        ...this.state,
        selectedTodo,
      });

      request('url').then((data) => {
        this.setState({
          ...this.state,
          comments: data,
        });
      });
    },
  });

  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });

  const init = () => {
    request('url').thien((data) => {
      this.setState({
        ...this.state,
        todos: data,
      });
    });
  };

  init();
}
