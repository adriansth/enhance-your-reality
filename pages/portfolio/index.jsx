// components
import Navbar from '../../components/global/Navbar';
import NavbarDynamic from '../../components/global/NavbarDynamic';
import PortfolioMain from "../../components/portfolio/PortfolioMain";
import PortfolioDescription from '../../components/portfolio/PortfolioDescription';
import PortfolioClients from '../../components/portfolio/PortfolioClients';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';
// next
import Head from 'next/head';

export default function PortfolioPage() {
     return(
          <>
               <Head>
                    <title>Portafolio | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Enhance Your Reality | Qüu' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main className='w-screen'>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                              <NavbarDynamic />
                         </div>
                    </div>
                    <PortfolioMain />
                    <PortfolioDescription />
                    <PortfolioClients />
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}