const {
    addBooks,
    getBooks,
} = require("./books");

async function main () {
    const booksBefore = await getBooks();
    console.log(booksBefore);

    await addBooks({Book: "Norwegian Wood", Author: "Haruki Murakami"});
}



main();

//999