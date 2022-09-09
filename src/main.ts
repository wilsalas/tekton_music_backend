import ENVIRONMENT from '@enum/environment.enum';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import initSwagger from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  app.enableCors();
  app.setGlobalPrefix(ENVIRONMENT.API_VERSION);
  initSwagger(app);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
