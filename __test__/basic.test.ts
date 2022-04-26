import { test, expect, beforeEach } from "vitest";
import { Todo } from "../src/basic";

const todo = new Todo();
beforeEach(() => {
  todo.clear();
});

test("addTodo", () => {
  todo.addTodo("task 1");
  expect(todo.all().length).toBe(1);
});

test("removeTodo", () => {
  const { id: id1 } = todo.addTodo("task 1");
  const { id: id2 } = todo.addTodo("task 2");
  todo.removeTodo(id1);
  expect(todo.all()[0]).toEqual({
    id: id2,
    text: "task 2",
  });
});
