export default function ClientDescriptionMain({ name, description }) {
     return(
          <div className='w-screen h-[40vh] pt-32 px-20'>
               <div className='h-full flex flex-col justify-center gap-y-5'>
                    <h1 className='text-center text-4xl md:text-7xl font-semibold text-white'>{name}</h1>
                    <h2 className='text-center text-sm md:text-sm text-white font-semibold'>{description}</h2>
               </div>
          </div>
     );
}