import { IsEnum, IsNumber, IsString } from 'class-validator';

export class createUserDto {
    @IsString()
    name: string;
    @IsNumber()
    age: number;
    @IsEnum(['TEACHER', 'STUDENT', 'ADMIN'])
    role: 'TEACHER' | 'STUDENT' | 'ADMIN';  
}