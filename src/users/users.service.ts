// import { User } from './users.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    return await this.usersRepository.find();
  }

  async getUser(_id: number) {
    return await this.usersRepository.findOne({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async createUser(user: User) {
    const userDeets = this.usersRepository.create(user);
    await this.usersRepository.save(user);
    return userDeets;
  }

  async updateUser(id: number, user: User) {
    await this.usersRepository.update({ id }, user);
    return await this.usersRepository.findOne({
      where: [{ id: id }],
    });
  }

  async deleteUser(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }
}
