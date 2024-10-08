'use client'
import { useParams } from 'next/navigation';
import { getBlogPostBySlug } from "@studio/lib/queries";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image'

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Ensure slug is available before fetching

    (async () => {
      const blogData = await getBlogPostBySlug(id);
      setBlog(blogData);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className='text-lg font-semibold text-gray-600'>Loading...</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className='text-lg font-semibold text-gray-600'>Blog post not found</span>
      </div>
    );
  }

  const seoTitle = blog.seo?.metaTitle || blog.title || 'Idea Yatra Blog'
  const seoDescription = blog.seo?.metaDescription || 'Default description for IdeaYatra blog.'
  const seoBlogUrl = `https://ideayatra.com/blogs/${blog.slug?.current}`
  const seoBlogImageUrl = blog.mainImage?.asset?.url || 'https://ideayatra.com/default-image.jpg'
  const seoBlogKeyword = blog.seo.metaKeywords.join(", ")

  {/* Open Graph / Facebook */}

  return (
    <>
      <meta name="description" content={seoDescription}/>
      <meta name="keywords" content={seoBlogKeyword} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoBlogImageUrl} />
      <meta property="og:url" content={seoBlogUrl} />
      <meta name="twitter:card" content="summary_large_image" />


    <div className="flex flex-col px-4 md:px-8 md:my-4 sm:my-4 lg:px-12 py-36 w-full ">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main Image */}
        {blog.mainImage?.asset?.url && (
          <div className="relative w-full h-72">
            <Image
              src={blog.mainImage?.asset?.url}
              alt={blog.mainImage?.alt || blog?.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="p-6">
          {/* Blog Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.title}</h1>

          {/* Metadata */}
          <div className="flex flex-col space-y-4 mb-6 text-gray-600 border-t border-gray-300 pt-4 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className="font-semibold">Author:</span>
            <span className="px-2">{blog.author.name}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className="font-semibold">Designation:</span>
            <span className="text-red-500 px-2">{blog.author.bio}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span className="font-semibold">Published At:</span>
            <span className="px-2">{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

      <div className='flex flex-col space-y-4 mb-6 text-gray-600 border-t border-gray-300 pt-4 pb-4'></div>


          {/* Blog Body */}
          <div className="text-base text-gray-800 space-y-6">
            {blog.body && blog.body.map((block, index) => {
              if (block._type === 'block') {
                return (
                  <div key={index} className="space-y-4">
                    {block.children && block.children.map((child, inx) => (
                      <p key={inx} className="leading-relaxed">{child.text}</p>
                    ))}
                   
                      
                  </div>
                );
              }
              if (block._type == 'image') {
                return (
                  <div key={index}>
                      <Image
                        src={urlForImage(block?.asset?._ref) }
                        alt={blog?.mainImage?.alt || blog?.title}
                        layout="responsive"
                        width={1200}
                        height={675}
                        className="rounded-t-lg"
                       />
                     </div>
                )
              }
              // Add more block types as needed
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;