import { NestFactory } from '@nestjs/core';
import { AppModule } from './posts/posts.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
