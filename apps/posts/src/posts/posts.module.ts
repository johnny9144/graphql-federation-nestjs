import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';
import { PostsService } from './posts.service'; // Not included in example

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
          'apps',
          'posts',
          'subgraph.gql',
        ),
        federation: 2,
      },
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class AppModule {}
