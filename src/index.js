
import './style.css';
import todo from './modules/todo.js';
import {
  desc,
  clear,
  statusIn,
  List,
  deleteb,
  form,
  refresh, 
  edit
} from './modules/element.js';

const todo1 = new todo();

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
