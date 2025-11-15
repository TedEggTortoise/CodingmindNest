import { PartialType } from '@nestjs/mapped-types';
import { createTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(createTodoDto) {}
