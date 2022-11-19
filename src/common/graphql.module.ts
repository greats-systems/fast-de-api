import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Context } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
          onConnect: (context: Context<any>) => {
            const { connectionParams, extra } = context;
            // user validation will remain the same as in the example above
            // when using with graphql-ws, additional context value should be stored in the extra field

            console.log('--------------------------------------------------');

            console.log('connectionParams extra');
            console.log(connectionParams);
            extra.user = { user: {} };
          },
        },
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }): object => {
        // console.log("req: ", req.headers); // Here I have the ip
        // let rawHeaders = req.headers
        return { req };
      },
    }),
  ],
})
export class GraphqlModule {}
