interface Author {
  id: number;
  name: string;
  books: Book[];   
}

interface Book {
  id: number;
  name: string;
  yearOfPublication: number;
  availability: boolean;
  author: string; 
}

interface Reader {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
}