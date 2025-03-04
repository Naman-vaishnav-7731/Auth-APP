// Here Mention all Database related configuration
const DBCONFIG = {
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASSWORD: '#include',
    DATABASE: 'authDB',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquired: 3000,
        idle: 10000
    }
}

export default DBCONFIG;