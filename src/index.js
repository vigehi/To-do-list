import './style.css';
import Todo from './modules/todo.js';
import {
  desc,
  form,
  refresh,
  clear,
} from './modules/element.js';

const todo1 = new Todo();

todo1.renderPage();

desc.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && desc.value !== '') {
    todo1.addTodo();
    e.preventDefault();
    form.reset();
  }
});

const load = () => window.location.reload();

refresh.addEventListener('click', load);
clear.addEventListener('click', () => {
  todo1.clearCompleted();
});
