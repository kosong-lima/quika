export default function Page() {
  return (
    <div className="bg-blue-900 h-screen text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        {/* Title */}
        <div className="text-lg font-bold">Survey #1</div>
        {/* Action Buttons */}
        <div className="space-x-4">
          {/* Share Button */}
          <button className="text-blue-300 hover:underline">Share</button>
          {/* View Results Button */}
          <button className="text-blue-300 hover:underline">View Results</button>
          {/* Publish Button */}
          <button className="bg-green-500 px-4 py-2 rounded text-white">Publish</button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-1/4 bg-blue-800 p-4">
          {/* List of Sections */}
          <div className="space-y-4">
            {["Section #1", "Section #2", "Section #3", "Section #4"].map((section, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-2 py-3 bg-blue-700 rounded cursor-pointer hover:bg-blue-600"
              >
                {/* Section Name */}
                <span>{section}</span>
                {/* Circle Indicator */}
                <span className="text-blue-400">•</span>
              </div>
            ))}
          </div>
          {/* Organize Sections Button */}
          <button className="mt-4 text-blue-300 hover:underline">Organize Sections</button>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-6">
          {/* Form Container */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            {/* Question Input and Dropdown */}
            <div className="flex justify-between items-center mb-4">
              {/* Input for the Question */}
              <input
                type="text"
                placeholder="Question..."
                className="w-full bg-transparent border-b border-blue-600 outline-none text-lg placeholder-blue-400"
              />
              {/* Dropdown Selector */}
              <select className="ml-4 bg-blue-700 text-white rounded p-2 outline-none">
                <option>Dropdown</option>
                <option>Text</option>
                <option>Multiple Choice</option>
              </select>
            </div>
            {/* Options List */}
            <div className="space-y-2">
              {/* Option 1 */}
              <div className="flex items-center">
                <span className="mr-2">1.</span>
                <input
                  type="text"
                  placeholder="Option 1"
                  className="w-full bg-transparent border-b border-blue-600 outline-none placeholder-blue-400"
                />
              </div>
              {/* Option 2 */}
              <div className="flex items-center">
                <span className="mr-2">2.</span>
                <input
                  type="text"
                  placeholder="Option 2"
                  className="w-full bg-transparent border-b border-blue-600 outline-none placeholder-blue-400"
                />
              </div>
            </div>
            {/* Done Button */}
            <button className="mt-4 text-blue-300 hover:underline">Done</button>
          </div>
          {/* Add New Section */}
          <button className="mt-6 flex items-center space-x-2 text-blue-300 hover:underline">
            {/* Add Icon */}
            <span className="bg-blue-700 p-2 rounded-full">+</span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
