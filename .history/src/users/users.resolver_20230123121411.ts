import { Resolver, Query, Mutation, Context, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateMobileUserDTO } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoggedUserOutput } from './dto/logged-user.output';
import { LO } from './dto/login-user.input';
import { Request } from 'express';
import { UserProfileInput } from './dto/user-profile.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUser' })
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.findOne(userId);
  }

  @Query(() => User, { name: 'getUserProfile' })
  getUserProfile(@Args('userProfileInput') userProfileInput: UserProfileInput) {
    console.log('getUserProfile token');
    console.log(userProfileInput)
    return this.usersService.getUserProfile(userProfileInput.token);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.userId, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.remove(userId);
  }
  @Mutation(() => LoggedUserOutput)
  loginUser(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.usersService.loginUser(loginUserInput);
  }
}
