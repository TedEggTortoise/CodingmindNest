import { Injectable, NotFoundException } from '@nestjs/common';
import { createTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

export interface Todo {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 1, title: 'Laundry', text: 'Todo1', completed: false },
    { id: 2, title: 'todo2', text: 'Todo2', completed: true },
    { id: 3, title: 'todo3', text: 'Todo3', completed: false },
  ];

  getTodos() {
    return this.todos;
  }

  getTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo;
  }

  createTodo(data: createTodoDto) {
    const maxId = Math.max(...this.todos.map((todo) => todo.id));
    const newTodo: Todo = { id: maxId + 1, ...data };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.getTodo(id);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    if (updateTodoDto.title) {
      todo.title = updateTodoDto.title;
    }
    if (updateTodoDto.text) {
      todo.text = updateTodoDto.text;
    }
    if (updateTodoDto.completed) {
      todo.completed = updateTodoDto.completed;
    }
    return todo;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos;
  }
}
