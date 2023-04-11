// axios 
import axios from 'axios';
// hooks 
import { useEffect, useState } from 'react';
// components
import BlogPost from './BlogPost';

export default function BlogPostList() {

   const [ data, setData ] = useState([]);

   useEffect(() => {
      axios.get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_APIKEY}`)
         .then((res) => {
            setData(res.data.items);
            console.log(res.data.items);
         })
         .catch((err) => console.log(err));
   }, []);

   return(
      <div className='w-full lg:w-[70vw] py-20 px-10 md:px-20 lg:pl-20 lg:pr-10'>
         {
            data?.map((article) => (
               <BlogPost key={article.id} id={article.id} title={article.title} content={article.content} date={article.published} tags={article.labels} />
            ))
         }
      </div>
   );
}