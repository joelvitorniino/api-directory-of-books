const { Model, DataTypes } = require('sequelize');

class Books extends Model {
    static init(connection) {
        super.init({
            bookId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autOIncrement: true
            },
            bookName: DataTypes.STRING,
            bookAuthor: DataTypes.STRING,
            bookSales: DataTypes.INTEGER
        }, {
            sequelize: connection,
            tableName: 'books'
        })
    }
}