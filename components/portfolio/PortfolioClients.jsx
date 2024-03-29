// hooks
import { useState } from 'react';
// data 
import { clients } from '../../data/clients';
// components
import ServiceCard from './ServiceCard';
// next 
import Link from 'next/link';

export default function PortfolioClients() {

     const [ optionSelected, setOptionSelected ] = useState('all'); // all, web, marketing, identity

     console.log(clients);

     const web = clients.filter((item) => item.type === 'web');
     const identity = clients.filter((item) => item.type === 'identity');
     const apps = clients.filter((item) => item.type === 'apps');

     return(
          <div className='bg-white w-screen py-20'>
               {/* filters */}
               <div className='w-full text-lg md:text-sm font-semibold flex flex-col gap-y-3 md:flex-row items-center justify-center gap-x-5 text-gray-700'>
                    <span 
                         className={`hover:text-sky-400 underline cursor-pointer transition-colors ${optionSelected === 'all' ? 'text-sky-400' : ''}`}
                         onClick={() => setOptionSelected('all')}
                    >
                              Todos los proyectos
                    </span>
                    <span 
                         className={`hover:text-sky-400 underline cursor-pointer transition-colors ${optionSelected === 'web' ? 'text-sky-400' : ''}`}
                         onClick={() => setOptionSelected('web')}
                    >
                              Web
                    </span>
                    <span 
                         className={`hover:text-sky-400 underline cursor-pointer transition-colors ${optionSelected === 'identity' ? 'text-sky-400' : ''}`}
                         onClick={() => setOptionSelected('identity')}
                    >
                              Identidad corporativa
                    </span>
                    <span 
                         className={`hover:text-sky-400 underline cursor-pointer transition-colors ${optionSelected === 'apps' ? 'text-sky-400' : ''}`}
                         onClick={() => setOptionSelected('apps')}
                    >
                              Apps
                    </span>
               </div>
               {/* all content */}
               {
                    optionSelected === 'all' && (
                         <div className='rounded-lg w-screen flex flex-wrap justify-center gap-x-5 gap-y-5 pt-20 px-20'>
                              {
                                   clients.map((item) => (
                                        <Link href={`/portfolio/${item.name}`} key={item.id}>
                                             <ServiceCard service={item} />
                                        </Link>
                                   ))
                              }
                         </div>
                    )
               }
               {/* web content */}
               {
                    optionSelected === 'web' && (
                         <div className='rounded-lg w-screen flex flex-wrap justify-center gap-x-5 gap-y-5 pt-20 px-20'>
                              {
                                   web.map((item) => (
                                        <Link href={`/portfolio/${item.name}`} key={item.id}>
                                             <ServiceCard service={item} />
                                        </Link>
                                   ))
                              }
                         </div>
                    )
               }
               {/* identity content */}
               {
                    optionSelected === 'identity' && (
                         <div className='rounded-lg w-screen flex flex-wrap justify-center gap-x-5 gap-y-5 pt-20 px-20'>
                              {
                                   identity.map((item) => (
                                        <Link href={`/portfolio/${item.name}`} key={item.id}>
                                             <ServiceCard service={item} />
                                        </Link>
                                   ))
                              }
                         </div>
                    )
               }
               {/* apps */}
               {
                    optionSelected === 'apps' && (
                         <div className='rounded-lg w-screen flex flex-wrap justify-center gap-x-5 gap-y-5 pt-20 px-20'>
                              {
                                   apps.map((item) => (
                                        <Link href={`/portfolio/${item.name}`} key={item.id}>
                                             <ServiceCard service={item} />
                                        </Link>
                                   ))
                              }
                         </div>
                    )
               }
          </div>
     );
}