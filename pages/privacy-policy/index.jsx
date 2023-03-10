// nextjs 
import Head from 'next/head';
// components 
import Navbar from '../../components/global/Navbar';
import PrivacyPolicy from '../../components/privacy-policy/PrivacyPolicy';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';

export default function PrivacyPolicyPage() {
     return(
          <div>
               <Head>
                    <title>Política de Privacidad | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Enhance Your Reality | Qüu' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                         </div>
                         <PrivacyPolicy />
                    </div>
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </div>
     );
}