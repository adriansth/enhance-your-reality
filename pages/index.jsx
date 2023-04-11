import Head from 'next/head';
// components
import Navbar from '../components/global/Navbar';
import NavbarDynamic from '../components/global/NavbarDynamic';
import Main from '../components/home/Main';
import Description from '../components/home/Description';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Footer from '../components/global/Footer';
import Copyright from '../components/global/Copyright';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Enhance Your Reality | Qüu</title>
        <meta name="description" content="Enhance Your Reality | Qüu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='relative'>
          <div className='absolute'>
            <Navbar />
            <NavbarDynamic />
          </div>
          <Main />
        </div>
        <Services />
        <Description />
        <Contact />
      </main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </div>
  )
}
