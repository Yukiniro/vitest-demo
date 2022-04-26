interface Task {
  id: number;
  text: string;
}

let count = 1;

class Todo {
  protected list: Array<Task>;
  constructor() {
    this.list = [];
  }

  addTodo(text: string) {
    const task = {
      text,
      id: ++count,
    };
    this.list.push(task);
    return task;
  }
  removeTodo(id: number) {
    const oldList = [...this.list];
    this.list.length = 0;
    this.list.push(...oldList.filter((task) => task.id !== id));
  }
  clear() {
    this.list.length = 0;
  }
  all(): Array<Task> {
    return this.list;
  }
}

export { Todo, Task };
