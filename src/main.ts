import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';
// import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';

const logger = new Logger('Main');

const microservicesOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};


 
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microservicesOptions);
  // const swaggerOptions = new DocumentBuilder().setTitle('Adddition Of Array').setDescription('Sum Of Elemts In Array').setVersion('1.0').build();
  // const document = SwaggerModule.createDocument(app, swaggerOptions)
  // SwaggerModule.setup('api', app, document)
  await app.listen(() =>{
    logger.log('microservice is listining')
  });
}
bootstrap();
