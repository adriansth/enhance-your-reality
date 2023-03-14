// components
import ServiceDescriptionCard from "./ServiceDescriptionCard";
// data 
import { services } from '../../data/services'; 

export default function ServicesShowcase() {
     return(
          <div className='w-screen px-10 lg:px-0 py-20 flex flex-col gap-y-5'>
               <h2 className='text-2xl sm:text-4xl font-semibold w-full text-center'>Elige tu proyecto</h2>
               <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-center'>Revisa cada uno de los servicios disponibles. Contacta con nosotros para analizar tus necesidades y digitaliza tu negocio.</p>
               <div className='w-full flex flex-col mt-5 lg:mt-0 gap-y-10 lg:flex-row justify-center gap-x-5'>
                    {
                         services.map((service) => (
                              <ServiceDescriptionCard key={service.id} name={service.name} description={service.description} available={service.available} image={service.img} />
                         ))
                    }
               </div>
          </div>
     );
}