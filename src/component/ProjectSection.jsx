// components/RecipeSection.jsx
import React, { useState } from 'react';

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Recipe Image with Actions */}
            <div className="space-y-6">
              {/* Recipe Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">▶</span>
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">Recipe Image</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-6 left-6 right-6 flex space-x-4">
                  <button className="flex-1 bg-white text-gray-900 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                    Play video
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-black transition-all">
                    Order feed
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Recipe Details */}
            <div className="space-y-6">
              {/* Recipe Title */}
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                LOTEK PERKEDEL
              </h1>

              {/* Rating and Chef */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
                    <span className="text-yellow-600 font-bold text-lg">★</span>
                    <span className="font-bold text-gray-900 text-lg">4.9</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Chef Fery</div>
                    <div className="text-sm text-gray-600">Chief Fery</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Fear lemonade beans intake, lemonade, egg, gingerbread, etc.
              </p>

              {/* Navigation Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`pb-4 font-semibold text-lg ${
                      activeTab === 'overview'
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-gray-500'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-4 font-semibold text-lg ${
                      activeTab === 'ingredients'
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-gray-500'
                    }`}
                  >
                    Ingredients
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Recipe Overview</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600">Step {item}</div>
                          <div className="font-medium text-gray-900">Preparation phase {item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 text-lg">Ingredients List</h3>
                    {[
                      "Lemonade beans",
                      "Fresh lemonade",
                      "Organic eggs",
                      "Gingerbread mix",
                      "Special intake spices",
                      "Secret herbs"
                    ].map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-4 pt-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <span className="text-2xl">♡</span>
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <span className="text-2xl">📌</span>
                  <span>Pin</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <span className="text-2xl">↗</span>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;