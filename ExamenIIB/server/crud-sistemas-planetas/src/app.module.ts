import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SistemaSolarModule } from './sistema-solar/sistema-solar.module';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path';
import { PlanetasModule } from './planetas/planetas.module';

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),

      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'database.sqlite',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      SistemaSolarModule,
      PlanetasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
