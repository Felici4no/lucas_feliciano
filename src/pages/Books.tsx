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
      title: "Mostre sua Arte",
      author: "Austin Kleon",
      coverUrl: "https://i.imgur.com/GTtr5Qg.jpeg",
      rating: 5,
      completed: true,
      review: "Transformou minha relação com a exposição do meu trabalho. Compartilhar é parte da criação."
    },{
      title: "Meditações",
      author: "Marco Aurélio",
      coverUrl: "https://m.media-amazon.com/images/I/612B0id4gNL._AC_UF1000,1000_QL80_.jpg",
      rating: 0,
      completed: false,
      review: "Pretendo mergulhar nesta obra filosófica assim que terminar 'A Abolição do Homem'."
    },
    {
      title: "The Abolition of Man",
      author: "C. S. Lewis",
      coverUrl: "https://m.media-amazon.com/images/I/91xhBqPGLtL._AC_UF1000,1000_QL80_.jpg",
      rating: 5,
      completed: true,
      completedDate: "2025-02-15",
      review: "Defende a moral objetiva de forma brilhante. Filosofia e literatura em perfeita harmonia."
    },
    {
      title: "Essencialismo",
      author: "Greg McKeown",
      coverUrl: "https://m.media-amazon.com/images/I/71HuZRl-XeL.jpg",
      rating: 5,
      completed: true,
      completedDate: "2024-06-12",
      review: "Um livro transformador que me ensinou o poder de dizer não e focar no que realmente importa."
    },
    {
      title: "Arrume a Sua Cama",
      author: "William H. McRaven",
      coverUrl: "https://m.media-amazon.com/images/I/81C7jAnjS3L.jpg",
      rating: 4,
      completed: true,
      completedDate: "",
      review: "Simples, direto e inspirador. Pequenas ações podem gerar grandes mudanças."
    },
    {
      title: "Minha História",
      author: "Michelle Obama",
      coverUrl: "https://m.media-amazon.com/images/I/81Ed9yMQWIL._AC_UF1000,1000_QL80_.jpg",
      rating: 4,
      completed: true,
      completedDate: "",
      review: "Um relato poderoso de força, identidade e propósito. Extremamente inspirador."
    },
    {
      title: "Em Busca de Mim",
      author: "Viola Davis",
      coverUrl: "https://m.media-amazon.com/images/I/91J7EVQy1jL.jpg",
      rating: 5,
      completed: true,
      completedDate: "",
      review: "Autêntico e cru, um testemunho de superação e empoderamento. Me tocou profundamente."
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      coverUrl: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
      rating: 4,
      completed: true,
      completedDate: "",
      review: "Apesar do título provocativo, é um livro profundo sobre valores, limites e a importância de viver de forma autêntica."
    },{
      title: "Roube como um Artista",
      author: "Austin Kleon",
      coverUrl: "https://i.imgur.com/vvusW0a.jpeg",
      rating: 5,
      completed: true,
      review: "Um manifesto inspirador sobre como a criatividade se constrói a partir de referências. Leitura essencial para qualquer criador."
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
