import { Injectable } from '@nestjs/common';
import { User } from './user.entity'; // Importez correctement le type User depuis user.entity.ts
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findUserById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async createUser(createUserDto: CreateUserInput): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async updateUser(id: string, updateUserDto: UpdateUserInput): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<boolean> {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        return result && result.deletedCount > 0;
    }
}
