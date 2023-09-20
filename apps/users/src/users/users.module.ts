import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        path: join(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'subgraphs',
          'users.graphql',
        ),
      },
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class AppModule {}
