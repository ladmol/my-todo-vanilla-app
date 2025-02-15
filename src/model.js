export class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    this._commit();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    this._commit();
  }

  toggleTodo(index) {
    this.todos[index].completed = !this.todos[index].completed;
    this._commit();
  }

  _commit() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
