// next 
import Head from 'next/head';
import { useRouter } from 'next/router';
// components 
import Navbar from '../../components/global/Navbar';
import NavbarDynamic from '../../components/global/NavbarDynamic';
import ClientDescriptionMain from '../../components/portfolio/ClientDescriptionMain';
import ClientDescriptionInfo from '../../components/portfolio/ClientDescriptionInfo';
import Footer from '../../components/global/Footer';
import Copyright from '../../components/global/Copyright';
// data 
import { clients } from '../../data/clients';

export default function ClientDescriptionPage() {

     const router = useRouter();
     const { name } = router.query; // extract name from url

     return(
          <>
               <Head>
                    <title>{client?.name} | Enhance Your Reality | Qüu</title>
                    <meta name='description' content='Enhance Your Reality | Qüu' />
                    <link rel="stylesheet" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='relative'>
                         <div className='absolute'>
                              <Navbar />
                              <NavbarDynamic />
                         </div>
                    </div>
                    {
                         clients.filter((client) => client?.name === name).map((item) => (
                              <div>
                                   <ClientDescriptionMain name={item?.name} description={item?.description} />
                                   <ClientDescriptionInfo name={item?.name} date={item?.date} images={item?.content?.images} title={item?.content?.title} description={item?.content?.description} social={item?.content?.socialMedia} url={item?.url} />
                              </div>
                         ))
                    }
               </main>
               <footer>
                    <Footer />
                    <Copyright />
               </footer>
          </>
     );
}