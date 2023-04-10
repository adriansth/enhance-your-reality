export default function Description() {
   return(
      <div className='w-screen bg-slate-100 py-20 px-10 md:px-20 flex flex-col gap-y-20 xl:flex-row justify-between items-center'>
         {/* info */}
         <div className='flex flex-col gap-y-5 xl:w-[40%]'>
            <h2 className='text-5xl font-semibold pb-5 text-violet-900 border-b border-gray-300'>Bienvenido a Qüu [Enhance Your Reality]</h2>
            <p className='font-light text-gray-500 text-xl text-justify'>
               Somos una <span className='text-violet-900 font-semibold'>empresa de desarrollo tecnológico y transformación digital</span>; estamos aquí para ayudarte a desarrollar soluciones de tecnología innovadoras y creativas que impulsen tu negocio hacia el éxito.
            </p>
            <p className='font-light text-gray-500 text-xl text-justify'>
               En un mundo cada vez más apegado a lo digital, es crucial que las empresas tengan una <span className='text-violet-900 font-semibold'>buena presencia en línea</span>, generen comunidades para interactuar con sus clientes y que utilicen las herramientas tecnológicas adecuadamente para <span className='text-violet-900 font-semibold'>mejorar sus procesos y lograr sus objetivos</span>.
            </p>
            <p className='font-light text-gray-500 text-xl text-justify'>
               En nuestra empresa, estamos dedicados a ayudarte a ser tu mejor socio y juntos ir de la mano a alcanzar estos <span className='text-violet-900 font-semibold'>objetivos de la manera más eficiente posible</span>.
            </p>
            <p className='font-light text-gray-500 text-xl text-justify'>
               Si buscas un equipo apasionado y comprometido para ayudarte a alcanzar tus objetivos empresariales.
            </p>
            <p className='font-light text-violet-900 font-semibold text-xl text-justify'>
               ¡Qüu es la mejor opción para ti!
            </p>
         </div>
         {/* image */}
         <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='object-cover xl:w-[50%] h-full rounded-lg shadow-lg' />
      </div>
   );
}