import { IsString, IsBoolean } from 'class-validator';

export class createTodoDto {
  @IsString()
  title: string;
  @IsString()
  text: string;
  @IsBoolean()
  completed: boolean;
}
