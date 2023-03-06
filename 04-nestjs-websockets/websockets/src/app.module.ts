// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import {TypeOrmModule} from "@nestjs/typeorm";
// import {EventosModule} from "./eventos/eventos.module";
// @Module({
//   imports: [ // Imports importamos otros modulos
//     EventosModule,
//     TypeOrmModule.forRoot({
//       type: 'sqlite',
//       database: './bdd/bdd.sqlite',
//       entities: [
//         UsuarioEntity,
//       ], // entidades de TOODOO el aplicativo
//       synchronize: true, // true => edita las columnas y tablas // false => nada
//       dropSchema: false, // true => borra toda la base de datos! cuidado! // false => nada
//     }),
//     UsuarioModule
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
