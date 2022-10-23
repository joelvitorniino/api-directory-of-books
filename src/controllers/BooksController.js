const Books = require('../model/Books');

module.exports = {
    async index(req, res) {
        const books = await Books.findAll();

        return res.json(books);
    },

    async store(req, res) {
        const { bookName, bookAuthor, bookSales } = req.body;

        const book = await Books.create({
            bookName,
            bookAuthor,
            bookSales
        });

        if(!book) {
            return res.status(400).json({ error: "Book not found" });
        }

        return res.json(book);
    },

    async update(req, res) {
        const { bookId } = req.params;

        const { bookName, bookAuthor, bookSales } = req.body;

        await Books.update(
            {
                bookName,
                bookAuthor,
                bookSales
            },
            { where: { bookId } }
        );

        const books = await Books.findByPk(bookId);

        res.json(books);
    },

    async findById(req, res) {
        const { bookId } = req.params;
    
        const bookById = await Books.findByPk(bookId);
    
        return res.json(bookById);
    },

    async delete(req, res) {
        const { bookId } = req.params;
    
        await Books.destroy({
          where: { bookId },
        });
    
        res.json();
    },
}