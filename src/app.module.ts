import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TokenModule } from './modules/token/token.module';
import { RoleModule } from './modules/role/role.module';
import * as process from 'process';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [AuthModule, UserModule, RoleModule],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_SECRET || 'SECRET KEY',
      signOptions: { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN },
    }),
    AuthModule,
    UserModule,
    TokenModule,
    RoleModule,
  ],
})
export class AppModule {}
