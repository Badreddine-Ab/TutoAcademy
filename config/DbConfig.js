module.exports = {
    HOST : 'localhost',
    USER : 'root',
    PASSWORD: 'Badr@2001',
    DB: 'tutoacademy',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}