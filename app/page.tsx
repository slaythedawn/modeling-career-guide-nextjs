import { Suspense } from 'react';
import { GridTileImage } from 'components/grid/tile';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';

export const metadata = {
  title: 'Modeling Career Guide - Your Path to Success',
  description: 'The definitive resource for launching and advancing your modeling career.'
};

export default async function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Modeling Career</span>
              <span className="block text-gray-500">Starts Here</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The definitive resource for launching and advancing your modeling career with expert advice, agency listings, and professional resources.
            </p>
          </div>
        </div>
      </div>

      {/* Directory Sections */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900">Modeling Directories</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
            
            {/* Agencies Section */}
            <div className="group">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <a href="/search/agencies">
                  <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">Agencies</span>
                    </div>
                  </div>
                </a>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Modeling Agencies</h3>
              <p className="mt-1 text-sm text-gray-500">Find the perfect agency to represent your modeling career.</p>
            </div>
            
            {/* Photographers Section */}
            <div className="group">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <a href="/search/photographers">
                  <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">Photographers</span>
                    </div>
                  </div>
                </a>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Portfolio Photographers</h3>
              <p className="mt-1 text-sm text-gray-500">Connect with top photographers to build your modeling portfolio.</p>
            </div>
            
            {/* Training Section */}
            <div className="group">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <a href="/search/training">
                  <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">Training</span>
                    </div>
                  </div>
                </a>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Modeling Training</h3>
              <p className="mt-1 text-sm text-gray-500">Discover professional training programs to advance your career.</p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Academy Promotion */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Advance Your Modeling Career</h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Take your career to the next level with professional training from the Online Model Academy.
            </p>
            <div className="mt-8">
              <a href="/product/online-model-academy" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800">
                Explore Training Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
