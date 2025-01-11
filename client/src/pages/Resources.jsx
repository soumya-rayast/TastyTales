import React from 'react';

const blogData = [
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 1, 2020",
    views: "2.1K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?1",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 2, 2020",
    views: "2.2K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?2",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 3, 2020",
    views: "2.3K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?3",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 4, 2020",
    views: "2.4K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?4",
    category: "Convenire",
  },
];

const Resources = () => {
  return (
    <section className="px-6 lg:px-12 py-20 ">
      <h1 className="text-4xl text-center mb-12 font-extrabold text-secondary sm:text-5xl">
        Resources
      </h1>
      <article>
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Explore our curated collection of blogs
            </h2>
            <p className="text-gray-600">
              Dive into a world of knowledge with our handpicked resources.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                  <p className="text-sm text-gray-500">{blog.views}</p>
                  <p className="text-sm text-secondary mt-2 font-semibold">
                    {blog.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Resources;
