"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
let GraphqlModule = class GraphqlModule {
};
GraphqlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                subscriptions: {
                    'graphql-ws': {
                        path: '/graphql',
                        onConnect: (context) => {
                            const { connectionParams, extra } = context;
                            console.log('--------------------------------------------------');
                            console.log('connectionParams extra');
                            console.log(connectionParams);
                            console.log('extra');
                            console.log(extra);
                            extra.user = { user: {} };
                        },
                    },
                },
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                context: ({ req }) => {
                    return { req };
                },
            }),
        ],
    })
], GraphqlModule);
exports.GraphqlModule = GraphqlModule;
//# sourceMappingURL=graphql.module.js.map