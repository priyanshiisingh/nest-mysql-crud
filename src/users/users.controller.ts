// import { User } from './users.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.service.getUsers();
    return {
      message: 'Users fetched successfully',
      users,
    };
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    const data = await this.service.getUser(id);
    return {
      message: 'User fetched successfully',
      data,
    };
  }

  @Post()
  async createUser(@Body() user: User) {
    const createduser = await this.service.createUser(user);
    return {
      message: 'User created successfully',
      createduser,
    };
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User) {
    await this.service.updateUser(id, user);
    return {
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.service.deleteUser(id);
    return {
      message: 'User deleted successfully',
    };
  }
}
