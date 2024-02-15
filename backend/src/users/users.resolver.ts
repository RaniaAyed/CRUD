import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity'; // Assurez-vous que User est un type GraphQL
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserService) {}
  
    @Query(() => [User])
    async users(): Promise<User[]> {
      return this.userService.findAllUsers();
    }
  
    @Query(() => User)
    async user(@Args('id') id: string): Promise<User> {
      return this.userService.findUserById(id);
    }
  
    @Mutation(() => User)
    async createUser(@Args('data') data: CreateUserInput): Promise<User> {
      return this.userService.createUser(data);
    }
  
    @Mutation(() => User)
    async updateUser(
      @Args('id') id: string,
      @Args('data') data: UpdateUserInput,
    ): Promise<User> {
      return this.userService.updateUser(id, data);
    }
  
    @Mutation(() => Boolean)
    async deleteUser(@Args('id') id: string): Promise<boolean> {
      return this.userService.deleteUser(id);
    }
}


