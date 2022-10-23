const Books = require('../model/Books');

module.exports = {
    async index(req, res) {
        const books = await Books.findAll();

        return res.json(books);
    },

    async store(req, res) {
        const { booksName, bookAuthor, bookSales } = req.body;

        const book = await Books.create({
            booksName,
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

        const { booksName, bookAuthor, bookSales } = req.body;

        await Books.update(
            {
                booksName,
                bookAuthor,
                bookSales
            },
            { where: { id: bookId } }
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
          where: { id: bookId },
        });
    
        res.json();
    },
}