let id = 0;

const getNextId = () => id++;

class Todo {
  constructor({ content = "", id, date, complete = false }) {
    this.id = id ?? getNextId();
    this.content = content;
    this.date = date ?? Date.now();
    this.complete = complete ?? false;
  }
}

export { Todo as default, Todo };
