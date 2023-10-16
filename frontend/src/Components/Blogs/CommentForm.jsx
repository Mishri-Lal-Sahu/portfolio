import React from "react";

const CommentForm = () => {
  return (
    <div>
      <form className="mb-6">
      <div className="md:flex md:gap-4">
        <div className="py-2 px-4 mb-4 w-full md:w-1/2 rounded-lg rounded-t-lg border  bg-gray-800 border-gray-700">
          <label for="userName" className="sr-only">
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            className="px-0 w-full  text-sm  border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
            placeholder="Write your name..."
            required
          />
        </div>
        <div className="py-2 px-4 mb-4 w-full md:w-1/2 rounded-lg rounded-t-lg border  bg-gray-800 border-gray-700">
          <label for="userEmail" className="sr-only">
            Your Email{" "}
          </label>
          <input
            type="text"
            id="userEmail"
            className="px-0 w-full  text-sm  border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
            placeholder="Write your email..."
            required
          />
        </div>
    </div>
        <div className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border  bg-gray-800 border-gray-700">
          <label for="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#1d4ed8] rounded-lg focus:ring-4 focus:ring-[#4162be] focus:ring-primary-900 hover:bg-[#1d20d8]"
        >
          Post comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
