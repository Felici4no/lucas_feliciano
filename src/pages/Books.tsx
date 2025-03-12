import React from 'react';
import { Book, CheckCircle, Star } from 'lucide-react';

interface BookType {
  title: string;
  author: string;
  coverUrl: string;
  rating: number;
  completed: boolean;
  completedDate?: string;
  review: string;
}

function Books() {
  const books: BookType[] = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      coverUrl: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF894,1000_QL80_.jpg",
      rating: 5,
      completed: false,
      review: "A fundamental book that changed how I think about writing code. The principles taught here are timeless."
    },{
      title: "The Abolition of Man",
      author: "C. S. Lewis",
      coverUrl: "https://loja.cidadederefugio.com.br/cdn/shop/files/c2b41f0db249f726c9c3c3a6fc4a4def-1.jpg?v=1708988784",
      rating: 5,
      completed: true,
      completedDate: "2025-02-15",
      review: "The Abolition of Man is a book by C. S. Lewis in which the Irish author develops a defense of the concept of objective value and natural law."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Book className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Reading List</h1>
      </div>

      <div className="grid gap-8">
        {books.map((book, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/4">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:w-3/4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {book.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      by {book.author}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {book.completed && (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < book.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {book.review}
                </p>

                {book.completed && book.completedDate && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completed on {new Date(book.completedDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;