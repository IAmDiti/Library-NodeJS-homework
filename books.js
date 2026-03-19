const {read, write} = require("./read-write");

const getBooks = () => {
    return read();
};


const addBooks = async (booksData) => {
    let books = await read();
    books = [
        {Book: "Never Let Me Go", Author: "Kazuo Ishiguro",},
        {Book: "crime and punishment", Author: "Feydor Dostoyevski"},
    ];
    books.push(booksData);

    await write(books);
};




module.exports = {
    addBooks,
    getBooks
}