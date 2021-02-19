import {Sequelize} from 'sequelize';
import {databaseConfig} from './config';

const database = new Sequelize(databaseConfig);

export default database;
