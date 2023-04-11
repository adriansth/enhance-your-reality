// next 
import Head from 'next/head';
import { useRouter } from 'next/router';
// components 
import Navbar from '../../components/global/Navbar';
import NavbarDynamic from '../../components/global/NavbarDynamic';
import BlogSidebar from '../../components/blog/BlogSidebar';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';
// axios 
import axios from 'axios';
// utils 
import { getImageSrc, cleanText } from '../../utils/blog';
// hooks 
import { useState, useEffect } from 'react';
// react html parser
import parse from 'html-react-parser';

export default function ArticlePage() {

   const router = useRouter();
   const { id } = router.query;

   const [ data, setData ] = useState([]);

   useEffect(() => {
      axios.get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_APIKEY}`)
         .then((res) => {
            setData(res.data.items)
         })
         .catch((err) => console.log(err));
   }, []);

   let article = data?.filter(article => article.id == id);
   article = article[0];
   let content = article ? article.content : '';
   let cleanContent = content ? cleanText(content) : '';
   let imgSrc = content ? getImageSrc(content) : '';

   return(
      <>
         <Head>
            <title>Blog | Enhance Your Reality | Qüu</title>
            <meta name='description' content='Enhance Your Reality | Qüu' />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <div className='relative'>
               <div className='absolute'>
                  <Navbar />
                  <NavbarDynamic />
               </div>
            </div>
            {/* article main */}
            <div className='w-screen h-[60vh] z-[-10] relative'>
               <div className=' absolute w-full h-full flex justify-center items-center'>
                  <h1 className='w-[60%] text-center text-xl xs:text-2xl sm:text-4xl font-semibold text-white absolute z-[0] w-full text-center p-5 bg-black bg-opacity-50'>{article?.title}</h1>
               </div>
               {
                  imgSrc ? <img src={imgSrc} alt="" className='w-full h-full object-cover' /> : <img src='https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='w-full h-full object-cover' />
               }
            </div>
            {/* article content and sidebar */}
            <div className='w-screen flex'>
               {/* article content */}
               <div className='w-[70%] pl-20 pr-10 py-20 text-justify'>
                  {cleanContent ? parse(cleanContent) : ''}
               </div>
               <div className='w-[30%]'>
               <BlogSidebar />
               </div>
            </div>
            {/* override styles */}
            <style jsx global>{`
                    h3 {
                        font-weight: semibold;
                        font-size: 1.8rem;
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                    }
                    p {
                        color: #6b7280;
                        font-weight: 300;
                        font-size: 1.2rem;
                        text-align: justify;
                    }
            `}</style>
         </main>
         <footer>
            <Footer />
            <Copyright />
         </footer>
      </>
   );
}