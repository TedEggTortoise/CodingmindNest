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
import { UsersService, type User } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { identity } from 'rxjs';

export
@Controller('users')
class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id') // similar to post request
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser() {}
}
