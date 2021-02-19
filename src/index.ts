import {initServer, database} from './core';
import {SequelizeScopeError} from 'sequelize';

const start = async () => {
    const server = await initServer();
    await server.start();

    database
        .sync()
        .then(() => server.log('info', 'Connection to database has been initialized'))
        .catch((err: SequelizeScopeError) => server.log('error', `Connection to database has failed: ${err}`));
};

start().catch((error) => {
    throw error;
});
