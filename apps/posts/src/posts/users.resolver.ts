import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { User } from './user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField((of) => [Post])
  public posts(@Parent() user: User): Post[] {
    return this.postsService.findAllByAuthorId(user.id);
  }
}
