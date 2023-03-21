"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketAdapter = void 0;
const core_1 = require("@nestjs/core");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const authenticated_socket_adapter_1 = require("./sockets/authenticated-socket.adapter");
const path_1 = require("path");
const app_module_1 = require("./app.module");
class SocketAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const server = super.createIOServer(port, Object.assign(Object.assign({}, options), { cors: {
                origin: '*',
                methods: ['GET', 'POST'],
            } }));
        return server;
    }
}
exports.SocketAdapter = SocketAdapter;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = 3001;
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'));
    app.enableCors({
        origin: '*',
    });
    app.useWebSocketAdapter(new SocketAdapter(app));
    app.useWebSocketAdapter(new authenticated_socket_adapter_1.AuthenticatedSocketAdapter(app));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map