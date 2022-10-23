const { Model, DataTypes } = require('sequelize');

class Books extends Model {
    static init(connection) {
        super.init({
            bookId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            bookName: DataTypes.STRING,
            bookAuthor: DataTypes.STRING,
            bookSales: DataTypes.INTEGER,
        }, {
            sequelize: connection,
            tableName: 'books',
            timestamps: false,
            freezeTableName: true
        })
    }
};

module.exports = Books;