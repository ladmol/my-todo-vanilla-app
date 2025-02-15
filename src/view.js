export class View {
  constructor() {
    this.app = document.getElementById('app');
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.button = document.createElement('button');
    this.list = document.createElement('ul');

    this.button.textContent = 'Добавить';
    this.form.append(this.input, this.button);
    this.app.append(this.form, this.list);
  }

  bindAddTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      if (this.input.value.trim()) {
        handler(this.input.value.trim());
        this.input.value = '';
      }
    });
  }

  bindDeleteTodo(handler) {
    this.list.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        handler(event.target.dataset.index);
      }
    });
  }

  bindToggleTodo(handler) {
    this.list.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        handler(event.target.dataset.index);
      }
    });
  }

  render(todos) {
    this.list.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.textContent = todo.text;
      li.dataset.index = index;
      if (todo.completed) li.style.textDecoration = 'line-through';
      const button = document.createElement('button');
      button.textContent = 'Удалить';
      button.dataset.index = index;
      li.append(button);
      this.list.append(li);
    });
  }
}
