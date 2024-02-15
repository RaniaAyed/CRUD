import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { SocketGateway } from './socket.gateway';
import { MongooseModule } from '@nestjs/mongoose'; // Importez MongooseModule
import { UserSchema } from './user.schema'; // Importez le schéma d'utilisateur

@Module({
  providers: [UsersResolver, SocketGateway],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Utilisez le schéma d'utilisateur ici
  ],
})
export class UsersModule {}
