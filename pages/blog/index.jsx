// next 
import Head from 'next/head';
// components
import Navbar from '../../components/global/Navbar';
import NavbarDynamic from '../../components/global/NavbarDynamic';
import BlogMain from '../../components/blog/BlogMain';
import BlogPostList from '../../components/blog/BlogPostList';
import BlogSidebar from '../../components/blog/BlogSidebar';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';

export default function Blog() {

   return(
      <>
         <Head>
            <title>Blog | Enhance Your Reality | Qüu</title>
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
            <BlogMain />
            <div className='flex'>
               <BlogPostList />
               <BlogSidebar />
            </div>
         </main>
         <footer>
            <Footer />
            <Copyright />
         </footer>
      </>
   );
}