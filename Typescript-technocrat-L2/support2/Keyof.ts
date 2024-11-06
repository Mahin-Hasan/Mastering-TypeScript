{
  //Define a simple boook type
  type Book = {
    title: string;
    author: string;
    yearPublished: number;
  };
  // Use "keyof" to get keys of the Book type
  type BookKeys = keyof Book;



  //Book[title] = "TypeScript"

  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key];
  }

  const myBook: Book = {
    title: "The Great TS",
    author: "Mezba",
    yearPublished: 2025,
  };

  const author = getBookProperty(myBook,"author");
  console.log(author);
}
