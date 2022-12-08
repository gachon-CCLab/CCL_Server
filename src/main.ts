import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger 코드
    const config = new DocumentBuilder()
    .setTitle('CCL_Modality server RestAPI')
    .setDescription('Document for modality server`s rest API')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // swagger코드 끝

  
  await app.listen(process.env.APP_PORT);
}
bootstrap();
