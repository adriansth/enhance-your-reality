// next 
import Head from 'next/head';
import { useRouter } from 'next/router';
// components 
import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';

export default function ClientDescriptionPage() {

     const router = useRouter();
     const { id } = router.query; // extract id from url

     return(
          <>
               <Head>
                    <title>Descripción de cliente | Enhance Your Reality | Qü</title>
                    <meta name='description' content='Enhance Your Reality | Qü' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                         </div>
                    </div>
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}