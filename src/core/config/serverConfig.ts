import {ServerOptions} from '@hapi/hapi';

const serverConfig: ServerOptions = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    debug: {request: ['error']},
    routes: {
        cors: {
            origin: ['*']
        }
    }
};

export default serverConfig;
