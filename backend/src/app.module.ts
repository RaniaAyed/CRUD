
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'; // Importez GraphQLModule depuis @nestjs/graphql
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';
import { SocketGateway } from './users/socket.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    GraphQLModule.forRoot({
      autoSchemaFile: true, // Utilisez un fichier de schéma automatique
      driver: {
        provide: 'APOLLO_DRIVER', // Fournissez une clé pour le pilote Apollo
        useClass: GraphQLModule, // Utilisez le module GraphQL de NestJS comme pilote
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersResolver, SocketGateway],
})
export class AppModule {}


