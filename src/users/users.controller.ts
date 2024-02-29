import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body(new ValidationPipe()) data: CreateUserDto) {
    try {
      // check is password
      await this.usersService.checkPassword(data);

      return this.usersService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.usersService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.usersService.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    // handle change password
    if (data.password) await this.usersService.checkPassword(data);

    try {
      return this.usersService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.usersService.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
