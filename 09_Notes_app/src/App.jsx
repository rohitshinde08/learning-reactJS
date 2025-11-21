import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Notes App
        </h1>

        {/* Input Fields */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter title"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            placeholder="Enter note"
            className="p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md">
            Add Note
          </button>
        </div>

        {/* Notes Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Notes</h2>

          {/* Example Note Card */}
          <div className="grid grid-cols-1 gap-4">
            {/* Your dynamic notes will go here */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
              <h3 className="font-bold text-blue-700">Sample Title</h3>
              <p className="text-gray-700 mt-1">
                This is a sample note. Your added notes will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
