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
                  <span className='text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2'>Contacta para cotizar</span>
               </div>
               <img src="https://elements-cover-images-0.imgix.net/28489465-e00a-4346-a52d-9c2112ddf947?auto=compress%2Cformat&fit=max&w=1170&s=456a61271edfe82c1ccebc4f03dd8a86" alt="" className='pt-10 lg:pt-0 w-full lg:w-[40%] object-cover h-full shadow-lg rounded-lg' />
            </div>
            {/* web app */}
            <div className="flex flex-col lg:flex-row items-center">
               <div className="flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify">
                  <h2 className="text-2xl font-semibold text-violet-900">Web App</h2>
                  <p className="text-sm md:text-xl font-light text-gray-500">
                  Ofrecemos desarrollo web personalizado, es decir, aplicaciones web
                  con alguna funcionalidad que se requiera. Nuestras herramientas
                  son modernas y eficientes, estas permiten un desarrollo ágil y de
                  calidad para cualquier aplicación web que requieras. Para obtener
                  una cotización contáctanos. La metodología que seguimos es la
                  siguiente:
                  </p>
                  <ol className="list-decimal text-sm md:text-xl font-light text-gray-500 pl-5">
                  <li>Especificamos las funcionalidades que se requiren.</li>
                  <li>
                     Listamos las tareas por hacer con base en las funcionalidades.
                  </li>
                  <li>
                     Realizamos una cotización con base en las tareas a realizar.
                  </li>
                  <li>Programamos la aplicación web. Incluimos SEO.</li>
                  <li>
                     Aplicamos los cambios necesarios dentro del periodo establecido
                     del servicio.
                  </li>
                  <li>¡Lanzamos tu aplicación web a la red!</li>
                  </ol>
                  <span className="text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2">
                  Contacta para cotizar
                  </span>
               </div>
               {/* image */}
               <img
                  src="https://elements-cover-images-0.imgix.net/488f3792-02f1-40c1-8f45-e528f405b475?auto=compress%2Cformat&fit=max&w=1170&s=bf1fab12220ea9d20756694c719ef8c7"
                  alt=""
                  className="w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full shadow-lg rounded-lg"
               />
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
               <img src="https://elements-cover-images-0.imgix.net/48b07580-6a61-44cc-922b-7050b9bd2985?auto=compress%2Cformat&fit=max&w=1170&s=b1d48b41cff4b6040de57f850d7598eb" alt="" className='w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full rounded-lg shadow-lg' />
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
               <img src="https://elements-cover-images-0.imgix.net/d84f278b-ceec-4da4-94ac-fb6b1e5d0e82?auto=compress%2Cformat&fit=max&w=1170&s=e349c419f6b1d2a48cd2f359d3786f16" alt="" className='w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full rounded-lg shadow-lg' />
            </div>
         </div>
      </div>
   );
}