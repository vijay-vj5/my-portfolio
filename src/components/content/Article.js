import React from 'react';
import Articlelist from './Articlelist';

const Article = () => {
  return (
    <div>
        <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Articlelist.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg
              overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                
                <div className="p-6">
                  
                    <h3 className="title-font text-lg font-medium text-gary-900 mb-3">
                      {article.title}
                    </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Article