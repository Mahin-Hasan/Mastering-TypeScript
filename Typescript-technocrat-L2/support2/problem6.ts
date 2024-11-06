{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  function isRecentBook(book: Book): boolean {
    const currentYear = new Date().getFullYear();
    // return currentYear - book.publishedYear <=5 ? "true" : "false"
    return currentYear - book.publishedYear <= 5;
  }
  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2012,
  };

  console.log(isRecentBook(book1));
}
