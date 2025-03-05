import { Sequelize, DataTypes } from 'sequelize';
import DBCONFIG from '../config/db.js';
import User from './User.js';

// Main sequelize Instance
export const sequelize = new Sequelize(DBCONFIG.DATABASE, DBCONFIG.DB_USER, DBCONFIG.DB_PASSWORD, {
    host: DBCONFIG.DB_HOST,
    dialect: DBCONFIG.dialect,
    pool: {
        max: DBCONFIG.pool.max,
        min: DBCONFIG.pool.min,
        acquire: DBCONFIG.pool.acquired,
        idle: DBCONFIG.pool.idle
    }
});

export let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// User model
db.users = User(sequelize, DataTypes);


