// components
import Navbar from '../../components/global/Navbar';
import PortfolioMain from "../../components/portfolio/PortfolioMain";
// next
import Head from 'next/head';

export default function PortfolioPage() {
     return(
          <>
               <Head>
                    <title>Portafolio | Enhance Your Reality | Qü</title>
                    <meta name='description' content='Enhance Your Reality | Qü' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                         </div>
                    </div>
                    <PortfolioMain />
               </main>
          </>
     );
}