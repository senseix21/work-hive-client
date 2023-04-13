import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';

const BlogsSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = `https://work-hive-server.vercel.app/blogs`;
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setBlogs(data.splice(0, 6));
            })
    }, []);

    return (
        <>
            <h2 className='text-3xl font-bold p-5 text-primary'>See our latest blogs</h2>
            <div className='grid lg:grid-cols-3 gap-5 mx-auto'>
                {
                    blogs.map((blog) =>
                        <BlogsCard
                            key={blog._id}
                            blog={blog}
                        ></BlogsCard>
                    )
                }

            </div>
        </>

    );
};

export default BlogsSection;