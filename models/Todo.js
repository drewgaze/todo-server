let id = 0;

const getNextId = () => id++;

class Todo {
  constructor({ content = "", id, date, completed = false }) {
    this.id = id ? Number(id) : getNextId();
    this.content = content;
    this.date = date ?? Date.now();
    this.completed = completed ?? false;
  }
}

export { Todo as default, Todo };
