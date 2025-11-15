import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

export interface User {
  id: number;
  name: string;
  age: number;
  role: 'TEACHER' | 'STUDENT' | 'ADMIN';
}

@Injectable()
export class UsersService {
  // private users = ([] = [
  //   { id: 1, name: 'Alice', age: 30, role: 'TEACHER' },
  //   { id: 2, name: 'Bob', age: 20, role: 'STUDENT' },
  //   { id: 3, name: 'Charlie', age: 25, role: 'ADMIN' },
  // ]);

  private users: User[] = [
    { id: 1, name: 'Alice', age: 30, role: 'TEACHER' },
    { id: 2, name: 'Bob', age: 20, role: 'STUDENT' },
    { id: 3, name: 'Charlie', age: 25, role: 'ADMIN' },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(data: createUserDto) {
    const maxId = Math.max(...this.users.map((user) => user.id));
    const newUser: User = { id: maxId + 1, ...data };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = this.getUser(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.name) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.age) {
      user.age = updateUserDto.age;
    }
    if (updateUserDto.role) {
      user.role = updateUserDto.role;
    }
    return user;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }
}
