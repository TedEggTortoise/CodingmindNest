import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodosService, type Todo } from './todos.service';
import { createTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getTodo(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: createTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Patch(':id') // similar to post request
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.deleteTodo(id);
  }
}
