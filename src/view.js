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
      if (event.target.classList.contains('delete-btn')) {
        handler(event.target.dataset.index);
      }
    });
  }

  bindToggleTodo(handler) {
    this.list.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        handler(event.target.dataset.index);
      }
    });
  }

  render(todos) {
    this.list.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.dataset.index = index;

      // Создаем чекбокс для изменения состояния задачи
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.index = index;
      checkbox.checked = todo.completed;

      // Добавляем чекбокс в начало элемента списка
      li.append(checkbox);

      // Добавляем текст задачи
      const text = document.createElement('span');
      text.textContent = todo.text;
      if (todo.completed) {
        text.style.textDecoration = 'line-through';
        text.style.color = 'gray';
      }
      li.append(text);

      // Кнопка для удаления задачи
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Удалить';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.dataset.index = index;
      li.append(deleteBtn);

      this.list.append(li);
    });
  }
}
