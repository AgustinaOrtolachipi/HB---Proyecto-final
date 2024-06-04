import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'test',
      password: '$2b$10$wuyD2JufBpJzE8/RzTeYd.wlS/gB4Wj2f3fWcmkNz1DA5n3/1m4u2', // password: 'test'
    },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  async create(user: any): Promise<any> {
    this.users.push(user);
    return user;
  }
}
