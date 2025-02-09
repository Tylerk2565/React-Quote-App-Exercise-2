import { useState, useEffect } from "react";

const QuoteDisplay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("api/quotes");
    const data = await response.json();
    setQuote(data[0].q);
    setAuthor(data[0].a);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
        <p className="text-xl font-semibold text-gray-800 mb-4">"{quote}"</p>
        <p className="text-lg text-gray-600 mb-6">- {author}</p>
        <button
          onClick={fetchQuote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteDisplay;
