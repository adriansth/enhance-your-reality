export default function AppsShowcase() {
   return(
      <div className='w-screen px-10 md:px-20 py-20 flex flex-col gap-y-5'>
         <h2 className='text-2xl sm:text-4xl font-semibold w-full text-center'>Servicios de Apps</h2>
         <p className='sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-center'>
            Construimos aplicaciones a tu medida y cumpliendo con tus necesidades. Además, ofrecemos programas predeterminados que podrían generar soluciones para tu negocio con respecto a tareas repetitivas.
         </p>
         <div className='w-full flex flex-col gap-y-20 pt-20'>
            {/* automation */}
            <div className='flex flex-col lg:flex-row items-center'>
               <div className='flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify'>
                  <h2 className='text-2xl font-semibold text-violet-900'>Automatización de procesos</h2>
                  <p className='text-sm md:text-xl font-light text-gray-500'>
                     Generamos soluciones con software con la finalidad de automatizar actividades repetitivas dentro de tu empresa. La metodología que seguimos es la siguiente:
                  </p>
                  <ol className='list-decimal text-sm md:text-xl font-light text-gray-500 pl-5'>
                     <li>Planteamos tu necesidades y generamos una solución con software.</li>
                     <li>Redactamos las funcionalidades y actividades a realizar para cumplir el objetivo.</li>
                     <li>Programamos la funcionalidad.</li>
                     <li>Aplicamos los cambios necesarios dentro del periodo establecido de servicio.</li>
                     <li>Implementamos tu nueva funcionalidad de automatización dentro de tu empresa.</li>
                  </ol>
                  <span className='text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2'>Desde $20,000 MXN</span>
               </div>
               <img src="https://images.pexels.com/photos/8728286/pexels-photo-8728286.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className='pt-10 lg:pt-0 w-full lg:w-[40%] object-cover h-full' />
            </div>
            {/* web app */ }
            <div className='flex flex-col lg:flex-row items-center'>
               <div className='flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify'>
                  <h2 className='text-2xl font-semibold text-violet-900'>Web App</h2>
                  <p className='text-sm md:text-xl font-light text-gray-500'>
                     Crea tu aplicación en la web, con las funcionalidades a tu medida. Crea un proyecto de software para tu empresa. Perfecto para negocios con el propósito de generar una herramienta de tecnología.
                  </p>
                  <ol className='list-decimal text-sm md:text-xl font-light text-gray-500 pl-5'>
                     <li>Especificamos las diferentes secciones y soluciones que tendrá tu aplicación web.</li>
                     <li>Redactamos contigo la información y el texto dentro de tu aplicación web, además de plantear las funcionalidades.</li>
                     <li>Programamos tu aplicación web.</li>
                     <li>Contruimos funcionalidades.</li>
                     <li>Aplicamos los cambios necesarios dentro del periodo de servicio.</li>
                     <li>¡Lanzamos tu aplicación web a la red!</li>
                  </ol>
                  <span className='text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2'>
                     Contacta para cotizar
                  </span>
               </div>
               <img src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full' />
            </div>
            {/* mobile app */}
            <div className='flex flex-col lg:flex-row items-center'>
               <div className='flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify'>
                  <h2 className='text-2xl font-semibold text-violet-900'>App Móvil</h2>
                  <p className='text-sm md:text-xl font-light text-gray-500'>
                     Crea tu aplicación personalizada para iOS y Andoid. Lánzala al mercado e implementa tus funcionalidades con total libertad. Perfectos para empresas con un fin tecnológico con el propósito de plasmar su visión en una plataforma útil y accesible para todos.
                  </p>
                  <ol className='list-decimal text-sm md:text-xl font-light text-gray-500 pl-5'>
                     <li>Especificamos las diferentes secciones y soluciones que tendrá tu aplicación.</li>
                     <li>Redactamos contigo la información y el texto dentro de tu aplicación web, además de plantear las funcionalidades y el diseño.</li>
                     <li>Programamos tu aplicación móvil.</li>
                     <li>Contruimos funcionalidades.</li>
                     <li>Aplicamos los cambios necesarios dentro del periodo de servicio.</li>
                     <li>¡Lanzamos tu aplicación móvil a la tienda de iOS y Android!</li>
                  </ol>
                  <span className='text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2'>
                     Contacta para cotizar
                  </span>
               </div>
               <img src="https://images.pexels.com/photos/4195335/pexels-photo-4195335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full' />
            </div>
            {/* erp / crm */}
            <div className='flex flex-col lg:flex-row items-center'>
               <div className='flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify'>
                  <h2 className='text-2xl font-semibold text-violet-900'>ERP / CRM</h2>
                  <p className='text-sm md:text-xl font-light text-gray-500'>
                     Implementamos un CRM (Customer Relationship Management) o ERP (Enterprise Resource Planning) para tu empresa. Esto ayuda a administrar tanto la relación con clientes como la logística de tu negocio. 
                  </p>
                  <ol className='list-decimal text-sm md:text-xl font-light text-gray-500 pl-5'>
                     <li>Especificamos si tu negocio necesita un CRM o un ERP dependiendo de tus necesidades.</li>
                     <li>Integramos un servicio externo con alguna de esas funcionalidades.</li>
                     <li>Incluimos a los miembros de tu negocio, para que tengan acceso a la administración y funcionalidades del servicio.</li>
                     <li>Aplicamos los cambios necesarios dentro del periodo del servicio.</li>
                  </ol>
                  <span className='text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2'>
                     Contacta para cotizar
                  </span>
               </div>
               <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full' />
            </div>
         </div>
      </div>
   );
}