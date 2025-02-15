import { Model } from './model.js';
import { View } from './view.js';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
    this.view.render(this.model.todos);
  }

  handleAddTodo(text) {
    this.model.addTodo({ text, completed: false });
    this.view.render(this.model.todos);
  }

  handleDeleteTodo(index) {
    this.model.deleteTodo(index);
    this.view.render(this.model.todos);
  }

  handleToggleTodo(index) {
    this.model.toggleTodo(index);
    this.view.render(this.model.todos);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Controller(new Model(), new View());
});
