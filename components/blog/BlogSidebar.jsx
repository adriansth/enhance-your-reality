export default function BlogSidebar() {
   return(
      <div className='w-[30vw] py-20 pl-10 pr-20 flex flex-col gap-y-10'>
         {/* about */}
         <div className='flex flex-col gap-y-5'>
            <h2 className='font-semibold text-2xl'>NOSOTROS</h2>
            <p className='text-gray-500 font-light'>
               Somos una empresa de desarrollo tecnológico y transformación digital; creemos en la importancia de la creatividad y la innovación para crear soluciones tecnológicas efectivas para nuestros clientes.
            </p>
         </div>
         {/* categories */}
         <div className='flex flex-col gap-y-5'>
            <h2 className='font-semibold text-2xl'>CATEGORÍAS</h2>
            <div className='text-gray-500 font-semibold flex flex-col gap-y-3'>
               <span>Marketing</span>
               <span>Tecnología</span>
               <span>Negocios</span>
            </div>
         </div>
         {/* recent posts */}
         <div className='flex flex-col gap-y-5'>
            <h2 className='font-semibold text-2xl'>POSTS RECIENTES</h2>
            <div className='text-gray-500 font-semibold flex flex-col gap-y-3'>
               <span>Nuestro Manifiesto</span>
            </div>
         </div>
         {/* tags */}
         <div className='flex flex-col gap-y-5'>
            <h2 className='font-semibold text-2xl'>TAGS</h2>
            <div className='text-gray-500 font-semibold flex gap-x-3 flex-wrap'>
               <span>Creatividad</span>
               <span>Diseño</span>
               <span>Tecnología</span>
               <span>Digital</span>
               <span>Ideas</span>
               <span>Innovación</span>
               <span>Marketing</span>
               <span>Proyecto</span>
               <span>Equipo</span>
            </div> 
         </div>
      </div>
   );
}