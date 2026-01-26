// components/RecipeCard.jsx
import React, { useState } from 'react';
import { Play, Star, Heart, Share2, BookmarkPlus } from 'lucide-react';

const ProjectCard = ({ recipe }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Image with Play Button */}
          <div className="relative bg-gray-900">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-96 lg:h-full object-cover opacity-90"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-6 shadow-2xl hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-black fill-current" />
              </button>
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-6 right-6 flex flex-col space-y-3">
              <button className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>
              <button className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <BookmarkPlus className="w-6 h-6 text-gray-700" />
              </button>
              <button className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Order Feed Button */}
            <div className="absolute bottom-6 left-6">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                Order feed
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="p-8">
            {/* Recipe Title and Rating */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {recipe.title}
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 text-yellow-600 fill-current" />
                  <span className="font-bold text-yellow-700">{recipe.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-700">{recipe.chef}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {recipe.description}
            </p>

            {/* Navigation Tabs */}
            <div className="mb-6">
              <div className="flex space-x-8 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 font-semibold text-lg ${
                    activeTab === 'overview'
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-4 font-semibold text-lg ${
                    activeTab === 'ingredients'
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500'
                  }`}
                >
                  Ingredients
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">Preparation Steps</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Step 1</div>
                      <div className="font-medium">Prepare ingredients</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Step 2</div>
                      <div className="font-medium">Mix components</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Step 3</div>
                      <div className="font-medium">Cook mixture</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Step 4</div>
                      <div className="font-medium">Serve hot</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Required Ingredients</h3>
                  <div className="grid gap-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg">
                Play video
              </button>
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-lg">
                Order feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;