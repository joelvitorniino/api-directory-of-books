module.exports = {
    dialect: 'postgre',
    host: process.env.POSTGRE_HOST,
    username: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    define: {
        timestamps: true,
        underscored: true
    }
}