interface Book {
  title: string;
  books: BookList[];
  clouds: CloudsList[];
}

interface BookList {
  id: number;
  title: string;
  authors: string;
  imgUrl: string;
}

interface CloudsList {
  id: number;
  style: number;
}
