import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ToDoModule } from './todo/todo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !process.env.NODE_ENV
        ? '.env'
        : `.env.${process.env.NODE_ENV}`,
    }),
    ToDoModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        databaseConfigurationOptions(configService),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}

function databaseConfigurationOptions(
  configService: ConfigService,
): TypeOrmModuleOptions {
  // Make the default an in-memory sqlite database if nothing
  // was specified
  const dbType = configService.get<DatabaseType>(
    'DB_TYPE',
    'sqlite',
  ) as DatabaseType;
  const dbDatabase = configService.get<string>('DB_DATABASE', ':memory:');

  return {
    type: dbType,
    database: dbDatabase,
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    autoLoadEntities: true,
    synchronize: configService.get<boolean>(
      'DB_SYNCHRONIZE',
      dbType == 'sqlite' && dbDatabase == ':memory:',
    ),
  } as TypeOrmModuleOptions;
}
