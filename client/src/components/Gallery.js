import React from "react";
import resort1 from "../assets/resort1.jpeg";
const Gallery = () => {
  return (
    <div>
      <div class="overflow-x-auto">
        <div class="flex space-x-4">
          <div class="flex-none w-screen bg-white rounded-lg shadow-lg mx-48">
            <img
              src={resort1.jpeg}
              alt="Card 1"
              class="w-full h-32 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold">Card 1 Title</h2>
              <p class="text-gray-600">Description of Card 1.</p>
            </div>
          </div>

          <div class="flex-none w-64 bg-white rounded-lg shadow-lg">
            <img
              src={resort1.jpeg}
              alt="Card 2"
              class="w-full h-32 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold">Card 2 Title</h2>
              <p class="text-gray-600">Description of Card 2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
