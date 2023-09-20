import {
  Query,
  Args,
  ResolveField,
  Resolver,
  Parent,
  ID,
  ResolveReference,
} from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { User } from './user.entity';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => Post)
  post(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((returns) => [Post])
  posts(): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }

  // @ResolveReference()
  // resolveReference(reference: { __typename: string; id: number }): Post {
  //   return this.postsService.findOne(reference.id);
  // }
}
