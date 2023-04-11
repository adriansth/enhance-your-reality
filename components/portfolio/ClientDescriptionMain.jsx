export default function ClientDescriptionMain({ name, description }) {
     return(
          <div className='w-screen h-[40vh] pt-32 px-20'>
               <div className='flex flex-col gap-y-5'>
                    <h1 className='text-4xl md:text-7xl font-semibold text-white'>{name}</h1>
                    <h2 className='text-xs md:text-sm text-white font-light'>{description}</h2>
               </div>
          </div>
     );
}