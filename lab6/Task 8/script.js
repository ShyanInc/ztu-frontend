    const books = document.querySelectorAll(".book");

    books.forEach((book) => {
        book.addEventListener("click", () => {
            const isGreen = book.style.backgroundColor === "lightgreen";

            books.forEach((otherBook) => {
                otherBook.style.backgroundColor = "#FFFFFF";
            });

            book.style.backgroundColor = isGreen ? "#FFFFFF" : "lightgreen";
        });
    });